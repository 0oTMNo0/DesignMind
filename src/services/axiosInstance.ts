import axios from 'axios';

const instance = axios.create();

instance.defaults.headers.post['Content-Type'] = 'application/json';
// Add a response interceptor
instance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
