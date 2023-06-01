const db = require("../db/index");

const getAllProducts = () => {
    return db.query('SELECT * FROM products;').then((res) => res.rows)
  }

module.exports = { getAllProducts }