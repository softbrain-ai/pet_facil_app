import React from 'react'
import { Svg, Circle, Defs, Stop, LinearGradient } from 'react-native-svg'
import { palette } from '../../theme/theme';
import { IconBase } from '../../components/Icon/Icon';


export function Elipse({ color = palette.greenSuccess, size = 48 }: IconBase) {
  return (
    <Svg
      width="771"
      height="771"
      viewBox="0 0 771 771"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="385.5" cy="385.5" r="385.5" fill={color} />
      <Defs>
        <LinearGradient id="paint0_linear_367_484" x1="385.5" y1="0" x2="385.5" y2="771" gradientUnits="userSpaceOnUse">
          <Stop stop-color="#03B3FF" />
          <Stop offset="1" stop-color="#15378F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}