var router = require('./router.js');
var pool = require('./pool.js');

router.post('/api/user/login', (req, res) => {
  // let sql = 'select id, username, password, telephone,image where username=? and password=?'
  // pool.getConnection((err, connection) => {
  //   connection.query(sql, [req.body.username, req.body.password], (err, data) => {
  //     if (error) {
  //       res.send(err)
  //     } else {
  //       if (data.length > 0) {
  //           res.status(200).send({
  //               id: data[0].id,
  //               username: data.username,
  //               telephone:data[0].telephone,
  //               password:data[0].password,
  //               image:data[0].image
  //           })
  //       }else {
  //           res.status.send({code:500,message:'用户名或密码不正确'})
  //       }
  //     }
  //   })
  // })
  res.status(200).send({
    id: 1,
    username: 'tian',
    telephone: '12323',
    password: '123',
    image: null
  })
})

module.exports = router
