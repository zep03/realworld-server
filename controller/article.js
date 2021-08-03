// 获取文章列表
exports.getArticles =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /articles')
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
        res.send('get /articles/:slug 获取文章')
    } catch (err) {
        next(err)
    }
}

// 创建文章
exports.createArticle =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('post /articles 创建文章')
    } catch (err) {
        next(err)
    }
}

// 更新文章
exports.updateArticle =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('put /articles/:slug 更新文章')
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