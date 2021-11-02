// import {AsyncService} from '@utils';
import {
  AuthActionTypes,
  LOGOUT,
  SET_AVATAR,
  SET_ROLE,
  SET_TOKEN,
  SET_USER_INFO,
} from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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
    type: SET_AVATAR,
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

export const forgotPasswordThunk = (
  email: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  console.log('mail', email);

  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const result = await forgotPassword({ email: email });
      console.log('call forgot pass', result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const Cong = (i: number) => {
  return {
    type: 'CONG',
    payload: i,
  };
};
function isFetching(arg0: boolean): any {
  throw new Error('Function not implemented.');
}
function forgotPassword(arg0: { email: string }) {
  throw new Error('Function not implemented.');
}
