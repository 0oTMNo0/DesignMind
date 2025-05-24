import React, { useContext } from 'react';
import TSafeAreaView from '@/components/common/TSafeView';
import { ScrollView, View } from 'react-native';
import TLogo from '@/components/common/TLogo';

export default function FormPage() {
  return (
    <TSafeAreaView style={{ paddingHorizontal: 20 }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TLogo />
      </View>
      {/* form */}
      <ScrollView></ScrollView>
      {/* footer */}
      <View></View>
    </TSafeAreaView>
  );
}
