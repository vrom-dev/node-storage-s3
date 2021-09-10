require('dotenv').config()
const PORT = process.env.PORT || 3000
const MONGO_DB_URI = process.env.MONGO_DB_URI
const NODE_ENV = process.env.NODE_ENV
const SECRET = process.env.SECRET

module.exports = {
  PORT,
  MONGO_DB_URI,
  NODE_ENV,
  SECRET
}
