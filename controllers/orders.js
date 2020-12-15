const Order = require('../models/order')
const Toy = require('../models/toy')
const { notFound } = require('../lib/errorMessage')


async function orderCreate(req, res, next) {
  try {
    const orderToy = await Toy.findById(req.body.toy)
    if (!orderToy) throw new Error(notFound)
    // create toyIsAvail method on Toy with dates as params
    // run against above method with order dates, throw new error if not avail
    const newOrderData = { ...req.body, customer: req.currentUser._id, owner: orderToy.owner._id }
    const newOrder = await Order.create(newOrderData)
    res.status(201).json(newOrder)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  // index: orderIndex,
  create: orderCreate
}