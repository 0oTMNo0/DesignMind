import TLogoGradient from '@/components/common/TLogoGradient';
import images from '@/assets/images';
import { Marquee } from '@/components/common/Marguee';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import React, { useMemo } from 'react';
import { Dimensions, Image, View } from 'react-native';
import TText from '@/components/common/TText';
import TButton from '@/components/common/TButton';
import { Link } from 'expo-router';
import TSafeAreaView from '@/components/common/TSafeView';

export default function TestRoute() {
  const { width, height } = Dimensions.get('window');
  return (
    <TSafeAreaView>
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
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 50,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <View
            style={{
              transform: [{ translateX: 20 }],
            }}
          >
            <TLogoGradient />
          </View>
          <TText fontsize="sm" color="text1" style={{ top: -20 }}>
            power your Design by AI
          </TText>
        </View>
        <Link href="/form" push asChild>
          <TButton title="Let's Start" size="lg" />
        </Link>
      </View>
    </TSafeAreaView>
  );
}

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
