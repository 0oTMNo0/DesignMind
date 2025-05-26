//import liraries
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TView from './TView';
import TText from './TText';
import { IFontSize } from '@/constants/Typography';

interface TTageType {
  title: string;
  size?: IFontSize;
}

// create a component
const TTage = (props: TTageType) => {
  //   const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <TView
      style={{
        padding: 5,
        backgroundColor: 'primary',
        borderRadius: 5,
      }}
    >
      <TText fontsize={props.size || 'sm'}>{props.title}</TText>
    </TView>
  );
};

// define your styles

//make this component available to the app
export default TTage;
