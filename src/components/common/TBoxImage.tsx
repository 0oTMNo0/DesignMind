//import liraries
import { IconAdd } from '@/assets/icons';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const TBoxImage = () => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <View
      style={[
        styles.box,
        {
          borderColor: selectedTheme.colors.text2,
        },
      ]}
    >
      <IconAdd size={35} color="text2" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
//make this component available to the app
export default TBoxImage;
