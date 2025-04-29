import { ThemeType } from '@/contexts/ThemeContext';

export const Color = {
  red: '#FF0000',
  green: '#1FBC61',
  back: '#000000',
  white: '#FFFFFF',
  primary: '#BF2385',
  secondary: '#FCE2EB',
};

const palette = {
  primary: '#BF2385',
  secondary: '#FCE2EB',
  light_background: '#FFFFFF',
  dark_background: '#2B2930',
  light_background_modal: '#FFFFFF',
  dark_background_modal: '#211F24',
  light_input: '#F1F1F1',
  dark_input: 'transparent',
  light_input2: '#F1F1F1',
  dark_input2: '#211F24',
  // dark_input: '#2B2930',
  light_card: '#F1F1F1',
  dark_card: 'transparent',
  // dark_card: '#2B2930',
  light_border: '#D9D9D9',
  dark_border: '#BFB7D2',
  disable_outer: '#CCCCCC',
  disable_inner: '#888888',
  light_text1: '#FFFFFF',
  dark_text1: '#FFFFFF',
  light_text2: '#000000',
  dark_text2: '#FFFFFF',
  light_text3: '#8B8B8B',
  dark_text3: '#BFB7D2',
  light_text4: '#000000',
  dark_text4: '#000000',
  light_error: '#EF5350',
  dark_error: '#C62828',
  light_confirm: '#4CAF50',
  dark_confirm: '#0C7213',
  light_warning: '#FF9800',
  dark_warning: '#E65100',
  light_link: '#03A9F4',
  dark_link: '#01579B',

  light_primaryUsdt: '#429A80',
  dark_primaryUsdt: '#429A80',
  light_secondaryUsdt: '#DCF1EB',
  dark_secondaryUsdt: '#DCF1EB',
};

export const lightTheme: ThemeType = {
  colorScheme: 'light',
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    background: palette.light_background,
    background_modal: palette.light_background_modal,
    input: palette.light_input,
    card: palette.light_card,
    border: palette.light_border,
    disable_outer: palette.disable_outer,
    disable_inner: palette.disable_inner,
    text1: palette.light_text1,
    text2: palette.light_text2,
    text3: palette.light_text3,
    text4: palette.light_text4,
    error: palette.light_error,
    confirm: palette.light_confirm,
    warning: palette.light_warning,
    link: palette.light_link,
    input2: palette.light_input2,
    primaryUsdt: palette.light_primaryUsdt,
    secondaryUsdt: palette.light_secondaryUsdt,
  },
};

export const darkTheme: ThemeType = {
  ...lightTheme,
  colorScheme: 'dark',
  colors: {
    ...lightTheme.colors,
    primary: palette.primary,
    background: palette.dark_background,
    background_modal: palette.dark_background_modal,
    input: palette.dark_input,
    card: palette.dark_card,
    border: palette.dark_border,
    text1: palette.dark_text1,
    text2: palette.dark_text2,
    text3: palette.dark_text3,
    error: palette.dark_error,
    confirm: palette.dark_confirm,
    warning: palette.dark_warning,
    link: palette.dark_link,
    input2: palette.dark_input2,
    primaryUsdt: palette.dark_primaryUsdt,
    secondaryUsdt: palette.dark_secondaryUsdt,
  },
};

export type ItypographyType =
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'primary'
  | 'error'
  | 'confirm'
  | 'warning'
  | 'link'
  | 'disable_inner'
  | 'secondary'
  | 'primaryUsdt'
  | 'secondaryUsdt';

export type IBorderType =
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'primary'
  | 'border'
  | 'error'
  | 'confirm'
  | 'warning'
  | 'link'
  | 'background'
  | 'background_modal'
  | 'disable_inner'
  | 'primaryUsdt'
  | 'secondaryUsdt';

export type IColorType =
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'primary'
  | 'secondary'
  | 'background'
  | 'background_modal'
  | 'input'
  | 'input2'
  | 'border'
  | 'error'
  | 'confirm'
  | 'warning'
  | 'link'
  | 'disable_inner'
  | 'disable_outer'
  | 'primaryUsdt'
  | 'secondaryUsdt';
