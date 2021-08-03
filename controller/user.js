const { User } = require('../model/index.js')


// 用户登录
exports.login =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('post /users/login')
    } catch (err) {
        next(err)
    }
}

// 用户注册
exports.register =  async (req, res, next) => {
    try {
        // 1. 获取请求体数据
        console.log(req.body)
        // 2. 数据验证
        //  2.1 基本数据验证
        //  2.2 业务数据验证
        // 3. 验证通过，将数据保存到数据库
        let user = new User(req.body.user) // 构造user对象
        
        await user.save() // 保存到数据库
        
        // user本来是一个mongoose对象，
        // 需要toJSON()之后delete user.password才会生效
        user = user.toJSON()
        // 删除user里面的password字段，这样就不会返回password字段给前端
        delete user.password

        // 4. 发送成功响应
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// 获取当前登录用户
exports.getCurrentUser =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /user')
    } catch (err) {
        next(err)
    }
}

// 更新当前登录的用户资料
exports.updateCurrentUser =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('put /user')
    } catch (err) {
        next(err)
    }
}