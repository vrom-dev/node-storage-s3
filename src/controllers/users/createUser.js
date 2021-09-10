const bcrypt = require('bcrypt')
const User = require('../../models/user')

const createUser = async (req, res) => {
  const {
    username,
    email,
    password
  } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    email,
    password: passwordHash
  })

  const newUser = await user.save()
  res.status(201).json(newUser)
}

module.exports = createUser
