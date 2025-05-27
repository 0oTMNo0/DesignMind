//import liraries
import { IColorType } from '@/constants/Color';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import TText from './TText';
import { IFontWeight } from '@/constants/Typography';

interface TButtonProps extends TouchableOpacityProps {
  title: string;
  bgColor?: IColorType;
  size?: 'sm' | 'md' | 'lg';
  textColor?: IColorType;
  fontweight?: IFontWeight;
  style?: ViewStyle;
  outline?: boolean;
}
// create a component
const TButton = (props: TButtonProps) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          ...props.style,
          backgroundColor: props.bgColor
            ? selectedTheme.colors[props.bgColor]
            : selectedTheme.colors.primary,
          borderRadius: 6,
          height: props.size === 'sm' ? 32 : props.size === 'lg' ? 58 : 40,
          paddingHorizontal:
            props.size === 'sm' ? 12 : props.size === 'lg' ? 24 : 16,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        props.outline && {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: props.bgColor
            ? selectedTheme.colors[props.bgColor]
            : selectedTheme.colors.primary,
        },
      ]}
    >
      <TText
        color={
          props.outline
            ? props.bgColor
              ? props.bgColor
              : 'primary'
            : props.textColor
        }
        fontweight={props.fontweight || 'medium'}
        fontsize={props.size}
      >
        {props.title}
      </TText>
    </TouchableOpacity>
  );
};

// define your styles

//make this component available to the app
export default TButton;
