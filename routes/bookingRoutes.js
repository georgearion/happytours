const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');
const { route } = require('./reviewRoutes');

const router = express.Router();

router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSession
);

module.exports = router;
