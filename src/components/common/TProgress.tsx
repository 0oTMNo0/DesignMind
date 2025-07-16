//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  AnimatedCircularProgress,
  AnimatedCircularProgressProps,
} from 'react-native-circular-progress';
import TText from './TText';
import { IColorType } from '@/constants/Color';

interface Props extends AnimatedCircularProgressProps {
  tintColor: IColorType;
  backgroundColor?: IColorType;
}
// create a component
const TProgress = (props: Props) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10,
      }}
    >
      <AnimatedCircularProgress
        {...props}
        tintColor={selectedTheme.colors[props.tintColor]}
        backgroundColor={
          props.backgroundColor
            ? selectedTheme.colors[props.backgroundColor]
            : selectedTheme.colors.background2
        }
      >
        {(fill: number) => (
          <TText fontsize="lg" fontweight="medium">{`${Math.round(
            fill
          )}%`}</TText>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

//make this component available to the app
export default TProgress;
