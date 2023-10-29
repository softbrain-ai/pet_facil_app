import React from 'react'
import { Svg, Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg'
import { palette } from '../../theme/theme';
import { IconBase } from '../../components/Icon/Icon';

export function HeaderIcon({ color = palette.greenPrimary, size = 48 }: IconBase) {
  return (
    <Svg width="390" height="302" viewBox="0 0 390 302" fill="none">
      <Circle cx="194.5" cy="-0.5" r="302.5" fill={color} />
      <Defs>
        <LinearGradient id="paint0_linear_50_400" x1="194.5" y1="-303" x2="194.5" y2="302" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#03B3FF" />
          <Stop offset="1" stop-color="#15378F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}



