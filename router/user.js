const express = require('express')
const userController = require('../controller/user.js')
const userValidator = require('../validator/user.js')

const router = express.Router()


// 用户登录
router.post('/users/login', userValidator.login , userController.login)

// 用户注册
router.post('/users', userValidator.register,
    //  (req, res, next) => { // 2.判断验证结果
    //     const errors = validationResult(req)
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() })
    //     }
    //     next()
    // }, 
    userController.register) // 3.通过验证，执行具体的控制器处理

// 获取当前登录用户
router.get('/user', userController.getCurrentUser)

// 更新当前登录的用户资料
router.put('/user', userController.updateCurrentUser)


module.exports = router