const { verify } = require('../util/jwt.js')
const { jwtSecret } = require('../config/config.default.js')
const { User } = require('../model/index.js')

module.exports = async (req, res, next) => {
    // 从请求头获取 token 数据
    var token = req.headers['authorization']
    token = token ? token.split('Bearer ')[1] : null
    if(!token) {
        return res.status(401).end()
    }
    // 验证token是否有效
    try {
        const decodedToken = await verify(token, jwtSecret)
        console.log(decodedToken)
        const user = await User.findById(decodedToken.userId)
        req.user = user
        next()
    } catch (err) {
        return res.status(401).end()
    }
    // 无效 -> 响应401
    // 有效 -> 把用户信息读取出来挂载到 req 请求对象上
    // 继续往后执行
}