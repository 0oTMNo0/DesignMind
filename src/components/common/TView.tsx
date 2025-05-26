//import liraries
import { IColorType } from '@/constants/Color';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component, ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface ViewInterface extends React.ComponentProps<typeof View> {
  backgroundColor?: IColorType;
  borderColor?: IColorType;
}

interface TViewType extends ViewProps {
  children: ReactNode;
  style?: ViewInterface & ViewStyle;
}

// create a component
const TView = (props: TViewType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          backgroundColor:
            selectedTheme.colors[props.style?.backgroundColor] ||
            selectedTheme.colors.background1,
          borderColor:
            selectedTheme.colors[props.style?.borderColor] ||
            selectedTheme.colors.background1,
        },
      ]}
    >
      {props.children}
    </View>
  );
};

export default TView;
