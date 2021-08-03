const crypto = require('crypto')

// 获取crypto 支持的散列算法
// console.log(crypto.getHashes())

// const ret = crypto.createHash('md5')
//     .update('hello')
//     .digest('hex')
// console.log(ret)
module.exports = (str) => {
    return crypto.createHash('md5')
    .update('zep' + str)
    .digest('hex')
}