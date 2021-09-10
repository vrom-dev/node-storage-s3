const filesRoute = require('express').Router()
const { getFile } = require('../controllers/files')
const multerMiddleware = require('../middlewares/multer')
// const tokenExtractor = require('../middlewares/tokenExtractor')
// const userExtractor = require('../middlewares/userExtractor')

filesRoute.get('/files/:key',
  // tokenExtractor,
  // userExtractor,
  multerMiddleware,
  getFile
)

module.exports = filesRoute
