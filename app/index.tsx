// app/test.tsx
import { ThemeContext } from '@/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TestRoute() {
  // const { selectedTheme } = React.useContext(ThemeContext);
  // console.log('selectedTheme', selectedTheme.colorScheme);
  return (
    <View>
      <Text style={style.text}>Route detected132</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});
