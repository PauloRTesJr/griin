import { ActionReducer, MetaReducer } from "@ngrx/store";
import { UserState } from "./+state/user.reducer";
import { localStorageSync } from 'ngrx-store-localstorage';

function localStorageSyncReducer(reducer: ActionReducer<UserState>): ActionReducer<UserState> {
  return localStorageSync({
    keys: [
      'userUid', 'userEmail'
    ],
    rehydrate: true
  })(reducer);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const metaReducers: Array<MetaReducer<UserState, any>> = [localStorageSyncReducer];