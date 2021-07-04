import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as LoginActions from './login.actions';
import * as LoginFeature from './login.reducer';
import * as LoginSelectors from './login.selectors';

@Injectable()
export class LoginFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(LoginSelectors.getLoginLoaded));
  allLogin$ = this.store.pipe(select(LoginSelectors.getAllLogin));
  selectedLogin$ = this.store.pipe(select(LoginSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(LoginActions.init());
  }
}
