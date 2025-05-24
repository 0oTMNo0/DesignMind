//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
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
        d="M12 3C14.1231 3.00003 16.1778 3.7506 17.8009 5.11905C19.4241 6.48749 20.5113 8.3857 20.8703 10.4782C21.2293 12.5707 20.837 14.7227 19.7627 16.5539C18.6885 18.3851 17.0014 19.7776 14.9998 20.4853C12.9982 21.193 10.8108 21.1702 8.82427 20.4211C6.83777 19.672 5.18004 18.2448 4.14407 16.3916C3.1081 14.5385 2.76061 12.3788 3.16299 10.2942C3.56538 8.20964 4.69174 6.33442 6.34301 5"
        stroke={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 4.5H7V8.5"
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
