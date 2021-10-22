import { Reducer } from 'redux';
import {
  AuthActionTypes,
  LOGOUT,
  SET_ROLE,
  SET_TOKEN,
  SET_USER_INFO,
  SET_AVATAR,
} from './types';
import { UserState } from 'src/mocks/interfaces';
import _ from 'lodash';

const INITIAL: UserState = {
  userInfo: {
    id: 0,
    nick_name: '',
    username: '',
    email: '',
    password: '',
    code: '',
    phone: '',
    avatar: '',
    summary: '',
    gender: '',
    age: '',
    introduce_code: '',
  },
  token: '',
};

export const userReducer: Reducer<UserState, AuthActionTypes> = (
  state: UserState = INITIAL,
  action: AuthActionTypes,
): UserState => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload.token };
    case SET_AVATAR:
      return _.assign({}, state, {
        userInfo: _.assign({}, state.userInfo.avatar, payload.avatar),
      });
    case SET_ROLE:
      return Object.assign({}, state, payload);
    case SET_USER_INFO:
      return _.assign({}, state, {
        userInfo: _.assign({}, state.userInfo, payload.userInfo),
      });
    case LOGOUT:
      return Object.assign(
        {},
        state,
        Object.assign({}, { token: '', userInfo: {} }),
      );
    // case 'CONG':
    //   return { ...state, a: state.a + payload };
    default:
      return state;
  }
};
