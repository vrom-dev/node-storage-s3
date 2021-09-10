const logger = require('../utils/logger')

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)

  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' })
  }

  next(error)
}

module.exports = errorHandler
