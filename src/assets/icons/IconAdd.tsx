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
      viewBox="0 0 38 38"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.375 19C3.375 10.3703 10.3703 3.375 19 3.375C27.6297 3.375 34.625 10.3703 34.625 19C34.625 27.6297 27.6297 34.625 19 34.625C10.3703 34.625 3.375 27.6297 3.375 19ZM19 6.5C15.6848 6.5 12.5054 7.81696 10.1612 10.1612C7.81696 12.5054 6.5 15.6848 6.5 19C6.5 22.3152 7.81696 25.4946 10.1612 27.8388C12.5054 30.183 15.6848 31.5 19 31.5C22.3152 31.5 25.4946 30.183 27.8388 27.8388C30.183 25.4946 31.5 22.3152 31.5 19C31.5 15.6848 30.183 12.5054 27.8388 10.1612C25.4946 7.81696 22.3152 6.5 19 6.5Z"
        fill={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5625 11.1875C20.5625 10.7731 20.3979 10.3757 20.1049 10.0826C19.8118 9.78962 19.4144 9.625 19 9.625C18.5856 9.625 18.1882 9.78962 17.8951 10.0826C17.6021 10.3757 17.4375 10.7731 17.4375 11.1875V17.4375H11.1875C10.7731 17.4375 10.3757 17.6021 10.0826 17.8951C9.78962 18.1882 9.625 18.5856 9.625 19C9.625 19.4144 9.78962 19.8118 10.0826 20.1049C10.3757 20.3979 10.7731 20.5625 11.1875 20.5625H17.4375V26.8125C17.4375 27.2269 17.6021 27.6243 17.8951 27.9174C18.1882 28.2104 18.5856 28.375 19 28.375C19.4144 28.375 19.8118 28.2104 20.1049 27.9174C20.3979 27.6243 20.5625 27.2269 20.5625 26.8125V20.5625H26.8125C27.2269 20.5625 27.6243 20.3979 27.9174 20.1049C28.2104 19.8118 28.375 19.4144 28.375 19C28.375 18.5856 28.2104 18.1882 27.9174 17.8951C27.6243 17.6021 27.2269 17.4375 26.8125 17.4375H20.5625V11.1875Z"
        fill={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
      />
    </Svg>
  );
};

export default SvgComponent;
