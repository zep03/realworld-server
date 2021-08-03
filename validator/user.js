const { body } = require('express-validator')
const validate = require('../middleware/validate.js')
const { User } = require('../model/index.js')
const md5 = require('../util/md5.js')

exports.register = validate([
    // 1.配置验证规则
    body('user.username')
        .notEmpty().withMessage('用户名不能为空')
        .custom(async username => { //自定义验证规则
            const user = await User.findOne({
                username: username
            })
            if (user) {
                return Promise.reject('用户名已存在')
            }
        }),
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email')
        .notEmpty().withMessage('邮箱不能为空')
        .isEmail().withMessage('邮箱格式不正确')
        .bail() // 前面的验证通过才会往后执行
        .custom(async email => { //自定义验证规则
            const user = await User.findOne({
                email: email
            })
            if (user) {
                return Promise.reject('邮箱已存在')
            }
        })
])

exports.login = [
    validate([
        body('user.email').notEmpty().withMessage('邮箱不能为空'),
        body('user.password').notEmpty().withMessage('密码不能为空')
    ]),
    validate([
        body('user.email').custom(async (email, { req }) => {
            const user = await User.findOne({
                email: email
            }).select([
                'email',
                'password',
                'username',
                'bio',
                'image'
            ])
            if(!user) {
                return Promise.reject('用户不存在')
            }
            // 将数据挂载到请求对象中，后续的中间件也就可以使用了
            req.user = user
        })
    ]),
    validate([
        body('user.password').custom(async (password, { req }) => {
            console.log(req.user)
            if(md5(password) !== req.user.password) {
                return Promise.reject('密码错误')
            }
        })
    ]),
]