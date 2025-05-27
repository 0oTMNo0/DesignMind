//import liraries
import { IconAdd, IconCloseFilled } from '@/assets/icons';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import TView from './TView';

type TBoxImageProps = {
  onImageSelected?: (uri: string) => void;
  onImageRemoved?: () => void;
  value?: string | null;
};

// create a component
const TBoxImage = (props: TBoxImageProps) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  // const [imageUri, setImageUri] = React.useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      // allowsEditing: true,
      quality: 1,
      // base64: false,
    });
    console.log('ImagePicker result:', result);
    if (!result.canceled && result.assets && result.assets[0].uri) {
      const uri = result.assets[0].uri;
      // setImageUri(uri);
      props.onImageSelected && props.onImageSelected(uri);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={pickImage}>
      <View
        style={[
          styles.box,
          {
            borderColor: props.value
              ? 'transparent'
              : selectedTheme.colors.text2,
          },
        ]}
      >
        {props.value ? (
          <>
            <Image
              source={{ uri: props.value }}
              style={styles.image}
              resizeMode="cover"
            />
            <TView
              style={{
                top: -10,
                right: -10,
                position: 'absolute',
                borderRadius: 20,
                backgroundColor: 'text1',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // setImageUri(null);
                  props.onImageRemoved && props.onImageRemoved();
                }}
              >
                <IconCloseFilled />
              </TouchableOpacity>
            </TView>
          </>
        ) : (
          <IconAdd size={35} color="text2" />
        )}
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
//make this component available to the app
export default TBoxImage;
