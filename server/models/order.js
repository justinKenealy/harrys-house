const db = require("../db/index");

const getOrdersByUserId = (user_id) => {
    const sql = "SELECT * FROM orders WHERE user_id = $1;";
    return db.query(sql, [user_id]).then((res) => res.rows);
  };

module.exports = { getOrdersByUserId }
