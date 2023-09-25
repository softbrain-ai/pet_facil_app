import { useTheme } from '@shopify/restyle';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ArrowBack } from '../../assets/icons/ArrowBack';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({ name, size, color = 'backgroundContrast' }: Props) {
  const { colors } = useAppTheme();

  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyesOn: EyeOnIcon,
  eyesOff: EyeOffIcon,
  arrowBack: ArrowBack
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
