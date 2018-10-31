var router = require('./router.js');
var pool = require('./pool.js');

// pool.getConnection((err, connection) => {
//   connection.query('insert into users (id,username,password) values ("2","jing","123")',function (err,result) { 
//     if(err) {
//       throw err;
//     }else {
//       console.log(result)
//     }
//    })
// })
// 登录
router.get('/api/user/login', (req, res) => {
  let sql = 'select * from users where username=? and password=?'
  pool.getConnection((err, connection) => {
    connection.query(sql, [req.query.username, req.query.password], (err, data) => {
      if (err) {
        res.send(err)
      } else { 
        if (data.length > 0) {
          res.status(200).send({
            id: data[0].id,
            username: data[0].username,
            telephone: data[0].telephone,
            password: data[0].password,
            image: data[0].image
          })
        } else {
          res.status(500).send({
            code: 500,
            message: '用户名或密码不正确'
          })
        }
      }
    })
  })

})
//注册
router.post('/api/user/register', (req, res) => {
  var sql = 'insert into users values(null,?,?,null,null,null)'
  pool.getConnection((err, connection) => {
    connection.query('select * from users where username=?', [req.body.username], (err, result) => {
      if (result.length > 0) {
        res.status(500).send('用户名已存在')
      } else {
        connection.query(sql, [req.body.username, req.body.password], (err, data) => {
          if (err) {
            res.send(err)
          } else {
            res.send(data)
          }
          connection.release()
        })
      }
    })
  })
});
module.exports = router
