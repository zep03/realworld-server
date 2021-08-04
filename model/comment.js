var mongoose = require('mongoose')
const baseModel = require('./base-model.js')
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    // 评论内容
    body: {
        type: String,
        required: true
    },
    // 评论人的信息
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ...baseModel
})

module.exports = commentSchema