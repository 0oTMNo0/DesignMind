//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import Svg, { G, Mask, Path } from 'react-native-svg';

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
      <Mask
        id="mask0_35_69"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={22}
        height={22}
      >
        <Path
          d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
          fill={selectedTheme.colors.text1}
          stroke={selectedTheme.colors.text1}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Path
          d="M14.8285 9.17151L9.17149 14.8285M9.17149 9.17151L14.8285 14.8285"
          stroke="black"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Mask>
      <G mask="url(#mask0_35_69)">
        <Path
          d="M0 0H24V24H0V0Z"
          fill={
            props.color
              ? selectedTheme.colors[props.color]
              : selectedTheme.colors.error
          }
        />
      </G>
    </Svg>
  );
};

export default SvgComponent;
