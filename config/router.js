const router = require('express').Router()
const auth = require('../controllers/auth')
const toy = require('../controllers/toys')
const order = require('../controllers/orders')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/profile')
  .get(secureRoute, auth.getProfile)

router.route('/profile/orders')
  .get(secureRoute, order.profileOrders)


router.route('/toys')
  .get(toy.index)
  .post(secureRoute, toy.create)

router.route('/toys/:id')
  .get(toy.show)
  .put(secureRoute, toy.update)
  .delete(secureRoute, toy.delete)

router.route('/toys/:id/reviews')
  .post(secureRoute, toy.reviewCreate)


router.route('/orders')
  .post(secureRoute, order.create)

router.route('/orders/:id')
  .get(secureRoute, order.show)
  

module.exports = router