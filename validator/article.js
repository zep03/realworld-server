const { body, param } = require('express-validator')
const validate = require('../middleware/validate.js')
const mongoose = require('mongoose')
const { Article } = require('../model/index.js')

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('文章标题不能为空'),
    body('article.description').notEmpty().withMessage('文章摘要不能为空'),
    body('article.body').notEmpty().withMessage('文章内容不能为空')
])

exports.getArticle = validate([
    param('articleId').custom(async value => {
        if (!mongoose.isValidObjectId(value)) {
            // 返回一个失败状态的promise
            return Promise.reject('文章ID类型错误')
            // 同步失败
            // throw new Error('文章ID类型错误')
        }
        // 同步成功
        // return true
    })
])

exports.updateArticle = [
    validate([
        validate.isValidObjectId(['params'], 'articleId')
    ]),
    async (req, res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        req.article = article
        if(!article) {
            return res.status(404).json({
                errors: '文章ID错误，不存在该文章'
            })
        }
        next()
    },
    async (req, res, next) => {
        if(req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).json({
                errors: '你不是文章的作者，没有更新文章操作权限'
            })
        }
        next()
    }

]

// 校验文章是否存在
// 修改的文章的作者是否是当前登录的用户