const { Schema, model } = require('mongoose')

const printSchema = new Schema({
  url: String,
  fileName: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

printSchema.set('toJSON', {
  transform: (doc, transformedObject) => {
    transformedObject.id = transformedObject._id
    delete transformedObject._id
    delete transformedObject.__v
  }
})

const Print = model('Print', printSchema)

module.exports = Print
