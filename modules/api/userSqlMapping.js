const user = {
  add(params) {
    let { name, password, admin = 0, status = 1 } = params
    let create_time = Math.floor(+new Date() / 1000)
    return `insert into user(name, password, admin, status, create_time) values ('${name}', '${password}', ${admin}, ${status}, ${create_time})`
  },
  query(params, getcount = false) {
    let { name = '', admin = -1, create_time = '', page = 1, page_size = 10 } = params
    let s;
    let e;
    // 如果传了时间，对时间进行处理
    if (create_time) {
      [s, e] = create_time.split(',')
      s = Math.floor(+new Date(`${s} 00:00:00`) / 1000)
      e = Math.floor(+new Date(`${e} 23:59:59`) / 1000)
    }
    // 基础 sql
    let sqlName = name === '' ? '' : `and name like '%${name}%'`
    let sqlAdmin = +admin === -1 ? '' : `and admin = ${admin}`
    let sqlCreateTime = create_time === '' ? '' : `and create_time between ${s} and ${e}`
    let sql = [sqlName, sqlAdmin, sqlCreateTime].join(' ')
    if(getcount) return `select count(*) as count from user where status = 1 ${sql}`
    return `select id, name, admin, status, create_time from user where status = 1 ${sql} order by create_time DESC limit ${(page - 1) * page_size}, ${page_size}`
  },
  update(params) {
    let { id, name = '', admin, password } = params
    let sqlPassword = password ? `, password = '${password}'` : ''
    return `update user set name = '${name}', admin = '${admin}'${sqlPassword} where id = ${id}`
  },
  delete(id) {
    return `delete from user where id = ${id}`
  }
}

module.exports = user