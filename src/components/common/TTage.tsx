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
  disabled?: boolean;
}

// create a component
const TTage = (props: TTageType) => {
  //   const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <TView
      style={{
        padding: 5,
        backgroundColor: props.disabled ? 'background2' : 'primary',
        borderRadius: 5,
      }}
    >
      <TText
        fontsize={props.size || 'sm'}
        color={props.disabled ? 'text2' : 'text1'}
      >
        {props.title}
      </TText>
    </TView>
  );
};

//make this component available to the app
export default TTage;
