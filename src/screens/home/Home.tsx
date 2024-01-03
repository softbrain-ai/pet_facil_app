import { Box, HomeScreen, Icon, Text, TitleLine } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootDrawParamList, RootStackParamList } from "@routes";
import { TouchableOpacity } from "react-native";

import { DrawerScreenProps } from '@react-navigation/drawer';

type HomeProps = DrawerScreenProps<RootDrawParamList, 'HomeScreen'>;


export function Home({ navigation }: HomeProps) {
  function OpenMenuDraw() {
    navigation.openDrawer()
  }

  return (
    <HomeScreen scrollable openMenu={() => OpenMenuDraw()}>
      <TouchableOpacity>
        <Box style={AreaDog} flexDirection="row" gap="s24">
          <Box style={DogIcon} justifyContent="center" alignItems="center">
            <Icon name="dog" color='primary' />
          </Box>
          <Box>
            <Text preset="paragraphLarge" bold color='primary'>
              Área do Moisés
            </Text>
            <Text preset="paragraphMedium" color='primary'>
              A vida do seu pet bem organizada!
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>

      <TitleLine text={'Serviços rápidos'} />

      <Box flexDirection="row" gap="s20" mb="s16">
        <Box style={BoxButton} backgroundColor="pink1">
          <Text preset="paragraphMedium" color='gray1' bold>
            Emergência
          </Text>
          <Text preset="paragraphMedium" color='gray1'>
            Veterinários 24h
          </Text>
        </Box>

        <Box style={BoxButton} backgroundColor="yellow1">
          <Text preset="paragraphMedium" color='gray1' bold>
            Vacinas
          </Text>
          <Text preset="paragraphMedium" color='gray1'>
            Saúde em dia
          </Text>
        </Box>
      </Box>

      <Box flexDirection="row" gap="s20" mb="s24">
        <Box style={BoxButton} backgroundColor="orange1">
          <Text preset="paragraphMedium" color='gray1' bold>
            Ração
          </Text>
          <Text preset="paragraphMedium" color='gray1'>
            Tá acabando
          </Text>
        </Box>

        <Box style={BoxButton} backgroundColor="blue1">
          <Text preset="paragraphMedium" color='gray1' bold>
            Brinquedos
          </Text>
          <Text preset="paragraphMedium" color='gray1'>
            Um mimo!
          </Text>
        </Box>
      </Box>
    </HomeScreen>
  )
}

const DogIcon = {
  backgroundColor: '#fff',
  width: 48,
  height: 48,
  borderRadius: 50,
}

const AreaDog = {
  borderRadius: 16,
  padding: 16,
  backgroundColor: '#1440981a'
}

const BoxButton = {
  flex: 1,
  padding: 16,
  borderRadius: 16,
}