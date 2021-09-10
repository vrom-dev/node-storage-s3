const { Schema, model } = require('mongoose')

const stlSchema = new Schema({
  url: String,
  author: String
})

stlSchema.set('toJSON', {
  transform: (doc, transformedObject) => {
    transformedObject.id = transformedObject._id
    delete transformedObject._id
    delete transformedObject.__v
  }
})

const Stl = model('Blog', stlSchema)

module.exports = Stl
