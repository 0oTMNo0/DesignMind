//import liraries
import { IColorType } from '@/constants/Color';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component, ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ViewInterface extends React.ComponentProps<typeof View> {
  backgroundColor?: IColorType;
}

interface TSafeAreaViewType extends ViewProps {
  children: ReactNode;
  style?: ViewInterface & ViewStyle;
}

// create a component
const TSafeAreaView = (props: TSafeAreaViewType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <SafeAreaView
      {...props}
      style={[
        props.style,
        {
          backgroundColor:
            selectedTheme.colors[props.style?.backgroundColor] ||
            selectedTheme.colors.background1,
          height: '100%',
          width: '100%',
          flex: 1,
        },
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default TSafeAreaView;
