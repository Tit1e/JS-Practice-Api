const { app, pool } = require("./connent")
const common = require("./modules/api/common")
const user = require("./modules/api/user")
const subjects = require("./modules/api/subjects")

app.all("*", (req, res, next) => {
  next()
})

app.all("/", (req, res) => {
})

app.use("/api", common, user, subjects)

app.listen(3000, () => {
  console.log("服务在 3000 端口启用")
})
