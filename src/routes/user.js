const userRoute = require('express').Router()
const { createUser, getAllUsers, loginUser } = require('../controllers/users')

userRoute.get('/user', getAllUsers)
userRoute.post('/user', createUser)
userRoute.post('/login', loginUser)

module.exports = userRoute
