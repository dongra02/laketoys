const router = require('express').Router()
const auth = require('../controllers/auth')

router.route('/register')
  .post(auth.register)

module.exports = router