export const SET_FORUM_INFO = 'FORUM/SET_FORUM_INFO';
export const SET_LIKED = 'FORUM/SET_LIKED';
export const SET_SHOW_REPLY = 'FORUM/SET_SHOW_REPLY';

interface SetForumInfo {
  type: typeof SET_FORUM_INFO;
  payload: any;
}

interface SetLiked {
  type: typeof SET_LIKED;
  payload: any;
}

interface SetShowReply {
  type: typeof SET_SHOW_REPLY;
  payload: any;
}

// interface RemoveBlockUser {
//   type: typeof REMOVE_BLOCK_USER;
//   payload: any;
// }

export type ForumActionTypes = SetForumInfo | SetLiked | SetShowReply;
