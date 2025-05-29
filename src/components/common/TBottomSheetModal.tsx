import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeOutDown,
  SlideInDown,
} from 'react-native-reanimated';
import TView from './TView';
import TText from './TText';
import TButton from './TButton';

interface TBottomSheetModalProps {
  // Define any props you want to pass to the component
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  open: boolean;
}

// create a component
const TBottomSheetModal = (props: TBottomSheetModalProps) => {
  return (
    <>
      {props.open && (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutDown}
          style={{
            flex: 1,
            backgroundColor: '#00000090',
            zIndex: 500,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={props.onCancel}
          ></TouchableOpacity>
          <Animated.View
            entering={SlideInDown}
            style={{
              zIndex: 600,
            }}
          >
            <TView
              style={{
                backgroundColor: 'background2',
                borderTopEndRadius: 15,
                borderTopStartRadius: 15,
                width: '100%',
                paddingHorizontal: 20,
                paddingTop: 40,
                paddingBottom: 10,
                alignItems: 'center',
              }}
            >
              <TText fontweight="bold" style={{ marginBottom: 10 }}>
                {props.title}
              </TText>
              <TText
                color="text2"
                style={{
                  textAlign: 'center',
                  lineHeight: 30,
                  marginBottom: 20,
                }}
              >
                {props.description}
              </TText>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  gap: 20,
                  marginVertical: 20,
                }}
              >
                <TButton
                  title="Cancel"
                  size="lg"
                  style={{ flex: 1 }}
                  outline
                  onPress={props.onCancel}
                />
                <TButton
                  title="Start Over"
                  style={{ flex: 1 }}
                  size="lg"
                  onPress={props.onConfirm}
                />
              </View>
            </TView>
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default TBottomSheetModal;
