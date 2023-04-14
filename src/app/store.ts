// import {logger} from 'redux-logger';
import {
  configureStore,
  applyMiddleware,
  combineReducers,
  compose,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import dashboardReducer from '../screens/appSlice';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
let middleware: any[] = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware];
} else {
  middleware = [...middleware];
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
  // middleware: [...getDefaultMiddleware()],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
