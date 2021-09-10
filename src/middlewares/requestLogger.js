const logger = require('../utils/logger')

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method, 'Path:  ', req.path, 'Body:  ', req.body)
  logger.info('---')

  next()
}

module.exports = requestLogger
