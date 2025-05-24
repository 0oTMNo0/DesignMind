import React, { useContext } from 'react';
import TSafeAreaView from '@/components/common/TSafeView';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import TLogo from '@/components/common/TLogo';
import { IconAI, IconInfo, IconReset } from '@/assets/icons';
import TText from '@/components/common/TText';
import TBoxImage from '@/components/common/TBoxImage';
import TLine from '@/components/common/TLine';
import TAccordion from '@/components/common/TAccordion';
import TSwitch from '@/components/common/TSwitch';

export default function FormPage() {
  const [racSwitch, setRacSwitch] = React.useState(true);
  return (
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
            // backgroundColor: 'red',
            gap: 20,
            height: '100%',
          }}
        >
          <IconReset />
          <IconInfo />
        </View>
      </View>
      {/* form */}
      <ScrollView>
        <TText fontweight="extrabold" fontsize="lg">
          UI frames
        </TText>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TBoxImage />
          <TBoxImage />
          <TBoxImage />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TBoxImage />
          <TBoxImage />
          <TBoxImage />
        </View>
        <TLine />
        <TAccordion
          title="review all categories"
          rightIcon={'arrow'}
          onChange={(open: boolean) => setRacSwitch(!open)}
        >
          <TText>1111111111</TText>
        </TAccordion>
      </ScrollView>
      {/* footer */}
      <View></View>
    </TSafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
