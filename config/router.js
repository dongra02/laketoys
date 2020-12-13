const router = require('express').router
const auth = require('../controllers/auth')

router.route('/register')
  .post(auth.register)

module.exports = router