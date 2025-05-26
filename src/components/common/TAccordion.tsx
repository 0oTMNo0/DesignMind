import React, { PropsWithChildren, useRef, useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import TText from './TText';
import TSwitch from './TSwitch';
import { IconArrow } from '@/assets/icons';

interface TAccordionProps extends PropsWithChildren {
  title: string;
  textIcon?: JSX.Element;
  style?: ViewStyle;
  rightIcon: 'arrow' | 'switch';
  onChange?: (open: boolean) => void;
}

const TAccordion = ({
  title,
  textIcon,
  children,
  style,
  rightIcon,
  onChange,
}: TAccordionProps) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const animatedHeight = useSharedValue(0);
  const animatedOpacity = useSharedValue(0);
  const rotation = useSharedValue(180);

  // Animation logic directly on state change
  React.useEffect(() => {
    animatedHeight.value = withTiming(open ? contentHeight : 0, {
      duration: 300,
    });
    animatedOpacity.value = withTiming(open ? 1 : 0, { duration: 200 });
    rotation.value = withTiming(open ? 180 : 0, { duration: 200 });
    if (onChange) onChange(open);
  }, [open, contentHeight]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
    opacity: animatedOpacity.value,
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  // Measure content height only once, or when children change
  const onContentLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    if (contentHeight !== height) setContentHeight(height);
  };

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.header}
        onPress={handleToggle}
      >
        {textIcon ? <View style={styles.iconLeft}>{textIcon}</View> : null}
        <TText fontweight="regular" fontsize="lg" style={styles.title}>
          {title}
        </TText>
        {rightIcon === 'switch' ? (
          <View style={styles.iconRight}>
            <TSwitch
              value={!open}
              onValueChange={(value: boolean) => setOpen(!value)}
            />
          </View>
        ) : (
          <Animated.View style={[styles.iconRight, animatedStyle2]}>
            <IconArrow size={30} />
          </Animated.View>
        )}
      </TouchableOpacity>
      <Animated.View style={animatedStyle}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            opacity: 0,
            pointerEvents: 'none',
          }}
          onLayout={onContentLayout}
        >
          {children}
        </View>
        {open ? <View>{children}</View> : null}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 16,
    // paddingVertical: 14,
  },
  iconLeft: {
    marginRight: 12,
    minWidth: 24,
    alignItems: 'flex-start',
  },
  iconRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
  },
});

export default TAccordion;
