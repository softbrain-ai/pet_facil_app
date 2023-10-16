import { useTheme } from '@shopify/restyle';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ArrowBack } from '../../assets/icons/ArrowBack';
import { CheckRound } from '../../assets/icons/CheckRound';
import { MessageRound } from '../../assets/icons/MesssageRound';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({ name, size, color = 'backgroundContrast' }: IconProps) {
  const { colors } = useAppTheme();

  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyesOn: EyeOnIcon,
  eyesOff: EyeOffIcon,
  arrowBack: ArrowBack,
  checkRound: CheckRound,
  messageRound: MessageRound
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
