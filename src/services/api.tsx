import axios from 'axios';
import { describeSuccessResponse, describeErrorResponse } from './logger';
import { showMessage } from 'react-native-flash-message';
import { baseURL } from './baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create();

api.interceptors.request.use(
  async (config: any) => {
    let token = '';
    try {
      const value = await AsyncStorage.getItem('TOKEN');
      if (value !== null) {
        token = value;
      }
    } catch (e) {
      console.log('this errr', e);

    }
    config.baseURL = baseURL;
    if (token) {
      config.headers = {
        Authorization: token,
        'Content-Type': 'application/json',
        ...config.headers,
      };
    }
    if (config.method.toUpperCase() === 'GET') {
      config.params = { ...config.params };
    }
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  function (response: any) {
    describeSuccessResponse(response);
    try {
      return response?.data;
    } catch (error) {
      console.log('err2', error);
      return Promise.reject(error);
    }
  },
  function (error) {
    const { message } = error?.response?.data;
    showMessage({
      message: message,
      type: 'danger',
    });
    describeErrorResponse(error);
    return Promise.reject(error);
  },
);

export default api;
