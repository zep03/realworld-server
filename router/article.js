const express = require('express')
const articleController = require('../controller/article.js')
const router = express.Router()

// 获取文章列表
router.get('/articles', articleController.getArticles)

// 获取用户关注的作者的文章列表
router.get('/articles/feed', articleController.getFeedArticles)

// 获取文章
router.get('/articles/:slug', articleController.getArticle)

// 创建文章
router.post('/articles',articleController.createArticle)

// 更新文章
router.put('/articles/:slug', articleController.updateArticle)

// 删除文章
router.delete('/articles/:slug', articleController.deleteArticle)

// 为文章添加评论
router.post('/articles/:slug/comments', articleController.addComments)

// 从文章中获取评论
router.get('/articles/:slug/comments', articleController.getComments)

// 删除评论
router.delete('/articles/:slug/comments/:id', articleController.deleteComments)

// 收藏文章
router.post('/articles/:slug/favorite', articleController.favoriteArticle)

// 取消收藏文章
router.delete('/articles/:slug/favorite', articleController.unFavoriteArticle)



module.exports = router