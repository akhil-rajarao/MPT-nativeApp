import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import dashboardReducer from '../screens/appSlice';

// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
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
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },

      ...getDefaultMiddleware(),
      ...middleware,
      middleware: [...getDefaultMiddleware()],
    }),
  // middleware: [...getDefaultMiddleware()],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
