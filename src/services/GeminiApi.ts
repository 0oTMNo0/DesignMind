import {
  DELETE,
  GET,
  IAxiosRTKQueryRequest,
  IAxiosThunkArg,
  POST,
  PUT,
} from '@/constants/Global';

import { appApi } from './app';
import { GeminiFrameAnalysis } from './GeminiRes';

const geminiApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    // slice start
    postImageUnderstanding: builder.mutation<any, IAxiosRTKQueryRequest>({
      query: ({ body }: IAxiosRTKQueryRequest) => {
        console.log('======', JSON.stringify(body));
        return {
          method: POST,
          // method: GET,
          // url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY`,
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBFihUKfUuT4KIUTJ0m60mm9vjnOn9oiYc`,
          // url: 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
          // data: body,
          headers: {
            ['Content-Type']: 'application/json',
            // Authorization:
            //   'x-api-key: live_NqkMxiZb3leM1tU35bjvPH9subJIk9JmgScJ6RdVuXAKRVrTjrtpW8SWxANlZhtR',
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
