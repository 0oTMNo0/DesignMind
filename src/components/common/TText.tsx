//import liraries
import { IColorType } from '@/constants/Color';
import { IFontSize, IFontWeight, typography } from '@/constants/Typography';
import { ThemeContext } from '@/contexts/ThemeContext';
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface TTextProps extends TextProps {
  children: React.ReactNode;
  color?: IColorType;
  fontsize?: IFontSize;
  fontweight?: IFontWeight;
  style?: TextStyle[] | TextStyle;
}

const TText = (props: TTextProps) => {
  const { selectedTheme } = React.useContext(ThemeContext);
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: props.fontsize
            ? typography.fontSizes[props.fontsize as IFontSize]
            : typography.fontSizes.sm,
          fontFamily: props.fontweight
            ? typography.fontWeight[props.fontweight]
            : typography.fontWeight.regular,
          color: props.color
            ? selectedTheme.colors[props.color as IColorType]
            : selectedTheme.colors.text1,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default TText;
