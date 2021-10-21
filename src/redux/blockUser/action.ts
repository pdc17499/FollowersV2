import { BlockActionTypes, ADD_BLOCK_USER, REMOVE_BLOCK_USER } from './types';

export const setBlockUserInfo = (
  id: number,
  name: string,
  avatar: string,
): BlockActionTypes => {
  return {
    type: ADD_BLOCK_USER,
    payload: {
      id,
      name,
      avatar,
    },
  };
};

export const removeBlockUser = (name: string): BlockActionTypes => {
  return {
    type: REMOVE_BLOCK_USER,
    payload: name,
  };
};
