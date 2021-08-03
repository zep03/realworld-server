const express = require('express')
const userController = require('../controller/user.js')
const router = express.Router()


// 用户登录
router.post('/users/login', userController.login)

// 用户注册
router.post('/users', userController.register)

// 获取当前登录用户
router.get('/user', userController.getCurrentUser)

// 更新当前登录的用户资料
router.put('/user', userController.updateCurrentUser)



module.exports = router