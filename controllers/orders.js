const Order = require('../models/order')
const Toy = require('../models/toy')
const User = require('../models/user')
const { notFound, forbidden } = require('../lib/errorMessage')


async function orderCreate(req, res, next) {
  try {
    const orderToy = await Toy.findById(req.body.toy)
    if (!orderToy) throw new Error(notFound)
    // create toyIsAvail method on Toy with dates as params
    // run against above method with order dates, throw new error if not avail
    const newOrderData = { ...req.body, renter: req.currentUser._id, owner: orderToy.owner._id }
    const newOrder = await Order.create(newOrderData)
    res.status(201).json(newOrder)
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
      orders = await Order.find({ renter: user._id }).populate('toy', 'name')
    }
    if (user.userType === 'Owner') {
      orders = await Order.find({ owner: user._id }).populate('toy', 'name')
    }
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
}

async function orderShow(req, res, next) {
  try {
    const userId = req.currentUser._id
    const order = await Order.findById(req.params.id)
    if (!order) throw new Error(notFound)
    if (!order.owner._id.equals(userId) && !order.renter._id.equals(userId)) throw new Error(forbidden)
    res.status(200).json(order)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  create: orderCreate,
  profileOrders,
  show: orderShow
}