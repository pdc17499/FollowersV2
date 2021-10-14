import { Moment } from 'moment';

export interface IAppText {
  children?: HTMLElement;
  style?: any;
  onPress?: () => void;
  numberOfLines?: any;
}

export interface UserState {
  token: string;
  userInfo: any;
  // a: number;
}

export interface ReduxState {
  user: UserState;
  app: any;
}
