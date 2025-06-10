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
import { TestData64 } from '@/constants/Global';
import { clearFormPayload } from '@/store/slices/GlobalSlice';
import { RootState } from '@/store/store';
import { router } from 'expo-router';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// create a component
const Details = () => {
  const formPayload = useSelector((state: RootState) => state.global.payload);
  const formResult = useSelector((state: RootState) => state.global.result);
  const dispatch = useDispatch();
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

  React.useEffect(() => {
    // console.log('11111111', formPayload);
    // console.log('222222222', formResult[frameSelected].eyesTracking);
    // clg the formPayload?.images?.[frameSelected].data keys since it's an object
    console.log(
      '222222222 keys',
      formPayload?.images[0].data.slice(0, 10),
      TestData64[0].data.slice(0, 10)
    );
    // console.log('33333333', formPayload?.images?.[frameSelected].data);
  }, []);

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
                flexDirection:
                  formPayload?.deviceTarget === 'Mobile' ? 'row' : 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 40,
              }}
            >
              <View></View>
              <ImageShower
                deviceTarget={formPayload?.deviceTarget || 'Mobile'}
                data={formPayload?.images?.[frameSelected]?.data as any}
                mode={activeMode}
                eyePointList={formResult[frameSelected]?.eyesTracking}
              />
              <View
                style={
                  formPayload?.deviceTarget === 'Mobile'
                    ? {
                        width: 50,
                        height: 90,
                        position: 'absolute',
                        right: 0,
                        gap: 20,
                      }
                    : {
                        width: '100%',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 40,
                      }
                }
              >
                {formPayload?.categories.eyesTracking && (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => handleMode('eye')}
                    >
                      <IconEye
                        color={activeMode !== 'eye' ? 'text2' : 'primary'}
                        size={35}
                      />
                    </TouchableOpacity>
                  </>
                )}
                {formPayload?.categories.eyesTracking && (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => handleMode('layout')}
                    >
                      <IconLayout
                        color={activeMode !== 'layout' ? 'text2' : 'primary'}
                        size={35}
                      />
                    </TouchableOpacity>
                  </>
                )}
                {/* hand mode is only available on mobile */}
                {formPayload?.deviceTarget !== 'Mobile' ? null : (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleMode('hand')}
                  >
                    <IconHand
                      color={activeMode !== 'hand' ? 'text2' : 'primary'}
                      size={35}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {formPayload?.includeSimilarities && (
              <>
                <TText
                  fontweight="regular"
                  fontsize="lg"
                  style={{ marginBottom: 10 }}
                >
                  Shared Attributes
                </TText>

                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <TTage
                    title="Color"
                    disabled={
                      formResult[frameSelected]?.similarity.color === false
                    }
                  />

                  {/* font */}

                  <TTage
                    title="Font"
                    disabled={
                      formResult[frameSelected]?.similarity.font === false
                    }
                  />

                  {/* icon */}

                  <TTage
                    title="Icon type"
                    disabled={
                      formResult[frameSelected]?.similarity.icon === false
                    }
                  />

                  {/* semanticCategory between the frames */}

                  <TTage
                    title="Semantic Category"
                    disabled={
                      formResult[frameSelected]?.similarity.semanticCategory ===
                      false
                    }
                  />
                </View>

                <TLine />
              </>
            )}
            {formPayload?.categories.typography && (
              <>
                <TAccordion initial title="Typography" rightIcon={'arrow'}>
                  <TText style={{ padding: 10 }}>
                    {formResult[frameSelected]?.typography}
                  </TText>
                </TAccordion>
                <TLine />
              </>
            )}
            {formPayload?.categories.colorAndEmotion && (
              <>
                <TAccordion title="Color and Emotion" rightIcon={'arrow'}>
                  <TText style={{ padding: 10 }}>
                    {formResult[frameSelected]?.colorAndEmotion}
                  </TText>
                </TAccordion>
                <TLine />
              </>
            )}
            {formPayload?.categories.iconography && (
              <>
                <TAccordion title="Iconography" rightIcon={'arrow'}>
                  <TText style={{ padding: 10 }}>
                    {formResult[frameSelected]?.iconography ||
                      'No iconography data available.'}
                  </TText>
                </TAccordion>
                <TLine />
              </>
            )}
            {formPayload?.userPerspective && (
              <>
                <TAccordion title="User Perspective" rightIcon={'arrow'}>
                  <TText style={{ padding: 10 }}>
                    {formResult[frameSelected]?.userPerspective}
                  </TText>
                </TAccordion>
                <TLine />
              </>
            )}
            {formPayload?.categories.uxWriting && (
              <>
                <TAccordion title="UX writing" rightIcon={'arrow'}>
                  <TText style={{ padding: 10 }}>
                    {formResult[frameSelected]?.uxWriting.comment}
                    {/* each line map suggestions */}
                    <TText
                      fontweight="medium"
                      fontsize="md"
                      style={{
                        marginVertical: 20,
                      }}
                    >
                      {/* next line */}
                      {'\n'}
                      {'\n'}
                      Suggestions:
                    </TText>
                    {formResult[frameSelected]?.uxWriting?.suggestions.map(
                      (item: string, index: number) => (
                        <TText
                          key={index}
                          style={{ padding: 10, color: 'text2' }}
                        >
                          {'\n'}
                          {item}
                        </TText>
                      )
                    )}
                  </TText>
                </TAccordion>
              </>
            )}
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
              {formPayload?.images?.map((item, index) => (
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
                      source={{ uri: item.uri as any }}
                      resizeMode="cover"
                      style={{ width: 48, height: 48, borderRadius: 10 }}
                    />
                  </TView>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TButton
              title={
                formPayload?.images?.length &&
                frameSelected === formPayload?.images?.length - 1
                  ? 'Start Over'
                  : 'next frame'
              }
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
              onPress={() => {
                if (formPayload?.images?.length) {
                  if (frameSelected === formPayload?.images?.length - 1) {
                    setModal(true);
                  } else {
                    setFrameSelected((value) => value + 1);
                  }
                }
              }}
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
        onConfirm={() => {
          dispatch(clearFormPayload());
          dispatch(clearFormPayload());
          router.dismissAll();
        }}
        description="This will clear your current selections and take you back to the beginning. You will not be able to recover your previous choices."
        // onConfirm={handleReset}
      />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Details;
