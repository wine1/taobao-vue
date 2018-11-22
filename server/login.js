var router = require('./router.js');
var pool = require('./pool.js');

// pool.getConnection((err, connection) => {
//   connection.query('delete from carts where username="1234" and goodid="6"',function (err,result) { 
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
        console.log(err)
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
    });
    connection.release();
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
            res.send( )
          } else {
            res.send(data)
          }
          
        })
      }
    });
    connection.release();
  })
});
//修改密码
router.post('/api/user/repass',(req,res)=> {
  var sql1 = 'select * from users where username =? and password=?';
  var sql2 = 'update users set password=? where username=?'
  pool.getConnection((err,connection)=> {
    connection.query(sql1,[req.body.username,req.body.oldpass],(err,result)=>{
      if(result.length > 0) {
        connection.query(sql2,[req.body.newpass,req.body.username],(err,data)=>{
          if(err) {
            console.log(err)
          }else {
            res.send(data)
          }
        })
      }else {
        console.log(err)
        res.status(500).send('用户名和密码不匹配')
      }
    });
    connection.release();
  })
})
module.exports = router
