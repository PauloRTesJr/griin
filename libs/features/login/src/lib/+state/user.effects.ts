import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginRequest),
      switchMap(({ email, password }) =>
        this.loginService.login(email, password).pipe(
          map((userCredential) => UserActions.loginSuccess({ userCredential })),
          catchError((error) => of(UserActions.loginFailure(error.message)))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(({ userCredential }) => console.log(userCredential))
      ),
    { dispatch: false }
  );
}
