const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  orderStatus: { type: String, enum: ['Pending', 'Active', 'Complete'] },
  ownerPhone: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true },
  toy: { type: mongoose.Schema.ObjectId, ref: 'Toy', required: true },
  customer: { type: mongoose.Schema.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Order', orderSchema)