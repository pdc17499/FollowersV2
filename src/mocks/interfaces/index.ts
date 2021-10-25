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

export interface ForumState {
  forumInfo: any;
}

export interface BlockUserState {
  listUserBlocked: any;
}

export interface ReduxState {
  user: UserState;
  app: any;
  blockUser: BlockUserState;
  forum: ForumState;
}
