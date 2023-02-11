import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { UserStateType } from 'types/store';
import { getToken, getCode } from 'utils/auth';

// 사용자가 가진 JSON 토큰으로 사용자 정보를 갱신한다.

const initialState: UserStateType = {
  kakao: {
    email: '',
    nick: '',
  },
  token: {
    access_token: '',
    expire_in: 0,
  },
  provider: '',
};
type TokenType = {
  access_token: string;
  expire_in: number;
};
type providerType = {
  provider: string;
  code: string;
};

const sendAuthCode = createAsyncThunk('user', async (obj: providerType, thunkApi: any) => {
  try {
    const response = await getToken(`http://localhost:4001/api/auth/${obj.provider}?code=${obj.code}`);
    if (!response) throw new Error();
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Reducer
export const UserSlice = createSlice({
  name: 'user',
  // 가져온 유저 토큰
  initialState,
  reducers: {
    handleSoicalLoginProvider: (state: UserStateType, action: PayloadAction<string>) => {
      state.provider = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendAuthCode.fulfilled, (state: UserStateType, action: PayloadAction<TokenType>) => {
      state.token = action.payload;
    });
  },
});
export default UserSlice;
export { sendAuthCode };
export const { handleSoicalLoginProvider } = UserSlice.actions;
