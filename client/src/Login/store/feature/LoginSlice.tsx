import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import type { LoginStateType, ProviderType, TokenType } from 'Login/types';
import { requestToken } from 'Login/utils/auth';

// 사용자가 가진 JWT 토큰으로 정보를 가져온다.
const initialState: LoginStateType = {
  status: '',
  token: {
    access_token: '',
    refresh_token: '',
    expire_in: 0,
    provider: '',
  },
};

const getToken = createAsyncThunk('user', async (obj: ProviderType, thunkApi: any) => {
  try {
    const response = await requestToken(
      `${process.env.REACT_APP_SERVER_URI}/api/auth/${obj.provider}?code=${obj.code}`
    );
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
      state.token.provider = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state: LoginStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(getToken.fulfilled, (state: LoginStateType, action: PayloadAction<TokenType>) => {
      state.status = 'Success';
      state.token.provider = '';
      state.token.access_token = action.payload.access_token;
      state.token.refresh_token = action.payload.refresh_token;
      localStorage.setItem('access_token', action.payload.access_token);
      localStorage.setItem('refresh_token', action.payload.refresh_token);
      state.token.expire_in = new Date().getTime() + action.payload.expire_in;
    });
    builder.addCase(getToken.rejected, (state: LoginStateType) => {
      state.status = 'Fail';
    });

    builder.addCase(PURGE, () => initialState);
  },
});
export { getToken };
export const { handleSoicalLoginProvider } = LoginSlice.actions;
