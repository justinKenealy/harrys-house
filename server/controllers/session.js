const express = require('express')
const axios = require('axios')

const db = require('../db/index')
const router = express.Router()
const { comparePassword } = require('../utils/password-verification')

router.post('/', async (req, res, next) => {
    const { username, password } = req.body
    const query = `SELECT * FROM users WHERE username = $1`
    const { rows } = await db.query(query, [username])
    const user = rows[0]
    if (user && comparePassword(password, user.password_hash)) {
      delete user.password_hash
      req.session.user = user
      return res.json(user)
    } 
    const customError = new Error('Invalid username or password')
    customError.status = 400
    return next(customError)
  })
  
  router.get('/', (req, res) => {
    const { user } = req.session
    if (!user) {
      return res.status(401).json({ message: 'Not logged in' })
    }
    res.json(user)
  })
  
  router.delete('/', (req, res) => {
    req.session.destroy()
    res.json({ message: 'Logged out successfully' })
  })
  

module.exports = router

