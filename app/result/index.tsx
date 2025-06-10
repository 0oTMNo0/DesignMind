import { IconAI, IconClose, IconReset } from '@/assets/icons';
import TSafeAreaView from '@/components/common/TSafeView';
import TText from '@/components/common/TText';
import TView from '@/components/common/TView';
import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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
import { useDispatch } from 'react-redux';
import { saveFormResult } from '@/store/slices/GlobalSlice';
import { GeminiPrompt, generationConfig, TestData64 } from '@/constants/Global';
import { GenerateContentParameters, GoogleGenAI } from '@google/genai';

const PULSE_COUNT = 3;
const PULSE_DURATION = 1800; // ms
const PULSE_SIZE = 200; // circle diameter

// Pass color as a prop

const LoadingPage = () => {
  const [showError, setShowError] = React.useState(false);
  const [callAPI, setCallAPI] = React.useState(0);
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyBFihUKfUuT4KIUTJ0m60mm9vjnOn9oiYc',
  });

  const dispatch = useDispatch();
  const formPayload = useSelector((state: RootState) => state.global.payload);

  const prepareAndSend = async () => {
    // Convert image URIs to base64 and build the Gemini parts
    if (!formPayload) return;
    const imagesBase64 = formPayload.images.map(
      (img: { uri: string; mimeType: string; data: string }, index: number) => {
        console.log('Processing image:', img.data.length, img.mimeType);
        return {
          mimeType: img.mimeType,
          data: img.data, // Assuming img.data is already a base64 string
        };
      }
    );
    // Build Gemini API body
    const parts = [
      { text: GeminiPrompt },
      ...imagesBase64.map((img: any) => ({
        inlineData: {
          mimeType: img.mimeType,
          data: img.data,
        },
      })),
    ];

    const body = {
      contents: [{ parts }],
      generationConfig: generationConfig,
    };

    return body;
  };

  React.useEffect(() => {
    if (formPayload) {
      prepareAndSend().then(async (body: any) => {
        const response = await ai.models
          .generateContent({
            model: 'gemini-2.0-flash',
            contents: body.contents, // GeminiPrompt,
            config: body.generationConfig,
          } as GenerateContentParameters)
          .then((res: any) => {
            console.log('Response from Gemini API:', res);
            const rawText = res.candidates[0].content.parts[0].text;
            const parsedData = JSON.parse(rawText); // Convert to JSON

            dispatch(saveFormResult(parsedData));
            router.replace('/result/details');
          })
          .catch((err) => {
            console.error('Error calling Gemini API:', err);
          })
          .finally(() => {
            setShowError(true);
          });
      });
    }
  }, [formPayload, callAPI]);

  return (
    <TSafeAreaView>
      {/* on loading */}
      {!showError ? (
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
        // on error
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
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
              <IconClose size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setShowError(false);
                // Re-trigger the mutation
                // Optionally, call the mutation again as in Step 4
                // prepareAndSend(); // Now this will actually retry
                setCallAPI((prev) => prev + 1);
              }}
            >
              <IconReset size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TSafeAreaView>
  );
};

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
