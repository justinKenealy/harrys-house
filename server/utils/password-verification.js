const bcrypt = require('bcrypt')

const generateHash = (password) => {
    if (!password) {
      throw new Error()
    }
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
  }
  
  const comparePassword = (password, password_hash) => {
    if (typeof password !== 'string' || !password) {
      throw new Error()
    }
    console.log(password)
    console.log(password_hash)
    return bcrypt.compareSync(password, password_hash)
  }

module.exports = { generateHash, comparePassword }