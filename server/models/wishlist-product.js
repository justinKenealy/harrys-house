const db = require("../db/index");

const addToWishlist = (user_id, product_id) => {
    const sql =
      'INSERT INTO wishlist_products (user_id, product_id) VALUES ($1, $2);'
      return db.query(sql, [user_id, product_id,]).then((res) => res.rows[0])
  }

module.exports = { addToWishlist }