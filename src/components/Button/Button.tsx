
import { Text } from '../Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacityBox } from '../Box/Box';
import { ButtonProps, buttonPresets } from './types';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const { colors } = useTheme<Theme>();
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      height={50}
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
