const router = require('express').Router()
const auth = require('../controllers/auth')
const toy = require('../controllers/toys')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile')
  .get(secureRoute, auth.getProfile)

router.route('/toys')
  .get(toy.index)
  .post(secureRoute, toy.create)

module.exports = router