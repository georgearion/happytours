const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from FeatureCollection
  const tours = await Tour.find();

  // 2) Build template

  // 3) Render that template using tour data from 1)

  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) get data, for requested Tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate(
    'reviews'
  );

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }

  // 2) Build template

  // 3) Render template using data from 1)

  //console.log(tour);

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour
  });
});

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Signup for free'
  });
};

exports.getForgotForm = (req, res) => {
  res.status(200).render('forgot', {
    title: 'Forgot Password ?'
  });
};

exports.getResetForm = (req, res) => {
  res.status(200).render('reset', {
    title: 'Reset Password',
    token: req.params.token
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all Bookings
  const bookings = await Booking.find({ user: req.user.id });

  // 2) Find Tours with the returned IDs
  const tourIDs = bookings.map(el => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});
