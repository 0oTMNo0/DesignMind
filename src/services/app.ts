import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosbaseQuery';
export const appApi = createApi({
  reducerPath: 'api/',
  refetchOnFocus: false,
  refetchOnReconnect: false,
  keepUnusedDataFor: 2,
  baseQuery: axiosBaseQuery(),
  tagTypes: ['gemini'],
  endpoints: () => ({}),
});
