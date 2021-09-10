const fs = require('fs')
const { promisify } = require('util')
const unlinkFile = promisify(fs.unlink)

const Print = require('../../models/print')
const { uploadFileStream } = require('../../utils/s3')

const createPrint = async (req, res, next) => {
  const { user } = req

  if (!req.file) {
    return next(new Error('No file provided'))
  }

  const result = await uploadFileStream(req.file)
  await unlinkFile(req.file.path)

  const print = new Print({
    fileName: req.file.originalname,
    url: `/files/${result.Key}`,
    author: user._id
  })

  const newPrint = await print.save()

  user.prints = user.prints.concat(newPrint._id)
  await user.save()

  res.status(201).json(newPrint)
}

module.exports = createPrint
