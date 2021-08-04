const { Article, User } = require("../model")

// 获取文章列表
exports.getArticles =  async (req, res, next) => {
    try {
        // 处理请求
        const { limit = 20, offset = 0, tag, author } = req.query
        const filter = {}
        if(tag) {
            filter.tagList = tag
        }
        if(author) {
            const user = await User.findOne({ username: author })
            filter.author = user ? user._id : null
        }
        const article = await Article.find(filter)
        .skip(Number.parseInt(offset)) // 跳过多少条
        .limit(Number.parseInt(limit)) // 取多少条
        .sort({
            // -1降序， 1 升序
            createdAt: -1
        })
        const articlesCount = await Article.countDocuments()
        res.status(200).json({
            article: article,
            articlesCount: articlesCount
        })
    } catch (err) {
        next(err)
    }
}

// 获取用户关注的作者的文章列表
exports.getFeedArticles =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /articles/feed')
    } catch (err) {
        next(err)
    }
}

// 获取文章
exports.getArticle =  async (req, res, next) => {
    try {
        // 处理请求
        const article = await Article.findById(req.params.articleId)
        .populate('author')
        if(!article) {
            return res.status(404).end()
        }
        res.status(200).json({
            article: article
        })
    } catch (err) {
        next(err)
    }
}

// 创建文章
exports.createArticle =  async (req, res, next) => {
    try {
        // 处理请求
        const article = new Article(req.body.article)
        article.author = req.user._id
        article.populate('author').execPopulate()
        await article.save()
        res.status(201).json({
            article: article
        })
    } catch (err) {
        next(err)
    }
}

// 更新文章
exports.updateArticle =  async (req, res, next) => {
    try {
        // 处理请求
        // 数据库中查询出来的文章（修改前的文章）
        const article = req.article
        // 请求体中的文章数据
        const bodyArticle = req.body.article
        article.title = bodyArticle.title || article.title
        article.description = bodyArticle.description || article.description
        article.body = bodyArticle.body || article.body
        await article.save()
        res.status(200).json({
            article: article
        })
    } catch (err) {
        next(err)
    }
}

// 删除文章
exports.deleteArticle =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('delete /articles/:slug 删除文章')
    } catch (err) {
        next(err)
    }
}

// 为文章添加评论
exports.addComments =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('post /articles/:slug/comments 为文章添加评论')
    } catch (err) {
        next(err)
    }
}

// 从文章中获取评论
exports.getComments =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /articles/:slug/comments 从文章中获取评论')
    } catch (err) {
        next(err)
    }
}

// 删除评论
exports.deleteComments =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('delete /articles/:slug/comments/:id 删除评论')
    } catch (err) {
        next(err)
    }
}

// 收藏文章
exports.favoriteArticle =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('post /articles/:slug/favorite 收藏文章')
    } catch (err) {
        next(err)
    }
}

// 取消收藏文章
exports.unFavoriteArticle =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('delete /articles/:slug/favorite 取消收藏文章')
    } catch (err) {
        next(err)
    }
}