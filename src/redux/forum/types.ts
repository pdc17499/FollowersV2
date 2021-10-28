export const SET_FORUM_INFO = 'FORUM/SET_FORUM_INFO';
export const SET_LIKED = 'FORUM/SET_LIKED';
export const SET_SHOW_REPLY = 'FORUM/SET_SHOW_REPLY';
export const CREATE_POST = 'FORUM/CREATE_POST';
export const DELETE_POST = 'FORUM/DELETE_POST';
export const REPLY_POST = 'FORUM/REPLY_POST';

DELETE_POST;

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

interface CreatePost {
  type: typeof CREATE_POST;
  payload: any;
}

interface ReplyPost {
  type: typeof REPLY_POST;
  payload: any;
}

interface DeletePost {
  type: typeof DELETE_POST;
  payload: any;
}

// interface RemoveBlockUser {
//   type: typeof REMOVE_BLOCK_USER;
//   payload: any;
// }

export type ForumActionTypes =
  | SetForumInfo
  | ReplyPost
  | SetLiked
  | SetShowReply
  | DeletePost
  | CreatePost;
