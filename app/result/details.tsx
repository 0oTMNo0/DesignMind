//import liraries
import { IconInfo, IconReset } from '@/assets/icons';
import images from '@/assets/images';
import ImageShower from '@/components/common/ImageShower';
import TAccordion from '@/components/common/TAccordion';
import TButton from '@/components/common/TButton';
import TLine from '@/components/common/TLine';
import TLogo from '@/components/common/TLogo';
import TSafeAreaView from '@/components/common/TSafeView';
import TTage from '@/components/common/TTage';
import TText from '@/components/common/TText';
import TView from '@/components/common/TView';
import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

// create a component
const Details = () => {
  return (
    <TSafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <TLogo />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
            gap: 20,
            height: '100%',
          }}
        >
          <IconReset />
          <IconInfo />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          //   padding: 20,
          alignItems: 'center',
        }}
      >
        <ScrollView
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{
            padding: 20,
            justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <View></View>
            <ImageShower />
            <View
              style={{
                width: 50,
                height: 90,
                backgroundColor: 'red',
                position: 'absolute',
                right: 0,
              }}
            ></View>
          </View>

          <TText
            fontweight="regular"
            fontsize="lg"
            style={{ marginBottom: 10 }}
          >
            Shared Attributes
          </TText>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TTage title="123" />
            <TTage title="123" />
            <TTage title="123" />
          </View>
          <TLine />
          <TAccordion title="Typography" rightIcon={'arrow'}>
            <TText style={{ padding: 10 }}>
              The UI features a clean white background that conveys simplicity
              and openness. The primary color, purple, evokes creativity and
              calm, while the red accents add a touch of urgency and alertness.
              This combination creates a modern and engaging interface,
              balancing a sense of sophistication with user-friendly design
              elements.
            </TText>
          </TAccordion>
          <TLine />
          <TAccordion title="Color and Emotion" rightIcon={'arrow'}>
            <TText style={{ padding: 10 }}>
              The UI features a clean white background that conveys simplicity
              and openness. The primary color, purple, evokes creativity and
              calm, while the red accents add a touch of urgency and alertness.
              This combination creates a modern and engaging interface,
              balancing a sense of sophistication with user-friendly design
              elements.
            </TText>
          </TAccordion>
          <TLine />
          <TAccordion title="Iconography" rightIcon={'arrow'}>
            <TText style={{ padding: 10 }}>
              The UI features a clean white background that conveys simplicity
              and openness. The primary color, purple, evokes creativity and
              calm, while the red accents add a touch of urgency and alertness.
              This combination creates a modern and engaging interface,
              balancing a sense of sophistication with user-friendly design
              elements.
            </TText>
          </TAccordion>
          <TLine />
          <TAccordion title="UX writing" rightIcon={'arrow'}>
            <TText style={{ padding: 10 }}>
              The UI features a clean white background that conveys simplicity
              and openness. The primary color, purple, evokes creativity and
              calm, while the red accents add a touch of urgency and alertness.
              This combination creates a modern and engaging interface,
              balancing a sense of sophistication with user-friendly design
              elements.
            </TText>
          </TAccordion>
        </ScrollView>
        {/* footer */}
        <View
          style={{
            width: '100%',
            height: 75,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            {[...Array(6).keys()].map((index) => (
              <TView
                key={index}
                style={{
                  borderColor: 'secondary',
                  borderWidth: 2,
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={images.img10}
                  style={{ width: 48, height: 48, borderRadius: 10 }}
                />
              </TView>
            ))}
          </ScrollView>
          <TButton title="asd" size="md" style={{ marginLeft: 10 }} />
        </View>
      </View>
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
export default Details;
