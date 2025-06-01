// import { RootState } from '@redux/store';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }, { getState }) => {
    try {
      const result = await axios({
        url,
        method,
        data,
        params,
        headers: {
          ['Content-Type']: headers?.['Content-Type'] || 'application/json',
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.log('axios base ', url);
      if (err.response?.status === 401) {
        // user token expired...
      }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
