const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  // TODO put dates back in after testing
  // startDate: { type: Date, required: true },
  // endDate: { type: Date, required: true },
  price: { type: Number, required: true },
  // change customer to renter
  renter: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  toy: { type: mongoose.Schema.ObjectId, ref: 'Toy', required: true }
})

module.exports = mongoose.model('Order', orderSchema)
