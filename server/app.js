require("dotenv").config();

const express = require("express");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

const db = require("./db");
const usersController = require('./controllers/users')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
  })
);

app.use(express.static("client"));
app.use(express.json());

app.use("/api/users", usersController);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
