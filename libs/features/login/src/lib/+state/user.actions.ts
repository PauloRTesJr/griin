import { UserCredential } from '@griin/ui';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[User Page] Init');

export const actionType = {
  loginRequest: '[User/API] Login Request',
};

export const loginSuccess = createAction(
  '[User/API] Login Success',
  props<{ userCredential: UserCredential }>()
);

export const loginFailure = createAction(
  '[User/API] Login Failure',
  props<{ error: string | null }>()
);

export const loginRequest = createAction(
  actionType.loginRequest,
  props<{ email: string; password: string }>()
);
