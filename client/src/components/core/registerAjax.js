// import Vue from '@/main';
import axios from 'axios';

axios.interceptors.request.use(function (config) {
  return config;
});

axios.interceptors.response.use(function (response) {
  if (response.data) {
    if (response.data.code === 7004) {
      return Promise.reject(response.data);
    } else if (response.data.code >= 6002 && response.data.code <= 6007) {
      // 处理异常
    } else {
      return response.data;
    }
  } else {
    return response.data;
  }
}, function (error) {
  // 302重定向的处理
  if (error.response && error.response.status === 302) {
    return error.response;
  }
  return Promise.reject(error);
});
