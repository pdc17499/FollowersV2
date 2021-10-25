import {
  AppActionTypes,
  SET_FILTER_PARAMS,
  SET_LIST_FORUM,
  ADD_FORUM,
  LIKE_OR_UNLIKE,
  DELETE_POST,
  SET_LANGUAGE,
  SET_LIST_USER,
  BLOCK_USER,
} from './type';

export const setFilterParams = (filter: any): AppActionTypes => {
  return {
    type: SET_FILTER_PARAMS,
    payload: {
      filter,
    },
  };
};

// export const setForum = (forum: any, isLoadMore: boolean): any => {
//   return {
//     type: SET_LIST_FORUM,
//     payload: {
//       forum,
//       isLoadMore,
//     },
//   };
// };

export const addForum = (forum: any): any => {
  return {
    type: ADD_FORUM,
    payload: {
      forum,
    },
  };
};

export const likeOrUnLike = (forum: any): any => {
  return {
    type: LIKE_OR_UNLIKE,
    payload: {
      forum,
    },
  };
};

export const deletePost = (id: number): any => {
  return {
    type: DELETE_POST,
    payload: {
      id,
    },
  };
};

export const setLanguage = (language: string): any => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};

export const setListUser = (listUser: any): any => {
  return {
    type: SET_LIST_USER,
    payload: {
      listUser,
    },
  };
};

export const blockUser = (friend_id: number): any => {
  return {
    type: BLOCK_USER,
    payload: {
      friend_id,
    },
  };
};
