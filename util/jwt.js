const jwt = require('jsonwebtoken')
const { promisify } = require('util')

// 把sign()回调函数转换成支持promise的sign()形式
exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)

// jwt.decode() // 不做验证，将token直接进行解析
exports.decode = promisify(jwt.decode)





// // 以同步的方式，生成jwt
// // const token = jwt.sign({
// //     foo: 'bar'
// // }, 'zepzepep')

// // 以异步的方式，生成jwt
// const token = jwt.sign({
//     foo: 'bar'
// }, 'zepzepep', (err, token) => {
//     if(err) {
//         return console.log('生成token失败！')
//     }
//     console.log(token)
// })

// // 以同步的方式，验证jwt
// // const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2Mjc5OTI5MTd9.XkR-DLthQLFxwsNKj5Ex8hSUaFGlHia_zJtm2leziSk'
// //             ,'zepzepep')
// // console.log(ret)

// // 以异步的方式，验证jwt
// const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2Mjc5OTI5MTd9.XkR-DLthQLFxwsNKj5Ex8hSUaFGlHia_zJtm2leziSk'
//             ,'zepzepep', (err, ret) => {
//                 if(err) {
//                     return console.log('token解析失败！')
//                 }
//                 console.log(ret)
//             })
