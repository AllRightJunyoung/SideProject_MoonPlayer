import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index';
import { PERSIST, PURGE } from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,

  // PlainObject 이슈제거
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, PURGE] as any,
      },
    }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkApiType = {
  state: RootState;
  dispatch: AppDispatch;
};
