import images from '@/assets/images';
import { ThemeContext, ThemeContextType } from '@/contexts/ThemeContext';
import {
  Canvas,
  DiffRect,
  Image as SkiaImage,
  LinearGradient,
  rect,
  rrect,
  useImage,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import { View } from 'react-native';

const WIDTH = 183;
const HEIGHT = 390;
const BORDER = 5;
const OUTER_RADIUS = 15;
const INNER_RADIUS = 10;

const ImageShower = () => {
  const image = useImage(images.img12);
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;

  const outer = rrect(rect(0, 0, WIDTH, HEIGHT), OUTER_RADIUS, OUTER_RADIUS);
  const inner = rrect(
    rect(BORDER, BORDER, WIDTH - BORDER * 2, HEIGHT - BORDER * 2),
    INNER_RADIUS,
    INNER_RADIUS
  );

  return (
    <View style={{ width: WIDTH, height: HEIGHT }}>
      <Canvas style={{ flex: 1 }}>
        {/* Image as background */}
        {image && (
          <SkiaImage
            image={image}
            x={BORDER}
            y={BORDER}
            width={WIDTH - BORDER * 2}
            height={HEIGHT - BORDER * 2}
            fit="cover"
          />
        )}
        {/* Gradient frame on top */}
        <DiffRect inner={inner} outer={outer}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, HEIGHT)}
            colors={[
              selectedTheme.colors.primary,
              selectedTheme.colors.secondary,
            ]}
          />
        </DiffRect>
      </Canvas>
    </View>
  );
};

export default ImageShower;
