//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

// create a component
const SvgComponent = (props: IconType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M17 14L12 9L7 14"
        stroke={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
