const express = require('express')
const tagsController = require('../controller/tag.js')
const router = express.Router()

// 获取文章标签
router.get('/tags', tagsController.getTags)

module.exports = router