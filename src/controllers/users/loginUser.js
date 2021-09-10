const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')
const { SECRET } = require('../../config/server')

const loginUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.password)

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'Invalid username or password'
    })
  }

  const userObj = {
    email,
    id: user._id
  }

  const token = jwt.sign(userObj, SECRET)

  res
    .status(200)
    .send({
      token,
      username: user.username,
      email: user.email
    })
}

module.exports = loginUser
