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
        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
        stroke={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
