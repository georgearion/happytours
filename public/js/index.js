/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { signup } from './signup';
import { forgot } from './forgot';
import { reset } from './reset';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const signupForm = document.querySelector('form.form--signup');
const forgotForm = document.querySelector('form.form--forgot');
const resetForm = document.querySelector('form.form--reset');
const loginForm = document.querySelector('form.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const logoutAccountBtn = document.querySelector('.side-nav--log-out');
const userDataForm = document.querySelector('form.form-user-data');
const userPasswordForm = document.querySelector('form.form.form-user-password');
const bookBtn = document.getElementById('book-tour');

//DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const signupButton = document.querySelector('button.btn-signup');
    signup(name, email, password, passwordConfirm, signupButton);
  });
}

if (forgotForm) {
  forgotForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email');
    const forgotButton = document.querySelector('button.btn-forgot');
    forgot(email, forgotButton);
  });
}

if (resetForm) {
  resetForm.addEventListener('submit', e => {
    e.preventDefault();
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const resetButton = document.querySelector('button.btn-reset');
    const token = resetButton.dataset.token;
    reset(password, passwordConfirm, token, resetButton);
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (logoutAccountBtn) logoutAccountBtn.addEventListener('click', logout);

if (userDataForm) {
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    updateSettings(form, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('button.btn--save-password').textContent =
      'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
    document.querySelector('button.btn--save-password').textContent =
      'Save Password';
  });
}

if (bookBtn) {
  bookBtn.addEventListener('click', e => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
}
