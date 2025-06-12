//import liraries
import { IconArrow } from '@/assets/icons';
import TLogoGradient from '@/components/common/TLogoGradient';
import TSafeAreaView from '@/components/common/TSafeView';
import TText from '@/components/common/TText';
import { useRouter } from 'expo-router';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

// create a component
const AboutPage = () => {
  const router = useRouter();
  return (
    <TSafeAreaView style={{ paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // Navigate back to the previous screen
            router.back();
          }}
          style={{
            transform: [{ rotate: '-90deg' }],
          }}
        >
          <IconArrow size={24} />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: 'center', marginVertical: 20 }}>
        <TLogoGradient />
      </View>
      <TText>
        DesignMind is an AI-powered tool created to support designers and
        developers by providing rapid, structured feedback on user interface
        designs.{'\n\n'}
        The application allows users to upload UI frames, choose which design
        elements to review—such as typography, colour and emotion, iconography,
        UX writing, and more—and receive detailed AI-generated insights. Users
        can also guide the AI by describing the frame or enabling features like
        “User Perspective” and “Include Similarities” for more tailored
        analysis.{'\n\n'}
        This tool was developed as part of a master’s research project exploring
        human–AI collaboration in early-stage UI/UX evaluation. It reflects an
        interest in building practical, intelligent design support systems that
        empower creators to improve usability and aesthetic quality.{'\n\n'}
        Created by Tabanmehr Nabizadeh. Learn more at {'  '}
        <TText
          color="link"
          style={{ textDecorationLine: 'underline' }}
          onPress={() => {
            Linking.openURL('https://www.tabanmehr.com');
          }}
        >
          www.tabanmehr.com
        </TText>
        .
      </TText>
    </TSafeAreaView>
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
export default AboutPage;
