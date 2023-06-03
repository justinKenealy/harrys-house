const axios = require("axios");
const express = require("express");
const { getAllUsers, registerUser } = require("../models/user");
const { generateHash } = require("../utils/password-verification");

const router = express.Router();

// register user
router.post("/", async (req, res, next) => {
  const { username, email, password1, password2 } = Object.entries(
    req.body
  ).reduce((obj, [key, value]) => {
    obj[key] = value.trim();
    return obj;
  }, {});
  try {
    if (!username || !email || !password1 || !password2) {
      const customError = new Error("All fields must be complete.");
      customError.status = 400;
      return next(customError);
    }
    if (password1 !== password2) {
      const customError = new Error("The passwords do not match.");
      customError.status = 400;
      return next(customError);
    }
    if (password1.length < 8) {
      const customError = new Error("Password is too short.");
      customError.status = 400;
      return next(customError);
    }
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (
      !/\d/.test(password1) ||
      !/[A-Z]/.test(password1) ||
      !/[a-z]/.test(password1) ||
      !specialChars.test(password1)
    ) {
      const customError = new Error("Password is too weak.");
      customError.status = 400;
      return next(customError);
    }

    const passwordHash = generateHash(password1);

    const data = await registerUser(username, email, passwordHash);

    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

// get all users
router.get("/", async (req, res, next) => {
  try {
    const user = await getAllUsers();
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
