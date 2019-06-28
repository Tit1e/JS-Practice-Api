const { app, pool } = require("./connent")
const common = require("./modules/api/common")

app.all("*", (req, res, next) => {
  next()
})

app.all("/", (req, res) => {
})

app.use("/api", common)

app.listen(3000, () => {
  console.log("服务在 3000 端口启用")
})
