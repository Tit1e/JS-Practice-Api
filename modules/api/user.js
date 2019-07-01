const { pool, router, Result, once } = require('../../connent')
const $sql = require('./userSqlMapping')
// 人员列表查询
router.post('/user/query', (req, res) => {
  let data = {}
  // 获取记录
  const list = once($sql.query(req.body)).then(r => {
    if (!r.e) {
      data.list = r.r
    } else {
      return res.json(new Result({ code: 0, data: e.sql }))
    }
  }).catch(e => console.log(e))
  // 获取符合条件及记录总数
  const total = once($sql.query(req.body, true)).then(r => {
    if (!r.e) {
      data.total = r.r[0].count
    } else {
      return res.json(new Result({ code: 0, data: e.sql }))
    }
  }).catch(e => console.log(e))

  // 所有处理执行完成后，返回结果
  Promise.all([list, total]).then(r => {
    res.json(new Result({data: data, msg: '获取成功' }))
  })
})

// 添加人员
router.post('/user/add', (req, res) => {
  let { name, password, checkPassword } = req.body
  // 判断必填项
  if (!name) return res.json(new Result({ code: -1, msg: '请填写用户名' }))
  if (!password) return res.json(new Result({ code: -1, msg: '请填写密码' }))
  if (password !== checkPassword) return res.json(new Result({ code: -1, msg: '请填写密码' }))
  once($sql.add(req.body)).then(r => {
    if (!r.e) {
      res.json(new Result({ msg: '添加成功' }))
    } else {
      return res.json(new Result({ code: 0, data: e.sql }))
    }
  })
})

// 删除人员
router.get('/user/delete', (req, res) => {
  let { id } = req.query
  // 初步判断 id 有效性
  if(!id || !Number(id)) return res.json(new Result({ code: -1, msg: '用户 id 无效' }))
  once($sql.delete(id)).then(r => {
    if (!r.e) {
      res.json(new Result({ msg: '删除成功' }))
    } else {
      return res.json(new Result({ code: 0, data: e.sql }))
    }
  })
})

// 编辑人员
router.post('/user/update', (req, res) => {
  let { id, name, admin, password, checkPassword } = req.body
  if (!id || !Number(id)) return res.json(new Result({ code: -1, msg: 'id 无效' }))
  if(!name) return res.json(new Result({ code: -1, msg: 'name 无效' }))
  if (+admin !== 0 && +admin !== 1) return res.json(new Result({ code: -1, msg: 'admin 无效' }))
  if (password) {
    if (password.length < 6) return res.json(new Result({ code: -1, msg: '密码长度不能小于 6' }))
    if(password !== checkPassword) return res.json(new Result({ code: -1, msg: '两次输入的密码不一致' }))
  }
  once($sql.update(req.body)).then(r => {
    if (!r.e) {
      res.json(new Result({ msg: '修改成功' }))
    } else {
      return res.json(new Result({ code: 0, data: e.sql }))
    }
  })
})

module.exports = router