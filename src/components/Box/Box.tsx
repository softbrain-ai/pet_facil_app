import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  spacing,
  spacingShorthand,
  SpacingShorthandProps,
  SpacingProps
} from "@shopify/restyle";
import { Theme } from "../../theme/theme";
import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>
  & RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor,
    layout,
    border,
    spacing,
    spacingShorthand
  ],
  TouchableOpacity
)
