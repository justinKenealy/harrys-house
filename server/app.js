require('dotenv').config()

const express = require('express')
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)

const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3000