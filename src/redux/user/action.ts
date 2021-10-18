// import {AsyncService} from '@utils';
import { Dispatch } from 'react';
import {
  AuthActionTypes,
  LOGOUT,
  SET_ROLE,
  SET_TOKEN,
  SET_USER_INFO,
  SET_AVATAR,
} from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import { ThunkPromise } from '@redux';
export const setUserInfo = (userInfo: any): AuthActionTypes => {
  return {
    type: SET_USER_INFO,
    payload: {
      userInfo,
    },
  };
};

export const setAvatar = (avatar: string): AuthActionTypes => {
  return {
    type: SET_TOKEN,
    payload: {
      avatar,
    },
  };
};

export const setAppRole = (type: string): AuthActionTypes => {
  return {
    type: SET_ROLE,
    payload: {
      accountRole: type,
    },
  };
};

export const setToken = (token: string): AuthActionTypes => {
  return {
    type: SET_TOKEN,
    payload: {
      token,
    },
  };
};

export const logout = (): AuthActionTypes => {
  return {
    type: LOGOUT,
    payload: {},
  };
};

export const Cong = (i: number) => {
  return {
    type: 'CONG',
    payload: i,
  };
};

export const loginThunk = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): ThunkPromise => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    // dispatch(loadingAction(true));
    console.log('call api 2');
    try {
      const result: any = await axios.post(
        'https://dev-connect-server.herokuapp.com/api/auth',
        {
          email,
          password,
        },
      );
      console.log('call api 3');
      if (result) {
        console.log('call login', result);
        dispatch(setToken(result.token));
      }
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  };
};
