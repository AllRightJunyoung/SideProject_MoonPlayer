export type Oauth_type = 'google' | 'kakao' | 'naver';
export type Oauth_LOOKUP_TABLE_type = { [K in Oauth_type]: string };

export type LoginStateType = {
  status: string;
  token: {
    access_token: string;
    refresh_token: string;
    expire_in: number;
  };
  provider: string;
};

export type ProviderType = {
  provider: string;
  code: string;
};
export type TokenType = {
  access_token: string;
  refresh_token: string;
  expire_in: number;
};
