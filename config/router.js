const router = require('express').Router()
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile')
  .get(secureRoute, auth.getProfile)

module.exports = router