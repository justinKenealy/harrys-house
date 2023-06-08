const db = require("../db/index");

const registerUser = (username, email, password_hash) => {
  const sql =
    "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3);";
  return db
    .query(sql, [username, email, password_hash])
    .then((res) => res.rows[0]);
};

const getAllUsers = () => {
  return db.query("SELECT * FROM users;").then((res) => res.rows);
};

const getUserById = (id) => {
  const sql = "SELECT * FROM users WHERE id=$1"
  return db.query(sql, [id]).then((res) => res.rows);
};

const updateUserPasswordById = (id, password_hash) => {
  const sql = "UPDATE users SET password_hash=$1 WHERE id=$2";
  return db.query(sql, [password_hash, id]).then((res) => res.rowCount);
};

module.exports = { registerUser, getUserById, getAllUsers, updateUserPasswordById };
