const printRoute = require('express').Router()
const { createPrint } = require('../controllers/prints')
const multerMiddleware = require('../middlewares/multer')
const tokenExtractor = require('../middlewares/tokenExtractor')
const userExtractor = require('../middlewares/userExtractor')

printRoute.post('/upload',
  tokenExtractor,
  userExtractor,
  multerMiddleware,
  createPrint
)

module.exports = printRoute
