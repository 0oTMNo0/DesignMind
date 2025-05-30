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
  ColorMatrix,
  Line,
  Rect,
  RadialGradient,
} from '@shopify/react-native-skia';
import React from 'react';
import { View } from 'react-native';

const WIDTH = 183;
const HEIGHT = 390;
const BORDER = 5;
const OUTER_RADIUS = 15;
const INNER_RADIUS = 10;

// Grayscale matrix for Skia ColorMatrix
const GRAYSCALE_MATRIX = [
  0.33, 0.33, 0.33, 0, 0, 0.33, 0.33, 0.33, 0, 0, 0.33, 0.33, 0.33, 0, 0, 0, 0,
  0, 1, 0,
];

interface imageShowerProps {
  mode: 'eye' | 'hand' | 'layout' | 'none';
  eyePointList: {
    x: number;
    y: number;
    size: 'lg' | 'md' | 'sm';
  }[];
}

const ImageShower = (props: imageShowerProps) => {
  const image = useImage(images.img12);
  const imageHandZone = useImage(images.imageHandZone);
  const { selectedTheme } = React.useContext(ThemeContext) as ThemeContextType;
  // const [isBW, setIsBW] = React.useState(true);

  const outer = rrect(rect(0, 0, WIDTH, HEIGHT), OUTER_RADIUS, OUTER_RADIUS);
  const inner = rrect(
    rect(BORDER, BORDER, WIDTH - BORDER * 2, HEIGHT - BORDER * 2),
    INNER_RADIUS,
    INNER_RADIUS
  );

  const eyePointSize = {
    lg: 250,
    md: 100,
    sm: 50,
  };

  return (
    <View style={{ width: WIDTH, height: HEIGHT }}>
      <Canvas style={{ flex: 1 }}>
        {/* Image as background */}
        {image &&
          (props.mode !== 'none' ? (
            <SkiaImage
              image={image}
              x={BORDER}
              y={BORDER}
              width={WIDTH - BORDER * 2}
              height={HEIGHT - BORDER * 2}
              fit="cover"
            >
              <ColorMatrix matrix={GRAYSCALE_MATRIX} />
            </SkiaImage>
          ) : (
            <SkiaImage
              image={image}
              x={BORDER}
              y={BORDER}
              width={WIDTH - BORDER * 2}
              height={HEIGHT - BORDER * 2}
              fit="cover"
            />
          ))}
        {props.mode == 'hand' ? (
          <SkiaImage
            image={imageHandZone}
            x={BORDER}
            y={BORDER}
            width={WIDTH - BORDER * 2}
            height={HEIGHT - BORDER * 2}
            fit="cover"
            opacity={0.7}
          />
        ) : props.mode == 'layout' ? (
          <>
            {/* Draw vertical lines */}
            {[1, 2, 3].map((i) => (
              <Line
                key={`v-${i}`}
                p1={vec((WIDTH / 4) * i, BORDER)}
                p2={vec((WIDTH / 4) * i, HEIGHT - BORDER)}
                color={selectedTheme.colors.primary}
                strokeWidth={2}
              />
            ))}
            {/* Draw horizontal lines */}
            {[1, 2, 3].map((i) => (
              <Line
                key={`h-${i}`}
                p1={vec(BORDER, (HEIGHT / 4) * i)}
                p2={vec(WIDTH - BORDER, (HEIGHT / 4) * i)}
                color={selectedTheme.colors.primary}
                strokeWidth={2}
              />
            ))}
          </>
        ) : props.mode == 'eye' ? (
          <>
            {props.eyePointList.map((item, index) => {
              const size = eyePointSize[item.size]; // e.g., 250, 100, 50
              return (
                <Rect
                  key={index}
                  transform={[
                    { translateX: item.x - size / 2 },
                    { translateY: item.y - size / 2 },
                  ]}
                  width={size}
                  height={size}
                >
                  <RadialGradient
                    c={vec(size / 2, size / 2)}
                    r={size / 2}
                    colors={[selectedTheme.colors.primary, 'transparent']}
                  />
                </Rect>
              );
            })}
          </>
        ) : null}
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
