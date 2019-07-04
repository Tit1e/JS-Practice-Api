const subjects = {
  add(params) {
    let { router, subject = ''} = params
    return `insert into subjects (router, subject) values ('${router}', '${subject}')`
  },
  get(router) {
    return `select * from subjects where router = '${router}'`
  },
  update(params) {
    let { router, subject = '', id } = params
    return `update subjects set subject = '${subject}' where router = '${router}'`
  },
}

module.exports = subjects