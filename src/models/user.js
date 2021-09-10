const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    unique: true
  },
  email: {
    type: String,
    required: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  prints: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Print'
    }
  ]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (doc, transformedUser) => {
    transformedUser.id = transformedUser._id
    delete transformedUser._id
    delete transformedUser.__v
    delete transformedUser.password
  }
})

const User = model('User', userSchema)

module.exports = User
