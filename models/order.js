const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  orderStatus: { type: String, enum: ['pending', 'confirmed'], default: 'pending', required: true },
  price: { type: Number, required: true },
  renter: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  toy: { type: mongoose.Schema.ObjectId, ref: 'Toy', required: true }
})

module.exports = mongoose.model('Order', orderSchema)
