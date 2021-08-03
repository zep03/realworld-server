const express = require('express')
const profileController = require('../controller/profile.js')
const router = express.Router()


// 获取用户个人资料
router.get('/profiles/:username', profileController.getProfile)

// 关注用户
router.post('/profiles/:username/follow', profileController.followUser)

// 取消关注用户
router.delete('/profiles/:username/follow', profileController.unFollowUser)


module.exports = router