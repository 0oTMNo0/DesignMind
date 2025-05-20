import { StyleProps } from 'react-native-reanimated';
import { IColorType } from './Color';

export interface IconType {
  color?: IColorType;
  size?: number;
  style?: StyleProps;
}
