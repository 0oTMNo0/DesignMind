import React from 'react';
import TSafeAreaView from '@/components/common/TSafeView';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import TLogo from '@/components/common/TLogo';
import { IconInfo, IconReset } from '@/assets/icons';
import TText from '@/components/common/TText';
import TBoxImage from '@/components/common/TBoxImage';
import TLine from '@/components/common/TLine';
import TAccordion from '@/components/common/TAccordion';
import TInput from '@/components/common/TInput';
import TSwitch from '@/components/common/TSwitch';
import TPicker from '@/components/common/TPicker';
import TButton from '@/components/common/TButton';
import TCheckbox from '@/components/common/TCheckbox';
import { useRouter } from 'expo-router';
import TBottomSheetModal from '@/components/common/TBottomSheetModal';
import { formPayloadType, TestData64 } from '@/constants/Global';
import { useDispatch } from 'react-redux';
import { saveFormPayload } from '@/store/slices/GlobalSlice';
import * as FileSystem from 'expo-file-system';

export default function FormPage() {
  const [images, setImages] = React.useState<
    {
      uri: string;
      mimeType: string;
    }[]
  >([]);

  // Checkbox categories (for 6 categories)
  const categoryKeys = [
    'typography',
    'colorAndEmotion',
    'iconography',
    'uxWriting',
    'contentLayout',
    'eyesTracking',
  ];
  const [categories, setCategories] = React.useState<{
    [key: string]: boolean;
  }>(Object.fromEntries(categoryKeys.map((k) => [k, false])));

  const [racSwitch, setRacSwitch] = React.useState(true);
  const [upSwitch, setUpSwitch] = React.useState(true);
  const [isSwitch, setIsSwitch] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState<string | null>(
    'Mobile'
  );
  const [description, setDescription] = React.useState('');
  const [modal, setModal] = React.useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  // Image handlers
  const handleImageSelected = (
    index: number,
    uri: string,
    mimeType: string
  ) => {
    setImages((prev) => {
      const next = [...prev];
      if (next[index]) {
        next[index].uri = uri;
        next[index].mimeType = mimeType;
      } else {
        next[index] = { uri, mimeType };
      }
      // next[index] = uri;
      return next;
    });
  };
  const handleImageRemoved = (index: number) => {
    setImages((prev) => {
      const temp = prev.filter((_, i) => i !== index);
      return temp;
    });
  };

  // Checkbox handler
  const handleCategoryChange = (key: string, value: boolean) => {
    setCategories((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  async function uriToBase64(uri: string): Promise<string> {
    return await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
  }
  // Submit handler
  const handleSubmit = async () => {
    const base64Images = await Promise.all(
      images.map(async (img) => ({
        uri: img.uri,
        mimeType: img.mimeType,
        data: await uriToBase64(img.uri), // Properly awaited
      }))
    );
    const payload: formPayloadType = {
      images: base64Images,
      categories: !racSwitch
        ? {
            typography: true,
            colorAndEmotion: true,
            iconography: true,
            uxWriting: true,
            contentLayout: true,
            eyesTracking: true,
          }
        : (categories as any),
      userPerspective: upSwitch,
      includeSimilarities: isSwitch,
      deviceTarget: selectedValue as 'Mobile' | 'PC',
      description,
    };
    // console.log('Form Payload:', payload);
    dispatch(saveFormPayload(payload));

    // Navigate to result page
    router.push('/result');
    // router.replace('/result/details');
  };

  const handleReset = () => {
    setImages(Array(6).fill(null));
    setCategories(Object.fromEntries(categoryKeys.map((k) => [k, false])));
    setRacSwitch(true);
    setUpSwitch(true);
    setIsSwitch(true);
    setSelectedValue('Mobile');
    setDescription('');
    setModal(false);
  };

  const items = [
    { label: 'PC', value: 'PC' },
    { label: 'Mobile', value: 'Mobile' },
  ];

  return (
    <>
      <TSafeAreaView style={{ paddingHorizontal: 20 }}>
        {/* header */}
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
        {/* form */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <TText fontweight="regular" fontsize="lg">
            UI frames
          </TText>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}
          >
            {[0, 1, 2].map((i) => (
              <TBoxImage
                key={i}
                value={images[i]?.uri || null}
                onImageRemoved={() => handleImageRemoved(i)}
                onImageSelected={(uri: string, mimeType: string) =>
                  handleImageSelected(i, uri, mimeType)
                }
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}
          >
            {[3, 4, 5].map((i) => (
              <TBoxImage
                key={i}
                value={images[i]?.uri || null}
                onImageRemoved={() => handleImageRemoved(i)}
                onImageSelected={(uri: string, mimeType: any) =>
                  handleImageSelected(i, uri, mimeType)
                }
              />
            ))}
          </View>
          <TLine />
          <TAccordion
            title="Review all categories"
            rightIcon={'switch'}
            onChange={setRacSwitch}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
              }}
            >
              <View style={{ flex: 1, gap: 20 }}>
                <TCheckbox
                  value={categories.typography}
                  title="typography"
                  onValueChange={(val) =>
                    handleCategoryChange('typography', val)
                  }
                />
                <TCheckbox
                  value={categories.colorAndEmotion}
                  title="color and emotion"
                  onValueChange={(val) =>
                    handleCategoryChange('colorAndEmotion', val)
                  }
                />
                <TCheckbox
                  value={categories.iconography}
                  title="Iconography"
                  onValueChange={(val) =>
                    handleCategoryChange('iconography', val)
                  }
                />
              </View>
              <View style={{ flex: 1, gap: 20 }}>
                <TCheckbox
                  value={categories.uxWriting}
                  title="ux writing"
                  onValueChange={(val) =>
                    handleCategoryChange('uxWriting', val)
                  }
                />
                <TCheckbox
                  value={categories.contentLayout}
                  title="content layout"
                  onValueChange={(val) =>
                    handleCategoryChange('contentLayout', val)
                  }
                />
                <TCheckbox
                  value={categories.eyesTracking}
                  title="eyes tracking"
                  onValueChange={(val) =>
                    handleCategoryChange('eyesTracking', val)
                  }
                />
              </View>
            </View>
          </TAccordion>
          <TLine />
          <TText
            fontweight="regular"
            fontsize="lg"
            style={{ marginBottom: 10 }}
          >
            Description
          </TText>
          <TInput
            multiline
            placeholder="type here ..."
            style={{ minHeight: 100 }}
            value={description}
            onChangeText={setDescription}
          />
          <TLine />
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
            onPress={() => setUpSwitch(!upSwitch)}
            activeOpacity={0.7}
          >
            <TText fontweight="regular" fontsize="lg">
              user perspective
            </TText>
            <TSwitch
              value={upSwitch}
              onValueChange={(value: boolean) => setUpSwitch(value)}
            />
          </TouchableOpacity>
          <TLine />
          <TText fontweight="regular" fontsize="lg">
            Device target
          </TText>
          <TPicker
            items={items}
            value={selectedValue}
            onSelect={setSelectedValue}
            placeholder="Choose a device"
          />
          <TLine />
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: 20,
            }}
            onPress={() => setIsSwitch(!isSwitch)}
            activeOpacity={0.7}
          >
            <TText fontweight="regular" fontsize="lg">
              Include Similarities
            </TText>
            <TSwitch
              value={isSwitch}
              onValueChange={(value: boolean) => setIsSwitch(value)}
            />
          </TouchableOpacity>
          <TButton title="Submit" onPress={handleSubmit} />
        </ScrollView>
      </TSafeAreaView>
      <TBottomSheetModal
        open={modal}
        title="Are you sure you want to start over?"
        onCancel={() => {
          setModal(false);
        }}
        onConfirm={handleReset}
      />
    </>
  );
}

const styles = StyleSheet.create({});
