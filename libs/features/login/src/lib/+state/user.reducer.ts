import { createReducer, on, Action } from '@ngrx/store';

import * as UserActions from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  userUid: string | null;
  userEmail: string | null;
  loaded: boolean;
  error?: string | null;
}

export const initialState: UserState = {
  loaded: false,
  userUid: null,
  userEmail: null
};

const userReducer = createReducer(
  initialState,
  on(UserActions.loginRequest, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loginSuccess, (state, { userUid, userEmail }) => ({
    ...state,
    loaded: true,
    userUid,
    userEmail
  })),
  on(UserActions.loginFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
