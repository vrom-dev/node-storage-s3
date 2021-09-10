/**
 * Dependencies
 */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

/**
 * Middlewares
 */
const errorHandler = require('./middlewares/errorHandler')
const requestLogger = require('./middlewares/requestLogger')

/**
 * Routes
 */
const userRoute = require('./routes/user')
const printRoute = require('./routes/print')
const filesRoute = require('./routes/files')

/**
 * Utils/Config
 */
const logger = require('./utils/logger')
const { MONGO_DB_URI } = require('./config/server')

// const { getFileStream } = require('./middlewares/s3FileUploader')
mongoose
  .connect(MONGO_DB_URI)
  .then(() => logger.info('Database connected'))
  .catch((error) => logger.error('Error connecting to the DB', error.message))

const app = express()

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.urlencoded({ extended: true }))

app.use('/', userRoute)
app.use('/', printRoute)
app.use('/', filesRoute)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my API' })
})

app.use(errorHandler)

module.exports = app
