import {
  DELETE,
  GET,
  IAxiosRTKQueryRequest,
  IAxiosThunkArg,
  POST,
  PUT,
} from '@/constants/Global';

import { appApi } from './app';

const geminiApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // slice start
    postImageUnderstanding: builder.mutation<any, IAxiosRTKQueryRequest>({
      query: ({ body }: IAxiosRTKQueryRequest) => {
        // console.log('======', JSON.stringify(body));
        return {
          method: POST,
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBFihUKfUuT4KIUTJ0m60mm9vjnOn9oiYc`,
          data: body,
          headers: {
            ['Content-Type']: 'application/json',
          },
        };
      },
      invalidatesTags: true as any,
    }),
    //
  }),
});
//

export const { usePostImageUnderstandingMutation } = geminiApi;
