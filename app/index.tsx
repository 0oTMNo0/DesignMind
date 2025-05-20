// app/test.tsx
// import TLogo from '@/components/common/TLogo';
import TLogoGradient from '@/components/common/TLogoGradient';
// import TText from '@/components/common/TText';
// import { ThemeContext } from '@/contexts/ThemeContext';
import images from '@/assets/images';
import { Marquee } from '@/components/common/Marguee';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Line } from 'react-native-svg';
import TText from '@/components/common/TText';
// import { Image } from 'expo-image';

export default function TestRoute() {
  // const { selectedTheme } = React.useContext(ThemeContext);
  // console.log('selectedTheme', selectedTheme.colorScheme);
  const { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView style={style.container}>
      {/* <Text style={style.text}>Route detected1324</Text> */}
      {/* <TText fontsize="md" fontweight="regular" color="text1">
        This is a test text
      </TText>
      <TLogo /> */}
      <AnimatedCarousel width={width} height={height} />
      <Canvas
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Rect width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, 550)}
            colors={['#00000000', '#00000030', '#000000']}
          />
        </Rect>
      </Canvas>
      <View
        style={{
          zIndex: 2,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            transform: [{ translateX: 20 }],
          }}
        >
          <TLogoGradient />
        </View>
        <TText fontsize="sm" color="text1">
          power your Design by AI
        </TText>

        <Button
          title="Go to Home"
          onPress={() => {
            // navigation.navigate('home');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});

const AnimatedCarousel = ({ width, height }: any) => {
  const itemSize = width * 0.25;
  const space = 15;
  const scrollImages = useMemo(() => {
    // chunk array into 3 rows
    const chunkedArray = [
      images.img1,
      images.img2,
      images.img3,
      images.img4,
      images.img5,
      images.img6,
      images.img7,
      images.img8,
      images.img9,
      images.img10,
      images.img11,
      images.img12,
      images.img13,
      images.img14,
    ];

    const chunkSize = 3;
    const result = [];
    for (let i = 0; i < chunkedArray.length; i += chunkSize) {
      result.push(chunkedArray.slice(i, i + chunkSize));
    }
    return result;
  }, []);
  return (
    <View
      style={{
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // rotate: '90deg',
        transform: [{ rotate: '-15deg' }],
      }}
    >
      <Marquee direction="horizontal" speed={1}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {scrollImages[0].map((item, index) => (
            <Image
              source={item}
              resizeMode="cover"
              key={item}
              style={{
                width: itemSize,
                height: itemSize * 1.5,
                borderRadius: 15,
                borderWidth: 1,
                margin: space / 2,
              }}
            />
          ))}
        </View>
      </Marquee>
      <Marquee direction="horizontal" speed={1} reverse>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {scrollImages[1].map((item, index) => (
            <Image
              source={item}
              resizeMode="cover"
              key={item}
              style={{
                width: itemSize,
                height: itemSize * 1.5,
                borderRadius: 15,
                borderWidth: 1,
                margin: space / 2,
              }}
            />
          ))}
        </View>
      </Marquee>
      <Marquee direction="horizontal" speed={1}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          {scrollImages[2].map((item, index) => (
            <Image
              source={item}
              resizeMode="cover"
              key={item}
              style={{
                width: itemSize,
                height: itemSize * 1.5,
                borderRadius: 15,
                borderWidth: 1,
                margin: space / 2,
              }}
            />
          ))}
        </View>
      </Marquee>

      {/* <TLogoGradient /> */}
    </View>
  );
};
