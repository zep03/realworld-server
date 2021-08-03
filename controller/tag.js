// 获取文章标签
exports.getTags =  async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /tags 获取文章标签')
    } catch (err) {
        next(err)
    }
}


