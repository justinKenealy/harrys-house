const db = require("../db/index");

const addToWishlist = (user_id, product_id) => {
  const sql =
    "INSERT INTO wishlist_products (user_id, product_id) VALUES ($1, $2);";
  return db.query(sql, [user_id, product_id]).then((res) => res.rows[0]);
};

const getWishlistProducts = (user_id) => {
  const sql = "SELECT * FROM wishlist_products WHERE user_id = $1;";
  return db.query(sql, [user_id]).then((res) => res.rows);
};

const deleteWishlistProduct = (user_id, product_id) => {
  const sql =
    "DELETE FROM wishlist_products WHERE user_id = $1 AND product_id = $2;";
  return db.query(sql, [user_id, product_id]).then((res) => res.rowCount > 0);
};

module.exports = { addToWishlist, getWishlistProducts, deleteWishlistProduct };
