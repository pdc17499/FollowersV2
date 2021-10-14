export const LOGOUT = 'USER/LOGOUT';
export const SET_USER_INFO = 'USER/SET_USER_INFO';
export const SET_TOKEN = 'USER/SET_TOKEN';
export const SET_ROLE = 'USER/SET_ROLE';
interface SetUserInfo {
  type: typeof SET_USER_INFO;
  payload: any;
}
interface Logout {
  type: typeof LOGOUT;
  payload: any;
}
interface SetToken {
  type: typeof SET_TOKEN;
  payload: any;
}

interface SetRole {
  type: typeof SET_ROLE;
  payload: any;
}

// interface CONG {
//   type: string;
//   payload: number;
// }

export type AuthActionTypes = Logout | SetUserInfo | SetToken | SetRole;
