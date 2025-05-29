//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

// create a component
const SvgComponent = (props: IconType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <Svg width={props.size || 12} height={props.size || 12} viewBox="0 0 30 30">
      <Path
        fill={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
        d="M3.8625 20.4558H9.4125V25.905C9.4125 26.52 9.77679 26.8967 10.3671 26.8967C10.9446 26.8967 11.3084 26.52 11.3084 25.9045V20.4563H18.6161V25.9056C18.6161 26.5206 18.9804 26.8972 19.5702 26.8972C20.1477 26.8972 20.512 26.5206 20.512 25.905V20.4563H26.1493C26.7648 20.4563 27.1414 20.092 27.1414 19.5017C27.1414 18.9113 26.7648 18.5599 26.1493 18.5599H20.5125V11.4911H26.1498C26.7654 11.4911 27.142 11.1268 27.142 10.5493C27.142 9.95951 26.7654 9.59576 26.1498 9.59576H20.5125V4.10737C20.5125 3.49183 20.1482 3.10291 19.5707 3.10291C18.9809 3.10291 18.6166 3.49183 18.6166 4.10737V9.59469H11.3089V4.10791C11.3089 3.49237 10.9446 3.10344 10.3671 3.10344C9.77679 3.10344 9.4125 3.49237 9.4125 4.10791V9.59469H3.8625C3.23518 9.59469 2.85857 9.95898 2.85857 10.5488C2.85857 11.1268 3.23518 11.4906 3.86304 11.4906H9.41304V18.5599H3.8625C3.23464 18.5599 2.85804 18.9113 2.85804 19.5011C2.85804 20.0915 3.23464 20.4558 3.8625 20.4558ZM11.3089 18.5593V11.4911H18.6161V18.5604L11.3089 18.5593Z"
      />
    </Svg>
  );
};

export default SvgComponent;
