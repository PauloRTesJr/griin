import { createAction, props } from '@ngrx/store';

export const actionType = {
  loginRequest: '[User/API] Login Request',
  loginSuccess: '[User/API] Login Success',
  loginFailure: '[User/API] Login Failure',
  logoutRequest: '[User/API] Logout',
  logoutSuccess: '[User/API] Logout',
  logoutFailure: '[User/API] Logout',
};

export const loginSuccess = createAction(
  actionType.loginSuccess,
  props<{ userUid: string | null, userEmail: string | null; }>()
);

export const loginFailure = createAction(
  actionType.loginFailure,
  props<{ error: string | null; }>()
);

export const loginRequest = createAction(
  actionType.loginRequest,
  props<{ email: string; password: string; }>()
);

export const logoutRequest = createAction(
  actionType.logoutRequest
);

export const logoutSuccess = createAction(
  actionType.logoutSuccess
);

export const logoutFailure = createAction(
  actionType.logoutFailure,
  props<{ error: string | null; }>()
);
