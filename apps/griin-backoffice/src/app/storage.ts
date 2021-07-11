import { localStorageSync } from 'ngrx-store-localstorage';

const userStorageConfig = {
  user: ['userCredential'],
};

const modulesStorageConfig: Array<Record<string, unknown>> = [
  userStorageConfig,
];

export const storageSyncReducer = (reducer: any) =>
  localStorageSync({
    keys: modulesStorageConfig,
    rehydrate: true,
    storageKeySerializer: (key) => `${key}`,
  })(reducer);
