export const SET_FILTER_MEMBERS = 'SET_FILTER_MEMBER';

interface SetFilterMembers {
  type: typeof SET_FILTER_MEMBERS;
  payload: any;
}

export type MemberActionTypes = SetFilterMembers;
