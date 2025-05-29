//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

// create a component
const SvgComponent = (props: IconType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_191_138)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 22C9.606 22 5.06 19.244 2.192 15C5.06 10.756 9.606 8 15 8C20.394 8 24.94 10.756 27.808 15C24.94 19.244 20.394 22 15 22ZM15 6C8.616 6 3.312 9.412 0.152 14.47C0.0526678 14.6289 -1.90735e-06 14.8126 -1.90735e-06 15C-1.90735e-06 15.1874 0.0526678 15.3711 0.152 15.53C3.312 20.588 8.616 24 15 24C21.384 24 26.688 20.588 29.848 15.53C29.9473 15.3711 30 15.1874 30 15C30 14.8126 29.9473 14.6289 29.848 14.47C26.688 9.412 21.384 6 15 6ZM15 19C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15C19 13.9391 18.5786 12.9217 17.8284 12.1716C17.0783 11.4214 16.0609 11 15 11C13.9391 11 12.9217 11.4214 12.1716 12.1716C11.4214 12.9217 11 13.9391 11 15C11 16.0609 11.4214 17.0783 12.1716 17.8284C12.9217 18.5786 13.9391 19 15 19Z"
          fill={
            props.color
              ? selectedTheme.colors[props.color]
              : selectedTheme.colors.text1
          }
        />
      </G>
      <Defs>
        <ClipPath id="clip0_191_138">
          <Rect width={30} height={30} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
