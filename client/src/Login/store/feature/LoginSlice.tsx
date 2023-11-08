import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import type { LoginStateType } from 'Login/types';
import { getToken } from 'Login/utils/auth';

// 사용자가 가진 JSON 토큰으로 사용자 정보를 갱신한다.
const initialState: LoginStateType = {
  token: {
    access_token: '',
    expire_in: 0,
  },
  provider: '',
};

type providerType = {
  provider: string;
  code: string;
};
type TokenType = {
  access_token: string;
  expire_in: number;
};

const getAccessToken = createAsyncThunk('user', async (obj: providerType, thunkApi: any) => {
  try {
    const response = await getToken(`${process.env.REACT_APP_SERVER_URI}/api/auth/${obj.provider}?code=${obj.code}`);
    if (!response) throw new Error();
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const LoginSlice = createSlice({
  name: 'user',
  // 가져온 유저 토큰
  initialState,
  reducers: {
    handleSoicalLoginProvider: (state: LoginStateType, action: PayloadAction<string>) => {
      state.provider = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.fulfilled, (state: LoginStateType, action: PayloadAction<TokenType>) => {
      state.token.access_token = action.payload.access_token;
      state.token.expire_in = new Date().getTime() + action.payload.expire_in;
    });
    builder.addCase(PURGE, () => initialState);
  },
});
export { getAccessToken };
export const { handleSoicalLoginProvider } = LoginSlice.actions;
