//import liraries
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, SwitchProps, Switch } from 'react-native';

interface TSwitchType extends SwitchProps {}

// create a component
const TSwitch = (props: TSwitchType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <Switch {...props} trackColor={{ true: selectedTheme.colors.primary }} />
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
export default TSwitch;
