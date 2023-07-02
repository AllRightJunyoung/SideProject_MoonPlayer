import axios, { AxiosRequestConfig } from 'axios';
import type { CommonResponse } from 'common/types/axios';

export const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
  try {
    const response = await axios.post<CommonResponse<T>>(url, data, config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
