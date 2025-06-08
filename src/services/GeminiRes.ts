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

// [
//   {
//     "frameIndex": 0,
//     "colorAndEmotion": "The use of deep purple as the primary colour evokes a sense of creativity and calm, balanced by bright red highlights which may add urgency. The palette is harmonious and feels modern.",
//     "eyesTracking": [
//       { "x": 45, "y": 80, "size": "LG" },
//       { "x": 170, "y": 210, "size": "MD" },
//       { "x": 250, "y": 400, "size": "SM" }
//     ],
//     "iconography": "The icons are consistent with the overall style of the app. Their simplicity supports easy recognition and does not distract from the main content.",
//     "typography": "Typography is clean and legible. The headline font contrasts well with body text, supporting good readability.",
//     "uxWriting": {
//       "comment": "The labels and messages are clear and succinct, but the call-to-action button text could be more specific.",
//       "suggestions": ["Replace 'Next' with 'Continue to Payment' for more clarity."]
//     },
//     "similarity": {
//       "font": true,
//       "icon": false,
//       "color": true,
//       "semanticCategory": false
//     },
//     "userPerspective": "The design guides the user intuitively from the headline to the primary action, supporting a smooth onboarding experience."
//   },
//   {
//     "frameIndex": 1,
//     "colorAndEmotion": "Soft blues and whites make the screen feel calm and trustworthy. The use of accent yellow for buttons adds approachability.",
//     "eyesTracking": [
//       { "x": 100, "y": 50, "size": "LG" },
//       { "x": 200, "y": 200, "size": "MD" },
//       { "x": 300, "y": 350, "size": "SM" }
//     ],
//     "iconography": "Iconography matches the theme but the notification bell icon is less visually balanced than others.",
//     "typography": "Body text is legible, but the header font size could be slightly increased for hierarchy.",
//     "uxWriting": {
//       "comment": "UX writing is user-centred. However, the welcome message could be more engaging.",
//       "suggestions": ["Personalise the welcome message using the user's name."]
//     },
//     "similarity": {
//       "font": true,
//       "icon": true,
//       "color": false,
//       "semanticCategory": true
//     },
//     "userPerspective": "The design feels approachable and the navigation is obvious. However, users might overlook the secondary actions at the bottom."
//   }
//   // ...repeat for each image/frame
// ]
