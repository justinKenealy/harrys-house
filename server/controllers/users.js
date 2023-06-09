const axios = require("axios");
const express = require("express");
const { getAllUsers, getUserById, registerUser, updateUserPasswordById } = require("../models/user");
const { generateHash, comparePassword } = require("../utils/password-verification");

const router = express.Router();

// register user
router.post("/", async (req, res, next) => {
  const { username, email, password, passwordConfirm } = Object.entries(
    req.body
  ).reduce((obj, [key, value]) => {
    obj[key] = value.trim();
    return obj;
  }, {});

  try {
    if (!username || !email || !password || !passwordConfirm) {
      const customError = new Error("All fields must be complete.");
      customError.status = 400;
      return next(customError);
    }
    if (password !== passwordConfirm) {
      const customError = new Error("The passwords do not match.");
      customError.status = 400;
      return next(customError);
    }
    if (password.length < 8) {
      const customError = new Error("Password is too short.");
      customError.status = 400;
      return next(customError);
    }
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (
      !/\d/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !specialChars.test(password)
    ) {
      const customError = new Error("Password is too weak.");
      customError.status = 400;
      return next(customError);
    }

    const passwordHash = generateHash(password);

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

//update password
router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
      const { passwordOld, passwordNew } = req.body
      console.log(passwordOld)
      console.log(passwordNew)
      const user = await getUserById(id)
      console.log(user[0])
      if (comparePassword(passwordOld, user.password_hash)) {
        if (passwordNew.length < 8) {
          const customError = new Error('The password is too short. It must be 8 characters long.')
          customError.status = 400
          return next(customError)
        }
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        if (
          !/\d/.test(passwordNew) ||
          !/[A-Z]/.test(passwordNew) ||
          !/[a-z]/.test(passwordNew) ||
          !specialChars.test(passwordNew)
        ) {
          const customError = new Error(
            'The password must contain a combination of uppercase letters, lowercase letters, numbers and symbols.'
          )
          customError.status = 400
          return next(customError)
        }
        const newPasswordHash = generateHash(passwordNew)
        const userRow = await updateUserPasswordById(id, newPasswordHash)
        if (userRow === 0) {
          return res.sendStatus(404)
        }
        return res.status(200).json({
          message: 'Updated successfully.',
        })
      }
      
    } catch (err) {
    next(err)
  }
})

module.exports = router;
