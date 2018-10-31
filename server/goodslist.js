var router = require('./router.js');
var pool = require('./pool.js');

//获取商品列表
router.get('/api/goodslist/get', (req, res) => {
    let sql = 'select * from goods';
    pool.getConnection((err, connection) => {
        connection.query(sql, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                if (data.length > 0) {
                    res.send(data)
                }
            }
        })
    })
})
//获取商品详情
router.get('/api/goodslist/details', (req, res) => {
    let sql = 'select * from goods where id=?';
    pool.getConnection((err, connection) => {
        connection.query(sql, [req.query.goodsid], (err, data) => {
            if (err) {
                res.send(err)
            } else {
                if (data.length > 0) {
                    res.send(data)
                }
            }
        })
    })
})
// pool.getConnection((err, connection) => {
//   connection.query('select * from goods where id=7',function (err,result) { 
//     if(err) {
//       throw err;
//     }else {
//       console.log(result)
//     }
//    })
// })
module.exports = router
