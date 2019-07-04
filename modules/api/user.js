const { router, Result, once } = require('../../connent')
const $sql = require('./userSqlMapping')
// 人员列表查询
router.post('/user/query', async (req, res) => {
  const data = {}
  // 获取记录
  const list = await once($sql.query(req.body))
  if (!list.e) {
    data.list = list.r
  } else {
    return res.json(new Result({ code: 0, data: list.e.sql }))
  }
  // 获取符合条件及记录总数
  const total = await once($sql.query(req.body, true))
  if (!total.e) {
    data.total = total.r[0].count
  } else {
    return res.json(new Result({ code: 0, data: total.e }))
  }

  res.json(new Result({data: data, msg: '获取成功' }))
})

// 添加人员
router.post('/user/add', async (req, res) => {
  const { name, password, checkPassword } = req.body
  // 判断必填项
  if (!name) return res.json(new Result({ code: -1, msg: '请填写用户名' }))
  if (!password) return res.json(new Result({ code: -1, msg: '请填写密码' }))
  if (password !== checkPassword) return res.json(new Result({ code: -1, msg: '两次密码输入不相同' }))
  const r = await once($sql.add(req.body))
  if (!r.e) {
    res.json(new Result({ msg: '添加成功' }))
  } else {
    return res.json(new Result({ code: 0, data: r.e }))
  }
})

// 删除人员
router.get('/user/delete', async (req, res) => {
  const { id } = req.query
  // 初步判断 id 有效性
  if(!id || !Number(id)) return res.json(new Result({ code: -1, msg: '用户 id 无效' }))
  const r = await once($sql.delete(id))
  if (!r.e) {
    res.json(new Result({ msg: '删除成功' }))
  } else {
    return res.json(new Result({ code: 0, data: r.e }))
  }
})

// 编辑人员
router.post('/user/update', async (req, res) => {
  const { id, name, admin, password, checkPassword } = req.body
  if (!id || !Number(id)) return res.json(new Result({ code: -1, msg: 'id 无效' }))
  if(!name) return res.json(new Result({ code: -1, msg: 'name 无效' }))
  if (+admin !== 0 && +admin !== 1) return res.json(new Result({ code: -1, msg: 'admin 无效' }))
  if (password) {
    if (password.length < 6) return res.json(new Result({ code: -1, msg: '密码长度不能小于 6' }))
    if(password !== checkPassword) return res.json(new Result({ code: -1, msg: '两次输入的密码不一致' }))
  }
  const r = await once($sql.update(req.body))
  if (!r.e) {
    res.json(new Result({ msg: '修改成功' }))
  } else {
    return res.json(new Result({ code: 0, data: r.e }))
  }
})

module.exports = router