var router = require('./router.js');
var pool = require('./pool.js');
// 获取城市列表
router.get("/api/city", (req, res) => {
    var sql = "select letter,GROUP_CONCAT(cityname) as name from city group by letter order by letter asc";
    pool.getConnection((err, connection) => {
      connection.query(sql, (err, data) => {
        if (err) {
          res.send();
        } else {
          res.send(data);
        }
      });
      connection.release();
    });
  });

module.exports = router
