//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface TTouchableOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
  onPress: () => void;
}

// create a component
const TTouchableOpacity = () => {
  return (
    <View style={styles.container}>
      <Text>TTouchableOpacity</Text>
    </View>
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
export default TTouchableOpacity;
