// app/test.tsx
import TLogo from '@/components/common/TLogo';
import TLogoGradient from '@/components/common/TLogoGradient';
import TText from '@/components/common/TText';
// import { ThemeContext } from '@/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TestRoute() {
  // const { selectedTheme } = React.useContext(ThemeContext);
  // console.log('selectedTheme', selectedTheme.colorScheme);
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>Route detected1324</Text>
      <TText fontsize="md" fontweight="regular" color="text1">
        This is a test text
      </TText>
      <TLogo />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TLogoGradient />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: '100',
    // width: '100%',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});
