import {
  DELETE,
  GET,
  IAxiosRTKQueryRequest,
  IAxiosThunkArg,
  POST,
  PUT,
} from '@/constants/Global';

import { appApi } from './app';
// import { GetAppVersion } from './GlobalApiResponse';

const geminiApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // slice start
    getExampleData: builder.mutation<any, IAxiosRTKQueryRequest>({
      query: ({
        body,
        queryParams,
        pathParams,
        options,
      }: IAxiosRTKQueryRequest) => {
        return {
          method: GET,
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY`,
        };
      },
    }),
    //
  }),
});

export const { useGetExampleDataMutation } = geminiApi;
