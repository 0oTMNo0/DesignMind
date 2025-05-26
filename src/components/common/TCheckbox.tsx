//import liraries
import React, { Component } from 'react';
import Checkbox, { CheckboxProps } from 'expo-checkbox';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import TText from './TText';
interface checkType extends CheckboxProps {
  title?: string;
}

// create a component
const TCheckbox = (props: checkType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <View style={styles.container}>
      <Checkbox
        {...props}
        color={props.value ? selectedTheme.colors.primary : undefined}
      />
      <TText color="text1">{props.title}</TText>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
});

//make this component available to the app
export default TCheckbox;
