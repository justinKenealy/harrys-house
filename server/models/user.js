const db = require("../db/index");

const registerUser = (username, email, password_hash) => {
  const sql =
    'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3);'
    return db.query(sql, [username, email, password_hash]).then((res) => res.rows[0])
}

const getAllUsers = () => {
    return db.query('SELECT * FROM users;').then((res) => res.rows)
  }

module.exports = { registerUser, getAllUsers }