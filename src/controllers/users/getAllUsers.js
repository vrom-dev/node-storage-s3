const User = require('../../models/user')

const getAllUsers = async (req, res) => {
  const users = await User
    .find({})
    .populate('prints', { author: 0 })
  res.json(users)
}

module.exports = getAllUsers
