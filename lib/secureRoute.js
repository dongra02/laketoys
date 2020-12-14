const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')
const { forbidden } = require('../lib/errorMessage')

async function secureRoute(req, _res, next) {
  try {
    if (!req.headers.authorization) throw new Error()
    const token = req.headers.authorization.replace('Bearer ', '')
    const payload = jwt.verify(token, secret)
    const user = await User.findById(payload.sub)
    if (!user) throw new Error(forbidden)
    req.currentUser = user
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = secureRoute