const { app, pool } = require("./connent")
const login = require("./login/")

app.all("*", (req, res, next) => {
  next()
})

app.all("/", (req, res) => {
})

app.use("/login", login)

app.listen(3000, () => {
  console.log("服务在 3000 端口启用")
})
