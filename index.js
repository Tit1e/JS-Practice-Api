const { app, pool } = require("./connent")
const login = require("./login/")

app.all("*", (req, res, next) => {
  next()
})

app.all("/", (req, res) => {
  pool.getConnection((err, connection) => {
    res.json({ a: "b" })
    connection.release()
  })
  next()
});

app.use("/login", login)

app.listen(8999, () => {
  console.log("服务在 8999 端口启用")
})
