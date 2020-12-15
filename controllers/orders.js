const Order = require('../models/order')
const { notFound, forbidden } = require('../lib/errorMessage')

async function orderIndex(_req, res, next) {
  try {
    const orders = await Order.find()
    if (!orders) throw new Error(notFound)
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: orderIndex
}