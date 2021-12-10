import axios from 'axios';

const API = axios.create();
API.interceptors.request.use(
  function (request) {
    request.url = 'http://192.168.99.227:8000' + request.url;
    return request;
  },
  function (error) {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('ERROR==>', error);
    return Promise.reject(error);
  },
);

export default API;
