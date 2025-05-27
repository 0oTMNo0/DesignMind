//import liraries
import { IColorType } from '@/constants/Color';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ViewInterface extends React.ComponentProps<typeof View> {
  backgroundColor?: IColorType;
  borderColor?: IColorType;
}

interface TTouchableOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: any[];
}

// create a component
const TTouchableOpacity = (props: TTouchableOpacityProps) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      style={[
        // ...props.style,
        {
          backgroundColor:
            selectedTheme.colors[props.style?.backgroundColor] ||
            selectedTheme.colors.background1,
          borderColor:
            selectedTheme.colors[props.style?.borderColor] ||
            selectedTheme.colors.background1,
        },
      ]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TTouchableOpacity;
