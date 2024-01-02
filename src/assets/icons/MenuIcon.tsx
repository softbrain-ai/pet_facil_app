import React from 'react'
import { Svg, Path } from 'react-native-svg'

interface svgProps {
  color?: string
  size?: number
}

export function MenuIcon({ color = 'black', size = 24 }: svgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 12" fill={color} >
      <Path d="M1 11H15M1 6H15M1 1H9" stroke="black" stroke-opacity="0.67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}