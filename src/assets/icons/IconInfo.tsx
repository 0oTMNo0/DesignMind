//import liraries
import { IconType } from '@/constants/IconTypes';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

// create a component
const SvgComponent = (props: IconType) => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  console.log(props.color);

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z"
        stroke={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.5C12.3315 5.5 12.6495 5.6317 12.8839 5.86612C13.1183 6.10054 13.25 6.41848 13.25 6.75C13.25 7.08152 13.1183 7.39946 12.8839 7.63388C12.6495 7.8683 12.3315 8 12 8C11.6685 8 11.3505 7.8683 11.1161 7.63388C10.8817 7.39946 10.75 7.08152 10.75 6.75C10.75 6.41848 10.8817 6.10054 11.1161 5.86612C11.3505 5.6317 11.6685 5.5 12 5.5Z"
        fill={
          props.color
            ? selectedTheme.colors[props.color]
            : selectedTheme.colors.text1
        }
      />
      <Path
        d="M12.25 17V10H11.25M10.5 17H14"
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
