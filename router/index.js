const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

// 用户相关的路由
router.use(require('./user.js'))

// 用户资料相关路由
router.use(require('./profile.js'))

// 文章相关的路由
router.use(require('./article.js'))

// 标签相关的路由
router.use(require('./tag.js'))




module.exports = router