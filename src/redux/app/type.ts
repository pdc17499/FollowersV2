export const SET_FILTER_PARAMS = 'SET_FILTER_PARAMS';
export const SET_LIST_FORUM = 'SET_LIST_FORUM';
export const ADD_FORUM = 'ADD_FORUM';
export const LIKE_OR_UNLIKE = 'LIKE_OR_UNLIKE';
export const DELETE_POST = 'DELETE_POST';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_LIST_USER = 'SET_LIST_USER';
export const BLOCK_USER = 'BLOCK_USER';

interface SetFilterParams {
  type: typeof SET_FILTER_PARAMS;
  payload: any;
}

interface SetListForum {
  type: typeof SET_LIST_FORUM;
  payload: any;
}

interface AddForum {
  type: typeof ADD_FORUM;
  payload: any;
}

interface likeOrUnLike {
  type: typeof LIKE_OR_UNLIKE;
  payload: any;
}

// interface DeletePost {
//   type: typeof DELETE_POST;
//   payload: any;
// }

interface SetLangague {
  type: typeof SET_LANGUAGE;
  payload: any;
}

interface SetListUser {
  type: typeof SET_LIST_USER;
  payload: any;
}

interface BlockUser {
  type: typeof BLOCK_USER;
  payload: any;
}

export type AppActionTypes =
  | SetFilterParams
  | SetListForum
  | AddForum
  | likeOrUnLike
  | SetLangague
  | SetListUser
  | BlockUser;
