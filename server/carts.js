var router = require('./router.js');
var pool = require('./pool.js');

//添加到购物车
router.post('/api/carts/addgood', (req, res) => {
    var sql = 'insert into carts values(null,?,?,1)';
    pool.getConnection((err, connection) => {
        connection.query('select goodamount from carts where username=? and goodid=?', [req.body.username, req.body.goodid], (err, result) => {
            if (result.length > 0) {
                connection.query('update carts set goodamount=goodamount+1 where username=? and goodid=?', [req.body.username, req.body.goodid], (err, result) => {
                    if (err) {
                        res.send()
                    } else {
                        res.send('加入购物车成功')
                    }
                })
            } else {
                connection.query(sql, [req.body.username, req.body.goodid], (err, data) => {
                    if (err) {
                        res.send()
                    } else {
                        res.send('加入购物车成功')
                    }
                })
            }
        });
        connection.release();
    })
})

// 获取购物车列表
router.get('/api/carts/getcart', (req, res) => {
    var sql = 'select goods.*,carts.goodamount from goods, carts where username = ? and goods.id = carts.goodid'
    pool.getConnection((err, connection) => {
        connection.query(sql, [req.query.username], (err, data) => {
            if (err) {
                res.send()
            } else {
                res.send(data)
            }
        });
        connection.release();
    })
})


module.exports = router
