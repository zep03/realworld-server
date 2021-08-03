var mongoose = require('mongoose')
const baseModel = require('./base-model.js')
const md5 = require('../util/md5.js')

const userSchema = new mongoose.Schema({
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
        required: true,
        set: (value) => md5(value),
        select: false // 指定该字段在查询出的数据中是否显示，false表示不查询该字段

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

module.exports = userSchema