const { pool, router, Result } = require('../../connent')
const STS = require('qcloud-cos-sts')

// 配置参数
const config = {
  secretId: 'AKIDpY7WmttY7tjYEjSzpdcUFqGVZXN3As8G',   // 固定密钥
  secretKey: 'BKUYSNLD51tjRyLrEUaUDpIcljZEiBar',  // 固定密钥
  proxy: '',
  durationSeconds: 3600,  // 密钥有效期
  // 放行判断相关参数
  bucket: 'source-1251959693', // 换成你的 bucket
  region: 'ap-chengdu', // 换成 bucket 所在地区
  allowPrefix: '*' // 这里改成允许的路径前缀，可以根据自己网站的用户登录态判断允许上传的目录，例子：* 或者 a/* 或者 a.jpg
}
/**
 * 腾讯云获取临时密钥
 */
router.get('/common/get_upload_token', (req, res) => {
  const scope = [{
    action: 'name/cos:PutObject',
    bucket: config.bucket,
    region: config.region,
    prefix: 'jspractice/*',
  }];
  const policy = STS.getPolicy(scope);
  STS.getCredential({
    secretId: config.secretId,
    secretKey: config.secretKey,
    proxy: config.proxy,
    policy: policy,
    durationSeconds: config.durationSeconds,
  }, (err, credential) => {
    res.json(new Result({data: credential}))
  });
})

router.get('/', (req, res) => {
  console.log(req.query,req.params,req.body)
  pool.getConnection((err, connection) => {
    connection.query(`select * from user where user_name like '%${req.query}%'`, (e, r) => {
      res.json(new Result({data: r}))
    })
    connection.release()
  })
})

module.exports = router