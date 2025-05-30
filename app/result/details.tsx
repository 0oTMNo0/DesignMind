//import liraries
import {
  IconArrow,
  IconEye,
  IconHand,
  IconInfo,
  IconLayout,
  IconReset,
} from '@/assets/icons';
import images from '@/assets/images';
import ImageShower from '@/components/common/ImageShower';
import TAccordion from '@/components/common/TAccordion';
import TBottomSheetModal from '@/components/common/TBottomSheetModal';
import TButton from '@/components/common/TButton';
import TLine from '@/components/common/TLine';
import TLogo from '@/components/common/TLogo';
import TSafeAreaView from '@/components/common/TSafeView';
import TTage from '@/components/common/TTage';
import TText from '@/components/common/TText';
import TView from '@/components/common/TView';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

// create a component
const Details = () => {
  const [modal, setModal] = React.useState<boolean>(false);

  const [frameSelected, setFrameSelected] = React.useState<number>(0);
  const [activeMode, setActiveMode] = React.useState<
    'eye' | 'hand' | 'layout' | 'none'
  >('none');

  const handleMode = (mode: 'eye' | 'hand' | 'layout' | 'none') => {
    switch (mode) {
      case 'hand':
        setActiveMode(activeMode == 'hand' ? 'none' : 'hand');
        break;
      case 'eye':
        setActiveMode((value) => (value == 'eye' ? 'none' : 'eye'));
        break;
      case 'layout':
        setActiveMode(activeMode == 'layout' ? 'none' : 'layout');
        break;
      case 'none':
        setActiveMode('none');
        break;
      default:
        break;
    }
  };

  return (
    <>
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
              gap: 20,
              height: '100%',
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setModal(true);
              }}
            >
              <IconReset />
            </TouchableOpacity>
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
            showsVerticalScrollIndicator={false}
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
              <ImageShower
                mode={activeMode}
                eyePointList={[
                  { x: 20, y: 150, size: 'md' },
                  { x: 10, y: 20, size: 'md' },
                  { x: 150, y: 300, size: 'sm' },
                ]}
              />
              <View
                style={{
                  width: 50,
                  height: 90,
                  // backgroundColor: 'red',
                  position: 'absolute',
                  right: 0,
                  gap: 20,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleMode('eye')}
                >
                  <IconEye
                    color={activeMode !== 'eye' ? 'text2' : 'primary'}
                    size={35}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleMode('layout')}
                >
                  <IconLayout
                    color={activeMode !== 'layout' ? 'text2' : 'primary'}
                    size={35}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleMode('hand')}
                >
                  <IconHand
                    color={activeMode !== 'hand' ? 'text2' : 'primary'}
                    size={35}
                  />
                </TouchableOpacity>
              </View>
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
            <TAccordion initial title="Typography" rightIcon={'arrow'}>
              <TText style={{ padding: 10 }}>
                The UI features a clean white background that conveys simplicity
                and openness. The primary color, purple, evokes creativity and
                calm, while the red accents add a touch of urgency and
                alertness. This combination creates a modern and engaging
                interface, balancing a sense of sophistication with
                user-friendly design elements.
              </TText>
            </TAccordion>
            <TLine />
            <TAccordion title="Color and Emotion" rightIcon={'arrow'}>
              <TText style={{ padding: 10 }}>
                The UI features a clean white background that conveys simplicity
                and openness. The primary color, purple, evokes creativity and
                calm, while the red accents add a touch of urgency and
                alertness. This combination creates a modern and engaging
                interface, balancing a sense of sophistication with
                user-friendly design elements.
              </TText>
            </TAccordion>
            <TLine />
            <TAccordion title="Iconography" rightIcon={'arrow'}>
              <TText style={{ padding: 10 }}>
                The UI features a clean white background that conveys simplicity
                and openness. The primary color, purple, evokes creativity and
                calm, while the red accents add a touch of urgency and
                alertness. This combination creates a modern and engaging
                interface, balancing a sense of sophistication with
                user-friendly design elements.
              </TText>
            </TAccordion>
            <TLine />
            <TAccordion title="UX writing" rightIcon={'arrow'}>
              <TText style={{ padding: 10 }}>
                The UI features a clean white background that conveys simplicity
                and openness. The primary color, purple, evokes creativity and
                calm, while the red accents add a touch of urgency and
                alertness. This combination creates a modern and engaging
                interface, balancing a sense of sophistication with
                user-friendly design elements.
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
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  onPress={() => {
                    setFrameSelected(index);
                  }}
                >
                  <TView
                    style={{
                      borderColor:
                        index === frameSelected ? 'secondary' : 'background1',
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
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TButton
              title={frameSelected === 5 ? 'Start Over' : 'next frame'}
              size="md"
              style={{
                marginLeft: 10,
                height: 48,
                paddingLeft: 10,
                paddingRight: 5,
              }}
              rightIcon={
                <View style={{ transform: [{ rotateZ: '90deg' }] }}>
                  <IconArrow />
                </View>
              }
            />
          </View>
        </View>
      </TSafeAreaView>
      <TBottomSheetModal
        open={modal}
        title="Are you sure you want to start over?"
        onCancel={() => {
          setModal(false);
        }}
        description="This will clear your current selections and take you back to the beginning. You will not be able to recover your previous choices."
        // onConfirm={handleReset}
      />
    </>
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
