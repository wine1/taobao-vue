var router = require('./router.js');
var pool = require('./pool.js');

//将订单存入数据库
router.post('/api/order/savelist', (req, res) => {
    var sql = "insert into orderlist values (null,?,?,?,?)";
    var sql2 = 'delete from carts where username=? and goodid=?';
    pool.getConnection((err, connection) => {

        connection.query(sql2, [req.body.username, req.body.goodid], (err, data) => {
            if (err) {
                res.send()
                console.log(err)
            } else {
                connection.query(sql, [req.body.username, req.body.goodid, req.body.goodamount, req.body.orderid], (err, data) => {
                    if (err) {
                        res.send()
                        console.log(err)
                    } else {
                        res.send(data)
                    }
                })
            }
        })
        connection.release();
    })
})
//取出订单数据
router.get('/api/order/getlist', (req, res) => {
    var sql = 'select goods.*,orderlist.goodamount from goods, orderlist where orderlist.username = ? and goods.id = orderlist.goodid group by orderid order by orderid'
    // var sql = 'select * from orderlist where username = ?'
    pool.getConnection((err, connection) => {
        connection.query(sql, [req.query.username], (err, data) => {
            if (err) {
                res.send()
            } else {
                res.send(data)
                console.log(data)
            }
        })
        connection.release();
    })
})
module.exports = router
