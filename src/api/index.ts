import axios from 'axios';

// const customAxios = axios.create({
//   baseURL: 'http://localhost:8000/api/v1/',
// });


const Axios = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  // timeout: 5000,
  headers: {
    // 'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
});


Axios.interceptors.request.use((config) => {
  // config.headers.common['Authorization'] = 'Token';
  // config.headers.common.accept = 'application/json';

  //   headers: {
  //     'Authorization': "JWT " + localStorage.getItem('access_token'),
  //     'Content-Type': 'application/json',
  //     'accept': 'application/json'
  // }
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

Axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of
  // 2xx cause this function to trigger
  // Do something with response data
  return response;
}, (error) => {
  // Any status codes that falls outside the range
  // of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export default Axios;

// export default Axios;
