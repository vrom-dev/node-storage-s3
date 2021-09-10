const fs = require('fs')
const AWS = require('aws-sdk')
const { AWS_BUCKET_NAME } = require('../config/s3')

AWS.config.loadFromPath('./aws.config.json')
const s3 = new AWS.S3()

const uploadFileStream = async (file) => {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}

const getFileStream = (fileKey) => {
  const downloadParams = {
    Bucket: AWS_BUCKET_NAME,
    Key: fileKey
  }
  return s3.getObject(downloadParams).createReadStream()
}

module.exports = {
  uploadFileStream,
  getFileStream
}
