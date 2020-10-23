/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
  name,
  email,
  password,
  passwordConfirm,
  signupBtn
) => {
  signupBtn.textContent = 'Processing...';

  if (!validateInput(password, passwordConfirm)) {
    passwordConfirm.focus();
    signupBtn.textContent = 'Sign Up';
    return showAlert('error', 'Password missmatch!');
  }

  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data: {
        name: name.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Sign up successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err);
    signupBtn.textContent = 'Sign Up';
    showAlert('error', err.response.data.message);
  }
};

const validateInput = (pass, passConfirm) => {
  return !(pass.value != passConfirm.value);
};
