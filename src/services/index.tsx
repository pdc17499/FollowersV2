import api from './api';
const LOGIN = '/auth/login';
const LOGOUT = '/user/logout';
const FORGOT_PASSWORD = './auth/forgot-password'
const GET_LIST_FRIEND = './user/friends'
const VERIFY_CODE = '/auth/verify-account'
const RESET_PASSWORD = '/auth/reset-password'
const CHANGE_PASSWORD = '/user/passwords'
const GET_LIST_CATEGORIES = '/user/categories'
const GET_HOME_INFO = '/user/home'


export const loginAPI: any = async (data: any) => {
  const response = await api.post(LOGIN, data);
  return response;
};

export const forgotPasswordApi: any = async (data: any) => {
  const response = await api.post(FORGOT_PASSWORD, data);
  return response;
};

export const verifyCodeApi: any = async (data: any) => {
  const response = await api.post(VERIFY_CODE, data);
  return response;
};


export const resetPasswordApi: any = async (data: any) => {
  const response = await api.post(RESET_PASSWORD, data);
  return response;
};

export const changePasswordApi: any = async (data: any) => {
  const response = await api.post(CHANGE_PASSWORD, data);
  return response;
};


export const logOutApi: any = async () => {
  const response = await api.get(LOGOUT);
  return response;
};

export const getListFriend: any = async () => {
  const response: any = await api.get(GET_LIST_FRIEND);
  return response;
};

export const getListCategories: any = async () => {
  const response: any = await api.get(GET_LIST_CATEGORIES);
  return response;
};


export const getHomeInfo: any = async () => {
  const response: any = await api.get(GET_HOME_INFO);
  return response;
};



