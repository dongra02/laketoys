const User = require('../models/user')
const Order = require('../models/order')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const { unauthorized, notFound } = require('../lib/errorMessage')

async function register(req, res, next) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome to the lake, ${user.username}` })
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  try {
    const user  = await User.findOne({ email: req.body.email })
    if (!user || !user.validatePassword(req.body.password)) throw new Error(unauthorized)
    const token = jwt.sign(
      { sub: user._id },
      secret,
      { expiresIn: '24h' }
    )
    res.status(202).json({ message: `Welcome back to the lake, ${user.username}` , token })
  } catch (err) {
    next(err)
  }
}

async function getProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function profileOrders(req, res, next) {
  try {
    let orders  = []
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    if (user.userType === 'Renter') {
      orders = await Order.find({ renter: user._id })
    }
    if (user.userType === 'Owner') {
      orders = await Order.find({ owner: user._id })
    }
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  register,
  login,
  getProfile,
  profileOrders
}