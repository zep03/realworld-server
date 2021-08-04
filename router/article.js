const express = require('express')
const articleController = require('../controller/article.js')
const auth = require('../middleware/auth.js')
const articleValidator = require('../validator/article.js')

const router = express.Router()

// 获取文章列表
router.get('/articles', articleController.getArticles)

// 获取用户关注的作者的文章列表
router.get('/articles/feed', articleController.getFeedArticles)

// 获取文章
router.get('/articles/:articleId', articleValidator.getArticle ,articleController.getArticle)

// 创建文章
router.post('/articles', auth, articleValidator.createArticle, articleController.createArticle)

// 更新文章
router.put('/articles/:articleId', articleController.updateArticle)

// 删除文章
router.delete('/articles/:articleId', articleController.deleteArticle)

// 为文章添加评论
router.post('/articles/:articleId/comments', articleController.addComments)

// 从文章中获取评论
router.get('/articles/:articleId/comments', articleController.getComments)

// 删除评论
router.delete('/articles/:articleId/comments/:id', articleController.deleteComments)

// 收藏文章
router.post('/articles/:articleId/favorite', articleController.favoriteArticle)

// 取消收藏文章
router.delete('/articles/:articleId/favorite', articleController.unFavoriteArticle)



module.exports = router