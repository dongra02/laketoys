const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, maxlength: 30, required: true },
  userType: { type: String, enum: ['Owner', 'Renter'], required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fdefault-avatar-profile-icon-vector-social-media-user-image-182145777.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fdefault-user-image.html&tbnid=oPiqei7vEbI03M&vet=12ahUKEwjQu7z2vtLtAhVnneAKHZekA6oQMygAegUIARDLAQ..i&docid=e6gEsA9KT4s-2M&w=800&h=800&q=default%20user%20image&ved=2ahUKEwjQu7z2vtLtAhVnneAKHZekA6oQMygAegUIARDLAQ' }
})

userSchema
  .virtual('toysOwned', {
    ref: 'Toy',
    localField: '_id',
    foreignField: 'owner'
  })

userSchema
  .set('toJSON', {
    virtuals: true,
    transform(_doc, json) {
      delete json.password
      return json
    }
  })

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)