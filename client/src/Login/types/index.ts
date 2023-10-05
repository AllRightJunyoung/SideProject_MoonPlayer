export type Oauth_type = 'google' | 'kakao' | 'naver';
export type Oauth_LOOKUP_TABLE_type = { [K in Oauth_type]: string };

export interface LoginStateType {
  token: {
    access_token: string;
    expire_in: number;
  };
  provider: string;
}
