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
const GET_CATEGORY_DETAIL = '/user/category/'
const JOIN_COMMUNITY = '/user/communities/join'
const LEAVE_COMMUNITY = '/user/communities/leave'
const GET_LIST_POSTS = '/user/'
const GET_POST_DETAIL = '/user/'
const LIKE_POST = '/user/posts/like'






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

export const getListCategories: any = async (id: any) => {
  const response: any = await api.get(GET_LIST_CATEGORIES, id);
  return response;
};

export const getCategoryDetail: any = async (id: string) => {
  const response: any = await api.get(GET_CATEGORY_DETAIL + id);
  return response;
};
export const joinCommunity: any = async (data: any) => {
  const response: any = await api.post(JOIN_COMMUNITY, data);
  return response;
};

export const leaveCommunity: any = async (data: any) => {
  const response: any = await api.post(LEAVE_COMMUNITY, data);
  return response;
};

export const likePost: any = async (data: any) => {
  const response: any = await api.post(LIKE_POST, data);
  return response;
};




export const getListOfPosts: any = async (id: string) => {
  const response: any = await api.get(GET_LIST_POSTS + id + '/posts',);
  return response;
};

export const getPostDetail: any = async (id1: string, id2: string) => {
  const response: any = await api.get(GET_POST_DETAIL + id1 + '/posts/' + id2);
  return response;
};




export const getHomeInfo: any = async () => {
  const response: any = await api.get(GET_HOME_INFO);
  return response;
};



