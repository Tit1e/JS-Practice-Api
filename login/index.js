const { pool, router, Result } = require('../connent')

router.get('/', (req, res) => {
  console.log(req.query,req.params,req.body)
  pool.getConnection((err, connection) => {
    connection.query(`select * from user`, (e, r) => {
      res.json(new Result({data: r}))
    })
    connection.release()
  })
})

module.exports = router