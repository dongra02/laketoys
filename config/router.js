const router = require('express').router
const auth = require('../controllers/auth')

router.route('/register')
  .get(auth.register)

  module.exports = router