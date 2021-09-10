const stlRoute = require('express').Router()
const stlController = require('../controllers/stl')
const multerMiddleware = require('../middlewares/multer')

stlRoute.post('/upload', multerMiddleware, stlController)

module.exports = stlRoute
