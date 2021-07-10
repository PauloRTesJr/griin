import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginRequest),
      mergeMap(({ email, password }) =>
        from(this.loginService.login(email, password)).pipe(
          map((userCredential) => {
            console.log(userCredential);
            return UserActions.loginSuccess({ userCredential });
          }),
          catchError((error) => of(UserActions.loginFailure(error)))
        )
      )
    )
  );
}
