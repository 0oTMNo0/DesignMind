import { ThemeType } from '@/contexts/ThemeContext';

// export const Color = {
//   red: '#FF0000',
//   green: '#1FBC61',
//   back: '#000000',
//   white: '#FFFFFF',
//   primary: '#BF2385',
//   secondary: '#FCE2EB',
// };

const palette = {
  primary: '#D7456E',
  secondary: '#F9A825',
  background1: '#000000',
  background2: '#262626',
  text1: '#FFFFFF',
  text2: '#B1B1B1',
  error: '#B3261E',
  confirm: '#1FBC61',
  warning: '#FFA500',
  link: '#4DA6FF',
};

export const lightTheme: ThemeType = {
  colorScheme: 'light',
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    background1: palette.background1,
    background2: palette.background2,
    text1: palette.text1,
    text2: palette.text2,
    error: palette.error,
    confirm: palette.confirm,
    warning: palette.warning,
    link: palette.link,
    // background_modal: palette.light_background_modal,
    // input: palette.light_input,
    // card: palette.light_card,
    // border: palette.light_border,
    // disable_outer: palette.disable_outer,
    // disable_inner: palette.disable_inner,
    // text1: palette.light_text1,
    // text2: palette.light_text2,
    // text3: palette.light_text3,
    // text4: palette.light_text4,
    // error: palette.light_error,
    // confirm: palette.light_confirm,
    // warning: palette.light_warning,
    // link: palette.light_link,
    // input2: palette.light_input2,
    // primaryUsdt: palette.light_primaryUsdt,
    // secondaryUsdt: palette.light_secondaryUsdt,
  },
};

export const darkTheme: ThemeType = {
  ...lightTheme,
  colorScheme: 'dark',
  colors: {
    ...lightTheme.colors,
    // primary: palette.primary,
    // background: palette.dark_background,
    // background_modal: palette.dark_background_modal,
    // input: palette.dark_input,
    // card: palette.dark_card,
    // border: palette.dark_border,
    // text1: palette.dark_text1,
    // text2: palette.dark_text2,
    // text3: palette.dark_text3,
    // error: palette.dark_error,
    // confirm: palette.dark_confirm,
    // warning: palette.dark_warning,
    // link: palette.dark_link,
    // input2: palette.dark_input2,
    // primaryUsdt: palette.dark_primaryUsdt,
    // secondaryUsdt: palette.dark_secondaryUsdt,
  },
};

export type ItypographyType =
  | 'text1'
  | 'text2'
  | 'primary'
  | 'secondary'
  | 'background1'
  | 'background2'
  | 'error'
  | 'confirm'
  | 'warning'
  | 'link';

export type IBorderType =
  | 'text1'
  | 'text2'
  | 'primary'
  | 'secondary'
  | 'background1'
  | 'background2'
  | 'error'
  | 'confirm'
  | 'warning'
  | 'link';

export type IColorType =
  | 'text1'
  | 'text2'
  | 'primary'
  | 'secondary'
  | 'background1'
  | 'background2'
  | 'error'
  | 'confirm'
  | 'warning'
  | 'link';
