import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as UserActions from './user.actions';
import * as UserFeature from './user.reducer';

@Injectable()
export class UserEffects {
  init$ = createEffect(() =>
    this.dataPersistence.fetch(UserActions.init, {
      run: (
        action: ReturnType<typeof UserActions.init>,
        state: UserFeature.UserPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return UserActions.loadUserSuccess({ user: [] });
      },
      onError: (action: ReturnType<typeof UserActions.init>, error) => {
        console.error('Error', error);
        return UserActions.loadUserFailure({ error });
      },
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly dataPersistence: DataPersistence<UserFeature.UserPartialState>
  ) {}
}
