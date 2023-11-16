import axios, { AxiosRequestConfig } from 'axios';
import type { CustomAxiosInterface } from 'shared/types/axiosInterface';
import type { CommonResponse } from 'shared/types/axios';
import { getRefreshToken } from 'Login/api';
import { TokenType } from 'Login/types';

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

const client: CustomAxiosInterface = axios.create({
  baseURL: `${SERVER_URI}`,
  headers: { 'Content-type': 'application/json' },
});

export const Get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await client.get<CommonResponse<T>>(url, config);
  return response.data.result;
};

export const Post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await client.post<CommonResponse<T>>(url, data, config);
  return response.data.result;
};
export const Put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await client.put<CommonResponse<T>>(url, data, config);
  return response.data.result;
};
export const Delete = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await client.delete<CommonResponse<T>>(url, config);
  return response.data.result;
};

// 요청 인터셉터 ,API요청시 공통적으로 accessToken ,refresh토큰 헤더에 넣고 전송함
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!token) {
      config.headers.authorization = null;
      config.headers.refresh = null;
    }

    if (config.headers && token) {
      const { access_token, refresh_token } = JSON.parse(token);
      config.headers.authorization = `Bearer ${access_token}`;
      config.headers.refresh = `Bearer ${refresh_token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// jwt expired 응답을 받으면 토큰 refresh api에 자동 요청하여 액세스 토큰 갱신
client.interceptors.response.use(
  (res) => res,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      const token = localStorage.getItem('token');

      if (error.response.data.result.message === 'jwt expired') {
        if (token) {
          const response = (await getRefreshToken()) as TokenType; //토큰 refresh
          //새로 받은 토큰을 헤더에 적용
          config.headers.authorization = `Bearer ${response.access_token}`;
          config.headers.refresh = `Bearer ${response.refresh_token}`;
          return axios(config);
        }
      }
    }
    return Promise.reject(error);
  }
);
