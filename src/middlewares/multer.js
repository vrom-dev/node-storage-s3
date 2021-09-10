const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
    const fileName = `${uniqueSuffix}${path.extname(file.originalname)}`
    cb(null, fileName)
  }
})

const upload = multer({
  dest: path.join(__dirname),
  storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /stl/
    const imgExtension = path.extname(file.originalname).toLowerCase()
    const isImage = filetypes.test(imgExtension) && filetypes.test(file.mimetype)

    if (isImage) {
      return cb(null, true)
    } else {
      return cb(new Error('File type not supported'))
    }
  }
})

const multerMiddleware = upload.single('stl')

module.exports = multerMiddleware
