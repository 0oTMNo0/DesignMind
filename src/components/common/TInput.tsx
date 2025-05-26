//import liraries
import { IColorType } from '@/constants/Color';
import { IFontSize, IFontWeight, typography } from '@/constants/Typography';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextInput,
} from 'react-native';

interface TInputType extends TextInputProps {
  fontsize?: IFontSize;
  fontweight?: IFontWeight;
  color?: IColorType;
}

// create a component
const TInput = (props: TInputType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <TextInput
      {...props}
      placeholderTextColor={selectedTheme.colors.text2}
      style={[
        props.style,
        {
          backgroundColor: selectedTheme.colors.background2,
          borderRadius: 15,
          color: props.color
            ? selectedTheme.colors[props.color as IColorType]
            : selectedTheme.colors.text1,
          padding: 10,
          fontSize: props.fontsize
            ? typography.fontSizes[props.fontsize as IFontSize]
            : typography.fontSizes.lg,
          fontFamily: props.fontweight
            ? typography.fontWeight[props.fontweight]
            : typography.fontWeight.regular,
        },
      ]}
    />
  );
};

//make this component available to the app
export default TInput;
