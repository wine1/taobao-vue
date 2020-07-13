var router = require('./router.js');
var pool = require('./pool.js');

//获取商品列表
router.get('/api/goodslist/getGoodsList', (req, res) => {
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
        connection.release();
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
        connection.release();
    })
})
//获取店铺信息
router.get('/api/goodslist/shop', (req, res) => {
    // let sql = 'select shops.id,shops.name from goods left join shops on goods.shopid=shops.id where goods.id=?'
    let sql = 'select * from shops where shops.id = ?';
    pool.getConnection((err, connection) => {
        connection.query(sql, [req.query.shopid], (err, data) => {
            if (err) {
                res.send(err)
            } else {
                if (data.length > 0) {
                    res.send(data)
                }
            }
        })
        connection.release();
    })
})
//获取商店内商品列表
router.get('/api/goodslist/shoplist', (req, res) => {
    // let sql = 'select * from goods left join shops on shops.id=goods.shopid where goods.id=?';
    let sql = 'select * from goods where goods.shopid = ?'
    pool.getConnection((err, connection) => {
        connection.query(sql,[req.query.shopid], (err, data) => {
            if (err) {
                res.send(err)
            } else {
                if (data.length > 0) {
                    res.send(data)
                }
            }
        })
        connection.release();
    })
})
// 获取轮播图
router.get('/api/goodslist/swiper', (req, res) => {
    let sql = 'select pic from goods limit 6';
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
        connection.release();
    })
})

// pool.getConnection((err, connection) => {
//   connection.query('select pic from goods limit 3',function (err,result) { 
//     if(err) {
//       throw err;
//     }else {
//       console.log(result)
//     }
//    })
// })
module.exports = router
