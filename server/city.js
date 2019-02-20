var router = require("./router.js");
var pool = require("./pool.js");

// 获取城市列表
router.get("/api/city", (req, res) => {
  var sql = "select * from city";
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

module.exports = router;
