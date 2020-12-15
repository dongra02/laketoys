const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, maxlength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

// build in owner contact info, that only populates order? (virtual that deletes on Json but not object?)
const toySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 300, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  rate: { type: Number, required: true },
  reviews: [reviewSchema],
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

toySchema
  .virtual('avgRating')
  .get( function () {
    console.log(!this.reviews)
    if (!this.reviews) return ''
    if (!this.reviews.length) return 'Not yet reviewed'
    const avgRating = this.reviews.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / this.reviews.length
    return avgRating.toFixed(1)
  })

toySchema.set('toJSON', { virtuals: true })

toySchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Toy', toySchema)