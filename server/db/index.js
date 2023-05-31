const pg = require('pg')

const db = new pg.Pool({
  database: process.env.DB_NAME || 'harrys_house'
})

module.exports = db
