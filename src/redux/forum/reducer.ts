import { Reducer } from 'redux';
import {
  CREATE_POST,
  DELETE_POST,
  ForumActionTypes,
  REPLY_POST,
  SET_FORUM_INFO,
  SET_LIKED,
  SET_SHOW_REPLY,
} from './types';
import { ForumState } from 'src/mocks/interfaces';
import _ from 'lodash';

const INITIAL: ForumState = {
  forumInfo: [],
};

export const forumReducer: Reducer<ForumState, ForumActionTypes> = (
  state: ForumState = INITIAL,
  action: ForumActionTypes,
): ForumState => {
  const { type, payload } = action;
  switch (type) {
    case SET_FORUM_INFO:
      return { ...state, forumInfo: payload.forumInfo };

    case SET_LIKED:
      const found = state.forumInfo.findIndex(
        (element: any) => element.id === payload.id,
      );
      const like = state.forumInfo[found].isLike;
      state.forumInfo[found].isLike = !like;
      return { ...state, forumInfo: [...state.forumInfo] };

    case SET_SHOW_REPLY:
      const found2 = state.forumInfo.findIndex(
        (element: any) => element.id === payload.id,
      );

      const showReply = state.forumInfo[found2].isReply;
      state.forumInfo[found2].isReply = !showReply;
      return { ...state, forumInfo: [...state.forumInfo] };

    case CREATE_POST:
      state.forumInfo.push(payload.newPost);
      return { ...state, forumInfo: [...state.forumInfo] };

    case DELETE_POST:
      const index = state.forumInfo.findIndex(
        (element: any) => element.id === payload.id,
      );
      state.forumInfo.splice(index, 1);
      return { ...state, forumInfo: [...state.forumInfo] };

    case REPLY_POST:
      if (payload.reply.content.trim() !== '') {
        const index2 = state.forumInfo.findIndex(
          (element: any) => element.id === payload.id,
        );
        state.forumInfo[index2].replyList.push(payload.reply);
        return { ...state, forumInfo: [...state.forumInfo] };
      } else return { ...state };
    default:
      return state;
  }
};
