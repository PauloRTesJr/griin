import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState } from './user.reducer';

// Lookup the 'User' feature state managed by NgRx
export const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const getUserLoaded = createSelector(
  getUserState,
  (state: UserState) => state.loaded
);

export const getUserError = createSelector(
  getUserState,
  (state: UserState) => state.error
);
