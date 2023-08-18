import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  preset?: TextVariants;
}

export const Text = ({
  children,
  preset = 'paragraphMedium',
  style,
  ...rest
}: TextProps) => {
  return (
    <RNText style={[$fontSizes[preset], style]} {...rest}>
      {children}
    </RNText>
  );
};

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {
    fontSize: 32,
    lineHeight: 36.77,
  },
  headingMedium: {
    fontSize: 22,
    lineHeight: 26.4,
  },
  headingSmall: {
    fontSize: 18,
    lineHeight: 20.68,
  },

  paragraphLarge: {
    fontSize: 18,
    lineHeight: 25.2,
  },
  paragraphMedium: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  paragraphSmall: {
    fontSize: 14,
    lineHeight: 19.6,
  },

  paragraphCaption: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  paragraphCaptionSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
};
