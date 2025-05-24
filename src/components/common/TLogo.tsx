//import liraries
import { IconAI } from '@/assets/icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TText from './TText';

// create a component
const TLogo = () => {
  return (
    <View style={styles.container}>
      <TText fontsize="2xl" fontweight="bold">
        DesignMind
      </TText>
      <View
        style={{
          position: 'relative',
          top: -15,
        }}
      >
        <IconAI size={24} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
  },
});

//make this component available to the app
export default TLogo;
