import { Reducer } from 'redux';
import {
  ADD_FORUM,
  AppActionTypes,
  LIKE_OR_UNLIKE,
  SET_FILTER_PARAMS,
  SET_LIST_FORUM,
  DELETE_POST,
  SET_LANGUAGE,
  SET_LIST_USER,
  BLOCK_USER,
} from './type';
import _ from 'lodash';

interface IAppState {
  filter?: any;
  forum?: any;
  language: string;
  listUser: any;
}

const INITIAL: IAppState = {
  filter: {},
  forum: [],
  language: 'en',
  listUser: {
    data: [],
    paging: {} as any,
  },
};

export const appReducer: Reducer<IAppState, AppActionTypes> = (
  state: IAppState = INITIAL,
  action: AppActionTypes,
): IAppState => {
  const { type, payload = {} } = action;
  switch (type) {
    case SET_FILTER_PARAMS:
      if (_.isEmpty(payload.filter)) {
        return _.assign({}, state, {
          filter: {},
        });
      }
      return _.assign({}, state, {
        filter: _.assign({}, state.filter, payload.filter),
      });
    case SET_LIST_FORUM:
      if (payload.isLoadMore) {
        return {
          ...state,
          ...{ forum: [...state.forum, ...payload.forum] },
        };
      } else {
        return {
          ...state,
          ...{ forum: [...payload.forum] },
        };
      }

    case ADD_FORUM:
      return {
        ...state,
        ...{ forum: [payload.forum, ...state.forum] },
      };

    case LIKE_OR_UNLIKE:
      const index = [...state.forum].findIndex(
        forum => forum?.id === payload.forum?.id,
      );
      state.forum.splice(index, 1, payload.forum);
      return {
        ...state,
        forum: [...state.forum],
      };

    case DELETE_POST:
      const id = [...state.forum].findIndex(forum => forum?.id === payload.id);
      state.forum.splice(id, 1);
      return {
        ...state,
        forum: [...state.forum],
      };

    case SET_LANGUAGE:
      return Object.assign({}, state, payload);

    case SET_LIST_USER:
      return Object.assign({}, state, payload);

    case BLOCK_USER:
      const listUser: any = {
        data: state.listUser.data.filter(
          (item: any, _: any) => item.friend_id !== payload.friend_id,
        ),
        paging: state.listUser.paging,
      };
      state.listUser = listUser;

      console.log(
        'BLOCK_USER',
        listUser,
        // Object.assign({}, state, { ...listUser })
      );

      return {
        ...state,
      };
    default:
      return state;
  }
};
