export const typography = {
  fontSizes: {
    '3xs': 8,
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
  fontWeight: {
    black: 'IRANSansMobile_Black',
    bold: 'IRANSansMobile_Bold',
    medium: 'IRANSansMobile_Medium',
  },
};

export type IFontSize = keyof typeof typography.fontSizes;
export type IFontWeight = keyof typeof typography.fontWeight;
