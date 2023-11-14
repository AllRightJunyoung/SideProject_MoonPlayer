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
client.interceptors.request.use((config) => {
  if (!config.headers) return config;
  let token;
  if (config.url === `${SERVER_URI}/api/auth/refresh`) {
    token = localStorage.getItem('refresh-token');
  } else {
    token = localStorage.getItem('access_token');
  }
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
