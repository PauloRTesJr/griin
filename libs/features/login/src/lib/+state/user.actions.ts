import { UserCredential } from '@griin/ui';
import { createAction, props } from '@ngrx/store';

export const actionType = {
  loginRequest: '[User/API] Login Request',
  loginSuccess: '[User/API] Login Success',
  loginFailure: '[User/API] Login Failure',
};

export const loginSuccess = createAction(
  actionType.loginSuccess,
  props<{ userCredential: UserCredential }>()
);

export const loginFailure = createAction(
  actionType.loginFailure,
  props<{ error: string | null }>()
);

export const loginRequest = createAction(
  actionType.loginRequest,
  props<{ email: string; password: string }>()
);
