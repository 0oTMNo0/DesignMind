import { AxiosPromise } from 'axios';
import { Dimensions } from 'react-native';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';

// const USER_UUID = 'USER_UUID';
// const REFRESH_TOKEN = 'REFRESH_TOKEN';
// const DEVICE_UUID = 'DEVICE_UUID';
// const LANGUAGE = 'LANGUAGE';
// const OS_TYPE = Platform.OS.toUpperCase();
export const DIMENSIONS = Dimensions.get('window');

export type IAxiosRTKQueryRequest = {
  queryParams?: any;
  pathParams?: any;
  body?: any;
  options?: any;
  // Authorization: 'ACCESS_TOKEN' | 'REFRESH_TOKEN' | 'NONE';
  // ['Content-Type']?: string;
  // };
};

export { GET, POST, PUT, DELETE };

export interface IDialogState {
  mode: 'NEW' | 'EDIT' | 'VIEW' | 'UPLOAD' | null;
  name: string | null;
  relevantId: number | null;
}

export interface Toast {
  visiblity: boolean;
  message: string;
  toastType: 'error' | 'alert' | 'notification' | 'success' | 'none';
}

export type IServiceCall = (x: any, y: any, z: any) => AxiosPromise<any>;
export type IAxiosThunkArg = { queryParams: any; pathParams: any; body: any };

export type IApiState = {
  isLoading: boolean;
  data: any;
  error: string | undefined;
};

export interface ToastPropsType {
  visible: boolean;
  child?: JSX.Element | string;
  type?: 'Error' | 'Warning' | 'Success';
}

export interface formPayloadType {
  images: any[];
  categories: {
    typography: boolean;
    colorAndEmotion: boolean;
    iconography: boolean;
    uxWriting: boolean;
    contentLayout: boolean;
    eyesTracking: boolean;
  };
  userPerspective: boolean;
  includeSimilarities: boolean;
  deviceTarget: 'Mobile' | 'PC';
  description: string;
}
