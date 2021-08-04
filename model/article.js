var mongoose = require('mongoose')
const baseModel = require('./base-model.js')
const Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // 文章内容
    body: {
        type: String,
        required: true
    },
    // 文章标签
    tagList: {
        type: [String],
        default: null
    },
    // 点赞数量
    favoritesCount: {
        type: Number,
        default: 0
    },
    // 文章作者信息
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ...baseModel
})

module.exports = articleSchema