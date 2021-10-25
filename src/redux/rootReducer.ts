import { blockUserReducer } from './blockUser/reducer';
import { userReducer } from './user';
import { combineReducers } from 'redux';
import { appReducer } from './app';
import { forumReducer } from './forum';
import { ReduxState } from 'src/mocks/interfaces';

export const RootReducer = combineReducers<ReduxState>({
  user: userReducer,
  app: appReducer,
  blockUser: blockUserReducer,
  forum: forumReducer,
});
