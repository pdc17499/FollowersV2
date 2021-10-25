import {
  ForumActionTypes,
  SET_FORUM_INFO,
  SET_LIKED,
  SET_SHOW_REPLY,
} from './types';

export const setForumInfo = (forumInfo: []): ForumActionTypes => {
  return {
    type: SET_FORUM_INFO,
    payload: {
      forumInfo,
    },
  };
};

export const setLiked = (id: number): ForumActionTypes => {
  return {
    type: SET_LIKED,
    payload: {
      id,
    },
  };
};

export const setShowReply = (id: number): ForumActionTypes => {
  return {
    type: SET_SHOW_REPLY,
    payload: {
      id,
    },
  };
};
