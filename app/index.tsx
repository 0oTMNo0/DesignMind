// app/test.tsx
import TText from '@/components/common/TText';
import { ThemeContext } from '@/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TestRoute() {
  // const { selectedTheme } = React.useContext(ThemeContext);
  // console.log('selectedTheme', selectedTheme.colorScheme);
  return (
    <View style={style.container}>
      <Text style={style.text}>Route detected132</Text>
      {/* <TText fontsize="md" fontweight="regular" color="text1">
        This is a test text
      </TText> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});
