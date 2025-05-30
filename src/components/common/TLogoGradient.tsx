//import liraries
import React from 'react';

import {
  Canvas,
  Text,
  LinearGradient,
  vec,
  useFont,
  Path,
  Paint,
  Group,
} from '@shopify/react-native-skia';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';

// create a component
const TLogoGradient = () => {
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  const font = useFont(require('@/assets/fonts/Poppins-Black.ttf'), 32);
  const iconPath =
    'M17.8345 10.669C19.0056 7.24188 23.7409 7.13808 25.1293 10.3576L25.2468 10.6709L26.8272 15.2926C27.1894 16.3525 27.7747 17.3224 28.5435 18.1369C29.3124 18.9514 30.2471 19.5915 31.2844 20.0141L31.7093 20.1728L36.331 21.7512C39.7581 22.9223 39.8619 27.6575 36.6443 29.046L36.331 29.1635L31.7093 30.7438C30.649 31.1058 29.6787 31.6909 28.8639 32.4598C28.0491 33.2287 27.4086 34.1635 26.9858 35.201L26.8272 35.624L25.2488 40.2476C24.0777 43.6747 19.3424 43.7785 17.9559 40.561L17.8345 40.2476L16.2561 35.626C15.8942 34.5657 15.309 33.5954 14.5401 32.7805C13.7712 31.9657 12.8365 31.3253 11.7989 30.9025L11.3759 30.7438L6.75428 29.1654C3.32524 27.9943 3.22145 23.2591 6.44095 21.8726L6.75428 21.7512L11.3759 20.1728C12.4359 19.8106 13.4058 19.2253 14.2203 18.4564C15.0348 17.6875 15.6749 16.7529 16.0975 15.7156L16.2561 15.2926L17.8345 10.669ZM37.2083 3.91663C37.5747 3.91663 37.9337 4.0194 38.2446 4.21326C38.5555 4.40712 38.8057 4.6843 38.9669 5.01329L39.0609 5.24242L39.7463 7.25167L41.7575 7.93708C42.1247 8.06182 42.4465 8.29275 42.6823 8.6006C42.9181 8.90845 43.0572 9.27936 43.0819 9.66633C43.1067 10.0533 43.016 10.4389 42.8213 10.7743C42.6267 11.1097 42.3369 11.3797 41.9886 11.5502L41.7575 11.6442L39.7483 12.3296L39.0629 14.3408C38.9379 14.7079 38.7068 15.0296 38.3988 15.2652C38.0909 15.5007 37.7199 15.6396 37.333 15.6641C36.946 15.6887 36.5605 15.5978 36.2252 15.403C35.89 15.2082 35.6201 14.9183 35.4497 14.57L35.3557 14.3408L34.6703 12.3316L32.6591 11.6462C32.292 11.5214 31.9701 11.2905 31.7343 10.9827C31.4986 10.6748 31.3595 10.3039 31.3347 9.91692C31.31 9.52995 31.4007 9.14434 31.5953 8.80896C31.7899 8.47358 32.0798 8.20354 32.428 8.03304L32.6591 7.93904L34.6684 7.25363L35.3538 5.24242C35.4858 4.8555 35.7357 4.51961 36.0683 4.28185C36.4008 4.04409 36.7995 3.91638 37.2083 3.91663Z';

  return (
    <>
      <Canvas
        style={{
          height: 100,
          width: 240,
        }}
      >
        <Group transform={[{ translateY: 30 }]}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(240, 0)}
            colors={[
              selectedTheme.colors.primary,
              selectedTheme.colors.secondary,
            ]}
          />
          <Text x={0} y={32} text="DesignMind" font={font} />
          <Path
            path={iconPath}
            // You may need to adjust x/y to position it as in your logo
            transform={[{ translateX: 190 }, { translateY: -30 }]}
          >
            <Paint>
              <LinearGradient
                start={vec(0, 47)}
                end={vec(47, 0)}
                colors={[
                  selectedTheme.colors.secondary,
                  selectedTheme.colors.primary,
                ]}
              />
            </Paint>
          </Path>
        </Group>
      </Canvas>
    </>
  );
};

export default TLogoGradient;
