import { UserCredential } from '@griin/ui';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserActions from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface State {
  userCredential: UserCredential | null;
  loaded: boolean;
  error?: string | null;
}

export const initialState: State = {
  loaded: false,
  userCredential: null,
};

const userReducer = createReducer(
  initialState,
  on(UserActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(UserActions.loginSuccess, (state, { userCredential }) => ({
    ...state,
    loaded: true,
    userCredential,
  })),
  on(UserActions.loginFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
