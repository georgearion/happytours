const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const bookingRouter = require('./../routes/bookingRoutes');

const router = express.Router();

// MOUNTING ROUTER
router.use('/:userId/bookings', bookingRouter);

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// must be logged in to access
router.use(authController.protect);

router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.patch('/updateMyPassword', authController.updatePassword);
router.delete('/deleteMe', userController.deleteMe);

// must be admin to access
router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
