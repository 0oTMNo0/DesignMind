import { IconAI, IconClose, IconReset } from '@/assets/icons';
import TSafeAreaView from '@/components/common/TSafeView';
import TText from '@/components/common/TText';
import TView from '@/components/common/TView';
import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
  withDelay,
} from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store'; // adjust the path if your store is elsewhere

const PULSE_COUNT = 3;
const PULSE_DURATION = 1800; // ms
const PULSE_SIZE = 200; // circle diameter

// Pass color as a prop
const PulseCircle = ({ delayMs = 0 }: { delayMs: number }) => {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withRepeat(
      withDelay(
        delayMs,
        withTiming(1, {
          duration: PULSE_DURATION,
          easing: Easing.out(Easing.ease),
        })
      ),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0.7, 1.35], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    const opacity = interpolate(progress.value, [0, 0.7, 1], [0.7, 0.25, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.pulse,
        // { backgroundColor: selectedTheme.colors.primary },
        animatedStyle,
      ]}
    >
      <TView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'primary',
          borderRadius: PULSE_SIZE,
        }}
      >
        <></>
      </TView>
    </Animated.View>
  );
};

const LoadingPage = () => {
  const formPayload = useSelector((state: RootState) => state.global.payload);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // router.push('/result/details');
      // router.replace('/result/details');
      console.log(formPayload);
    }, 1000);
  }, []);

  return (
    <TSafeAreaView>
      {true ? (
        <View style={styles.container}>
          {[...Array(PULSE_COUNT)].map((_, i) => (
            <PulseCircle key={i} delayMs={(i * PULSE_DURATION) / PULSE_COUNT} />
          ))}
          <View style={styles.iconContainer} pointerEvents="none">
            <IconAI color="secondary" size={70} />
          </View>
          <TText
            style={{ top: PULSE_SIZE - 40 }}
            fontweight="bold"
            fontsize="2xl"
          >
            Thinking ...
          </TText>
        </View>
      ) : (
        <View style={styles.container}>
          <TView
            style={{
              width: PULSE_SIZE,
              height: PULSE_SIZE,
              backgroundColor: 'background1',
              borderColor: 'text2',
              borderWidth: 5,
              borderRadius: PULSE_SIZE,
              marginBottom: 40,
            }}
          >
            <></>
          </TView>
          <TText fontweight="bold" fontsize="2xl">
            error, please try again...
          </TText>
          <View
            style={{
              flexDirection: 'row',
              gap: 70,
              marginTop: 40,
            }}
          >
            <IconClose size={40} />
            <IconReset size={40} />
          </View>
        </View>
      )}
    </TSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: PULSE_SIZE - 20,
    height: PULSE_SIZE - 20,
    borderRadius: PULSE_SIZE,
    backgroundColor: 'black',
  },
  pulse: {
    position: 'absolute',
    width: PULSE_SIZE,
    height: PULSE_SIZE,
    borderRadius: PULSE_SIZE / 2,
    // backgroundColor set via prop
  },
});

export default LoadingPage;
