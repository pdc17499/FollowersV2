export const ADD_BLOCK_USER = 'BLOCK_USER/SET_BLOCK_USER';
export const REMOVE_BLOCK_USER = 'BLOCK_USER/REMOVE_BLOCK_USER';

interface AddBlockUser {
  type: typeof ADD_BLOCK_USER;
  payload: any;
}

interface RemoveBlockUser {
  type: typeof REMOVE_BLOCK_USER;
  payload: any;
}

export type BlockActionTypes = AddBlockUser | RemoveBlockUser;
