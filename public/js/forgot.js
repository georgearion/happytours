/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const forgot = async (email, forgotBtn) => {
  forgotBtn.textContent = 'Processing...';
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/forgotPassword',
      data: {
        email: email.value
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Email sent successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    forgotBtn.textContent = 'Email Instructions';
    showAlert('error', err.response.data.message);
  }
};
