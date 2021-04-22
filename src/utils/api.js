import { API_URL } from './config.js';

function handleResponse (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
}

export const eduRequest = ({ fullname, phone, text }) => {
    return fetch(`${API_URL}/dot_requests/store`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullname, phone, text })
    })
    .then(res => handleResponse(res));
};

export const getPrograms = () => {
  return fetch(`${API_URL}/dot_profiles/get_all`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(res => handleResponse(res));
};