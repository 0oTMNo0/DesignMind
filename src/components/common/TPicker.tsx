// src/components/common/TPicker.tsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import { IconArrow } from '@/assets/icons';
import TText from './TText';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type PickerItem = {
  label: string;
  value: string;
};

type TPickerProps = {
  items: PickerItem[];
  value: string | null;
  placeholder?: string;
  onSelect: (value: string) => void;
};

const DROPDOWN_HEIGHT = 102;

const TPicker = ({
  items,
  value,
  placeholder = 'Select an item',
  onSelect,
}: TPickerProps) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  const [open, setOpen] = useState(false);

  const dropdownHeight = useSharedValue(0);
  const dropdownOpacity = useSharedValue(0);

  // Animation for opening/closing the dropdown
  const animatedDropdownStyle = useAnimatedStyle(() => ({
    height: dropdownHeight.value,
    opacity: dropdownOpacity.value,
    overflow: 'hidden',
  }));

  const handleToggle = () => {
    setOpen((prev) => {
      if (!prev) {
        dropdownHeight.value = withTiming(DROPDOWN_HEIGHT, { duration: 200 });
        dropdownOpacity.value = withTiming(1, { duration: 200 });
      } else {
        dropdownHeight.value = withTiming(0, { duration: 200 });
        dropdownOpacity.value = withTiming(0, { duration: 200 });
      }
      return !prev;
    });
  };

  const handleSelect = (selectedValue: string) => {
    onSelect(selectedValue);
    dropdownHeight.value = withTiming(0, { duration: 200 });
    dropdownOpacity.value = withTiming(0, { duration: 200 });
    setOpen(false);
  };

  const selectedLabel =
    items.find((item) => item.value === value)?.label || placeholder;

  return (
    <View style={{ marginVertical: 8 }}>
      <TouchableOpacity
        style={[
          styles.selector,
          {
            backgroundColor: selectedTheme.colors.background2,
            // borderColor: selectedTheme.colors.border1,
          },
        ]}
        onPress={handleToggle}
        activeOpacity={0.8}
      >
        <TText fontsize="md">{selectedLabel}</TText>
        {/* ▼ chevron indicator */}
        {open ? (
          <View>
            <IconArrow />
          </View>
        ) : (
          <View style={{ transform: [{ rotateZ: '180deg' }] }}>
            <IconArrow />
          </View>
        )}
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, animatedDropdownStyle]}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.item,
                {
                  backgroundColor: selectedTheme.colors.background2,
                  //   borderBottomColor: selectedTheme.colors.border1,
                },
              ]}
              onPress={() => handleSelect(item.value)}
            >
              <TText fontsize="md">{item.label}</TText>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 14,
    minHeight: 48,
  },
  dropdown: {
    // borderWidth: 1,
    borderRadius: 15,
    marginTop: 6,
    zIndex: 100,
    position: 'relative',
    // backgroundColor: 'white', // Will be overridden by theme
  },
  item: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
  },
});

export default TPicker;
