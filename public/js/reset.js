/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const reset = async (password, passwordConfirm, token, resetBtn) => {
  resetBtn.textContent = 'Processing...';

  if (!validateInput(password, passwordConfirm)) {
    passwordConfirm.focus();
    resetBtn.textContent = 'Reset Password';
    return showAlert('error', 'Password missmatch!');
  }

  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:3000/api/v1/users/resetPassword/${token}`,
      data: {
        password: password.value,
        passwordConfirm: passwordConfirm.value
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Password Updated Successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    resetBtn.textContent = 'Reset Password';
    showAlert('error', err.response.data.message);
  }
};

const validateInput = (pass, passConfirm) => {
  return !(pass.value != passConfirm.value);
};
