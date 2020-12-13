const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const { unauthorized, notFound } = require('../lib/errorMessage')

async function register (req, res, next) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome to the lake, ${user.username}` })
  } catch (err) {
    next(err)
  }
}



module.exports = {
  register
}