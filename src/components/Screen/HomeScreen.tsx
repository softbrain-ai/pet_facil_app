import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Text } from '../Text/Text';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { RootDrawParamList } from '@routes';
import { DrawerScreenProps } from '@react-navigation/drawer';

type HomeProps = DrawerScreenProps<RootDrawParamList, 'HomeScreen'>;
interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  openMenu: () => void
}


export function HomeScreen({ children, scrollable, openMenu }: ScreenProps) {
  const { top } = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Box style={{ paddingTop: top, position: 'relative', display: 'flex' }}>
          <Box style={{ position: 'absolute', top: -181, alignSelf: 'center' }}>
            <Icon name="elipseHome" color='primary' />
          </Box>

          <Box
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            paddingHorizontal={'s24'}
            paddingTop={'s13'}
          >
            <TouchableOpacity style={IconButton} onPress={() => openMenu()}>
              <Icon name="menu" color='primary' />
            </TouchableOpacity>

            <Icon name="petFacil" color='primary' />

            <TouchableOpacity style={IconButton}>
              <Icon name="notificationIcon" color='primary' />
            </TouchableOpacity >
          </Box>

          <Box alignItems='center'>
            <Text
              mt='s40'
              preset="headingMedium"
              bold
              textAlign="center"
              color='background'
              style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: 200 }}
            >
              Do que o Moisés
              precisa hoje?
            </Text>
          </Box>


          <TouchableOpacity style={PhotoProfile}>
            <View style={cicle}>
              <Text
                preset="headingLarge"
                bold
                color='primary'
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: 100 }}
              >
                +
              </Text>

              <Text
                preset="paragraphMedium"
                bold
                color='primary'
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: 100 }}
              >
                Adicione uma foto do
                seu pet
              </Text>
            </View>
          </TouchableOpacity >

        </Box>

        <Box marginTop={Platform.OS === 'ios' ? 's250' : 's290'} paddingHorizontal='s16'>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}


const restStyle: StyleProp<ViewStyle> = {
  alignItems: 'center',
  justifyContent: 'center',
};


const IconButton: StyleProp<ViewStyle> = {
  borderRadius: 24,
  height: 56,
  width: 56,
  backgroundColor: '#fff',
  ...restStyle
};

const PhotoProfile: StyleProp<ViewStyle> = {
  height: 166,
  width: 166,
  backgroundColor: '#fff',
  borderRadius: 100,
  position: 'absolute',
  top: 270,
  left: 110,
  ...restStyle
};

const cicle: StyleProp<ViewStyle> = {
  height: 146,
  width: 146,
  borderRadius: 1,
  borderColor: 'red',
  borderStyle: 'dashed',
  ...restStyle
};