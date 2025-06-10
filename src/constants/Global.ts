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
  images: {
    uri: string;
    mimeType: string;
    data: string; // Base64 encoded image data
  }[];
  // imagesBase64?: any;
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

export interface GeminiFrameAnalysis {
  frameIndex: number;
  colorAndEmotion: string;
  eyesTracking: {
    x: number;
    y: number;
    size: 'LG' | 'MD' | 'SM';
  }[];
  iconography: string;
  typography: string;
  uxWriting: {
    comment: string;
    suggestions: string[];
  };
  similarity: {
    font: boolean;
    icon: boolean;
    color: boolean;
    semanticCategory: boolean;
  };
  userPerspective: string;
}

export type GeminiAnalysisResult = GeminiFrameAnalysis[];

export const GeminiPrompt = `You are an expert UI/UX reviewer. For each attached UI frame, provide detailed analysis for:
- Colour and emotion: Comment on how the palette affects user emotion.
- Eye tracking: Estimate at least three most salient points (order of attention, with x, y, size label: 'LG', 'MD', 'SM'). Also remember the mobile will show in this size ( width: 183px, height: 390px) and PC (width: 400px, height: 250px) so adjust the coordinates accordingly.
- Iconography: Comment on icons’ clarity and appropriateness.
- Typography: Assess font choices and readability.
- UX writing: Brief feedback and improvement suggestions.
- Similarity: Indicate if font, icon, colour, or semantic category match other frames.
- User perspective: Briefly summarise user impression.
Take into account the device target ({{deviceTarget}}) and frame description ({{description}}). The selected review categories are: {{categories where value is true}}.`;

export const generationConfig = {
  responseMimeType: 'application/json',
  responseSchema: {
    type: 'ARRAY',
    items: {
      type: 'OBJECT',
      properties: {
        frameIndex: { type: 'NUMBER' },
        colorAndEmotion: { type: 'STRING' },
        eyesTracking: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              x: { type: 'NUMBER' },
              y: { type: 'NUMBER' },
              size: { type: 'STRING', enum: ['LG', 'MD', 'SM'] },
            },
          },
        },
        iconography: { type: 'STRING' },
        typography: { type: 'STRING' },
        uxWriting: {
          type: 'OBJECT',
          properties: {
            comment: { type: 'STRING' },
            suggestions: { type: 'ARRAY', items: { type: 'STRING' } },
          },
        },
        similarity: {
          type: 'OBJECT',
          properties: {
            font: { type: 'BOOLEAN' },
            icon: { type: 'BOOLEAN' },
            color: { type: 'BOOLEAN' },
            semanticCategory: { type: 'BOOLEAN' },
          },
        },
        userPerspective: { type: 'STRING' },
      },
      required: [
        'frameIndex',
        'colorAndEmotion',
        'eyesTracking',
        'iconography',
        'typography',
        'uxWriting',
        'similarity',
        'userPerspective',
      ],
      propertyOrdering: [
        'frameIndex',
        'colorAndEmotion',
        'eyesTracking',
        'iconography',
        'typography',
        'uxWriting',
        'similarity',
        'userPerspective',
      ],
    },
  },
};

export const TestData64 = [
  {
    uri: '',
    mimeType: 'image/png',
  },
  {
    uri: '',
    mimeType: 'image/png',
  },
];
