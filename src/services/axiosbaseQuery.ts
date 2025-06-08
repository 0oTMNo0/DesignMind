// import { RootState } from '@redux/store';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

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
      console.log('--------0', headers);
      const result = await axios({
        url,
        method,
        data,
        params,
        // headers,
        headers: {
          ['Content-Type']: headers?.['Content-Type'] || 'application/json',
        },
      });
      console.log('-------1', result.headers);
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
