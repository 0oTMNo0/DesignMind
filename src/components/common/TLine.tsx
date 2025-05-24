//import liraries
import { IColorType } from '@/constants/Color';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface TLineType {
  color?: IColorType;
  style?: ViewStyle;
}

// create a component
const TLine = (props: TLineType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <View
      style={[
        props.style,
        styles.container,
        {
          backgroundColor:
            selectedTheme.colors[props.color] || selectedTheme.colors.text1,
        },
      ]}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 2,
    marginVertical: 20,
  },
});

//make this component available to the app
export default TLine;
