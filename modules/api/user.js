const { pool, router, Result } = require('../../connent')
const $sql = require('./userSqlMapping')
// 人员列表查询
router.post('/user/query', (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query($sql.query(req.body), (e, r) => {
      if (!e) {
        res.json(new Result({ data: r, msg: '获取成功' }))
      } else {
        res.json(new Result({ code: 0, data: e.sql }))
      }
    })
    connection.release()
  })
})

// 添加人员
router.post('/user/add', (req, res) => {
  pool.getConnection((err, connection) => {
    let { name, password, admin = 0, status = 1 } = req.body
    // 判断必填项
    if(!name) return res.json(new Result({ code: -1, msg: '请填写用户名' }))
    if (!password) return res.json(new Result({ code: -1, msg: '请填写密码' }))
    // 生成 unix 时间戳
    let create_time = Math.floor(+new Date() / 1000)
    connection.query($sql.add, [name, password, admin, status, create_time], (e, r) => {
      if (!e) {
        res.json(new Result({ msg: '添加成功' }))
      } else {
        res.json(new Result({ code: 0, data: e.sql }))
      }
    })
    connection.release()
  })
})

// 删除人员
router.get('/user/delete', (req, res) => {
  pool.getConnection((err, connection) => {
    let { id } = req.query
    // 初步判断 id 有效性
    if(!id || !Number(id)) return res.json(new Result({ code: -1, msg: '用户 id 无效' }))
    connection.query($sql.delete(id), (e, r) => {
      if (!e) {
        res.json(new Result({ msg: '删除成功' }))
      } else {
        res.json(new Result({ code: 0, data: e.sql }))
      }
    })
    connection.release()
  })
})

// 编辑人员
router.post('/user/update', (req, res) => {
  pool.getConnection((err, connection) => {
    let { id, name, admin, password, checkPassword } = req.body
    if (!id || !Number(id)) return res.json(new Result({ code: -1, msg: 'id 无效' }))
    if(!name) return res.json(new Result({ code: -1, msg: 'name 无效' }))
    if (+admin !== 0 && +admin !== 1) return res.json(new Result({ code: -1, msg: 'admin 无效' }))
    if (password) {
      if (password.length < 6) return res.json(new Result({ code: -1, msg: '密码长度不能小于 6' }))
      if(password !== checkPassword) return res.json(new Result({ code: -1, msg: '两次输入的密码不一致' }))
    }
    connection.query($sql.update(req.body), (e, r) => {
      if (!e) {
        res.json(new Result({ msg: '修改成功' }))
      } else {
        res.json(new Result({ code: 0, data: e.sql }))
      }
    })
    connection.release()
  })
})

module.exports = router