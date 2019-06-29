const user = {
  add: 'insert into user(name, password, admin, status, create_time) values (?, ?, ?, ?, ?)',
  query(params) {
    let { name = '', admin = -1, create_time = '' } = params
    let s;
    let e;
    // 如果传了时间，对时间进行处理
    if (create_time) [s, e] = create_time.split(',')
    // 基础 sql
    let base = 'select * from user where status = 1'
    let sqlName = name === '' ? '' : `and name like '%${name}%'`
    let sqlAdmin = admin === -1 ? '' : `and admin = ${admin}`
    let sqlCreateTime = create_time === '' ? '' : `and create_time between ${s} and ${e}`
    return [ base, sqlName, sqlAdmin, sqlCreateTime ].join(' ')
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