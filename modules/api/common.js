const { router, Result } = require('../../connent')
const $sql = require('./userSqlMapping')
const acClass = require('../baseData/adClass')
const bessnissClass = require('../baseData/bessnissClass')
const illegalType = require('../baseData/illegalType')
const region = require('../baseData/region')
const illegalExpression = require('../baseData/illegalExpression')

/**
 * 获取广告类别
 */
router.get('/common/ad_class', async (req, res) => {
  res.json(new Result({ data: acClass, msg: '获取成功' }))
})

/**
 * 获取商业类别
 */
router.get('/common/bessniss_class', async (req, res) => {
  res.json(new Result({ data: bessnissClass, msg: '获取成功' }))
})

/**
 * 获取违法类别
 */
router.get('/common/illegal_type', async (req, res) => {
  res.json(new Result({ data: illegalType, msg: '获取成功' }))
})

/**
 * 获取全国行政区划
 */
router.get('/common/region', async (req, res) => {
  res.json(new Result({ data: region, msg: '获取成功' }))
})

/**
 * 获取违法表现及违法表现代码
 */
router.get('/common/illegal_expression', async (req, res) => {
  res.json(new Result({ data: illegalExpression, msg: '获取成功' }))
})

module.exports = router