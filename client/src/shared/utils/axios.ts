import axios, { AxiosRequestConfig } from 'axios';
import type { CustomAxiosInterface } from 'shared/types/axiosInterface';
import type { CommonResponse } from 'shared/types/axios';

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

// 인터셉터 정의
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

// client.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const {
//       config,
//       response: { status },
//     } = error;
//   }
// );
