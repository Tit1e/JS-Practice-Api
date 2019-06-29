const express=require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const $conf = require('./conf/db')

const router = express.Router()
const app = express()


app.use(cors()) // 解决跨域
app.use(bodyParser.json()) // json 请求
app.use(bodyParser.urlencoded({ extended: false }))// 表单请求

function Result({ code = 200, msg = "", data = {} }) {
  this.code = code
  this.data = data
  this.msg = msg
}

let pool;
const repool = () => {
  pool = mysql.createPool({
    connectionLimit: 100, // 连接数量
    queueLimit: 0, //最大连接等待数，0 为不限制
    waitForConnections: true, // 当无连接池可用时，等待（true）还是抛出错误（false）
    ...$conf.mysql
  })
  pool.on('error', err => err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(repool, 2000))
  app.all('*',(_, __, next) => pool.getConnection(err => err && setTimeout(repool, 2000) || next()))
}
repool()

module.exports = {
  pool,
  Result,
  router,
  app
}