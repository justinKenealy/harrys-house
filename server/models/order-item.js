const db = require("../db/index");

const getOrderItemsByOrderId = (orderIDArray) => {
    const sql = 'SELECT * FROM order_items WHERE order_id = ANY($1)';
    return db.query(sql, [orderIDArray]).then((res) => res.rows);
  };

module.exports = { getOrderItemsByOrderId }
