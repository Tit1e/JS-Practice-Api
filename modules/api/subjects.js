const { router, Result, once } = require('../../connent')
const $sql = require('./subjectsSqlMapping')

router.post('/subject/update', async (req, res) => {
  const { router, id="" } = req.body
  if (!router) return res.json(new Result({ code: -1, msg: 'router 为必传项' }))
  const { r: _r } = await once(`select count(*) as count from subjects where router = '${router}'`)
  const r = _r[0].count ? await once($sql.update(req.body)) : await once($sql.add(req.body))
  if (!r.e) {
    res.json(new Result({ msg: '保存成功' }))
  } else {
    return res.json(new Result({ code: 0, data: r.e }))
  }
})

router.get('/subject/get', async (req, res) => {
  const { router } = req.query
  if (!router) return res.json(new Result({ code: -1, msg: 'router 为必传项' }))
  const r = await once($sql.get(router))
  if (!r.e) {
    let data = r.r.length > 0 ? r.r[0] : {}
    res.json(new Result({ data, msg: '获取成功' }))
  } else {
    return res.json(new Result({ code: 0, data: r.e }))
  }
})

module.exports = router