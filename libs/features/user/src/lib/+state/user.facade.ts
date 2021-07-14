import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UserSelectors.getUserLoaded));

  constructor(private readonly store: Store) { }

  loginUser(email: string, password: string) {
    this.store.dispatch(UserActions.loginRequest({ email, password }));
  }

  logout() {
    console.log('Faz logout!');
    this.store.dispatch(UserActions.logoutRequest());
  }
}
