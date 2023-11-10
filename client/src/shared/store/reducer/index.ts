import { combineReducers } from '@reduxjs/toolkit';
import { LoginSlice } from 'Login/store/feature/LoginSlice';
import { music } from 'Music/store/reducer/music';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const login = LoginSlice.reducer;
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [''],
};

export const rootReducer = combineReducers({
  login,
  music,
});

export default persistReducer(persistConfig, rootReducer);
