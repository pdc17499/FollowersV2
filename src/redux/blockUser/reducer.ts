import { blockUser } from './../app/action';
import { Reducer } from 'redux';
import { BlockActionTypes, ADD_BLOCK_USER, REMOVE_BLOCK_USER } from './types';
import { BlockUserState } from 'src/mocks/interfaces';
import _ from 'lodash';

const INITIAL: BlockUserState = {
  listUserBlocked: [],
};

export const blockUserReducer: Reducer<BlockUserState, BlockActionTypes> = (
  state: BlockUserState = INITIAL,
  action: BlockActionTypes,
): BlockUserState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BLOCK_USER:
      const newData = [...state.listUserBlocked, payload];
      return { ...state, listUserBlocked: newData };
    case REMOVE_BLOCK_USER:
      const data = state.listUserBlocked.filter((e: any) => e.name !== payload);
      return { ...state, listUserBlocked: data };
    default:
      return state;
  }
};
