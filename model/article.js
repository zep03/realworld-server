var mongoose = require('mongoose')
const baseModel = require('./base-model.js')

const articleSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // 个人介绍
    bio: {
        type: String,
        default: null
    },
    // 用户头像
    image: {
        type: String,
        default: null
    },
    ...baseModel
})

module.exports = articleSchema