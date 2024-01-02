import { useTheme } from '@shopify/restyle';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ArrowBack } from '../../assets/icons/ArrowBack';
import { CheckRound } from '../../assets/icons/CheckRound';
import { MessageRound } from '../../assets/icons/MesssageRound';
import { Pressable } from 'react-native';
import { HeaderIcon } from '../../assets/icons/HeaderIcon';
import { Elipse } from '../../assets/icons/Elipse';
import { ElipseHome } from '../../assets/icons/ElipseHome';
import { MenuIcon } from '../../assets/icons/MenuIcon';
import { NotificationIcon } from '../../assets/icons/NotificationIcon';
import { DogIcon } from '../../assets/icons/DogIcon'
import { PetFacil } from '../../assets/icons/PetFacil'
import { type SvgProps } from 'react-native-svg';

export interface IconBase extends SvgProps {
  size?: number;
  color?: string;
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;

}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void
}

export function Icon({ name, size, onPress, color = 'backgroundContrast' }: IconProps) {
  const { colors } = useAppTheme();

  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    )
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  petFacil: PetFacil,
  eyesOn: EyeOnIcon,
  eyesOff: EyeOffIcon,
  arrowBack: ArrowBack,
  checkRound: CheckRound,
  messageRound: MessageRound,
  headerIcon: HeaderIcon,
  elipse: Elipse,
  elipseHome: ElipseHome,
  menu: MenuIcon,
  notificationIcon: NotificationIcon,
  dog: DogIcon
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
