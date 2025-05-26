import React, { useContext } from 'react';
import TSafeAreaView from '@/components/common/TSafeView';
import {
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { Link } from 'expo-router';

export default function FormPage() {
  const [racSwitch, setRacSwitch] = React.useState(true);
  const [upSwitch, setUpSwitch] = React.useState(true);
  const [isSwitch, setIsSwitch] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  const items = [
    { label: 'PC', value: 'PC' },
    { label: 'Mobile', value: 'Mobile' },
  ];

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <TText fontweight="regular" fontsize="lg">
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
          title="Review all categories"
          rightIcon={'switch'}
          onChange={(open: boolean) => setRacSwitch(!open)}
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
              <TCheckbox value={false} title="typography" />
              <TCheckbox value={false} title="color and emotion" />
              <TCheckbox value={false} title="Iconography" />
            </View>
            <View style={{ flex: 1, gap: 20 }}>
              <TCheckbox value={false} title="ux writing" />
              <TCheckbox value={false} title="content layout" />
              <TCheckbox value={false} title="eyes tracking" />
            </View>
          </View>
        </TAccordion>
        <TLine />
        <TText fontweight="regular" fontsize="lg" style={{ marginBottom: 10 }}>
          Description
        </TText>
        <TInput
          multiline
          placeholder="type here ..."
          style={{
            minHeight: 100,
          }}
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
        <Link href={'/result'} push asChild>
          <TButton title="Submit" />
        </Link>
      </ScrollView>
    </TSafeAreaView>
  );
}

const styles = StyleSheet.create({});
