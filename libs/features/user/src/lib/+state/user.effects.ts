import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginRequest),
      switchMap(({ email, password }) =>
        this.loginService.login(email, password).pipe(
          map((userCredential) =>
            UserActions.loginSuccess({
              userUid: userCredential.user?.uid ?? null,
              userEmail: userCredential.user?.email ?? null,
            })
          ),
          catchError((error) => of(UserActions.loginFailure(error.message)))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logoutRequest),
        mergeMap(() =>
          this.loginService.logout().pipe(
            tap(() => this.router.navigateByUrl('login')),
            catchError((error) => of(console.error(error)))
          )
        )
      ),
    { dispatch: false }
  );
}
