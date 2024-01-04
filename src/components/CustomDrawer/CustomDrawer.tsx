import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";
import { DrawerContentComponentProps, DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawParamList } from "@routes";
import { Platform, TouchableOpacity } from "react-native";

type HomeRootProps = DrawerScreenProps<RootDrawParamList, 'HomeScreen'>;

export function CustomDrawer({ ...props }: DrawerContentComponentProps) {

  function sair() {
    props.navigation.navigate('LoginScreen')
    props.navigation.closeDrawer();
  }

  return (
    <Box paddingHorizontal="s16" mt={Platform.OS == 'ios' ? 's32' : undefined}>
      <Box flexDirection="row" gap="s16" mt="s24" alignItems="center">
        <Box
          height={82}
          width={82}
          style={Avatar}
          backgroundColor="greenPrimaryLight"
          justifyContent="center"
          alignItems="center"
        >
          <Icon name="dog" color="primary" />
        </Box>
        <Box>
          <Text preset="paragraphLarge" bold color='primary'>
            Olá, Moisés
          </Text>
          <Text preset="paragraphSmall" color='gray2'>
            moises@gmail.com
          </Text>
        </Box>
      </Box>

      <Box mt="s36" gap="s16">
        <TouchableOpacity onPress={() => props.navigation.navigate('MyAccountScreen')}>
          <Box flexDirection="row" gap="s16">
            <Icon name="notificationIcon" color="primary" size={24} />
            <Text preset="headingSmall" bold color='gray1'>Minha Conta</Text>
          </Box>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => props.navigation.navigate('MyAccountScreen')}>
          <Box flexDirection="row" gap="s16">
            <Icon name="notificationIcon" color="primary" size={24} />
            <Text preset="headingSmall" bold color='gray1'>Meus exames</Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('MyAccountScreen')}>
          <Box flexDirection="row" gap="s16">
            <Icon name="notificationIcon" color="primary" size={24} />
            <Text preset="headingSmall" bold color='gray1'>Serviços</Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('MyPetsScreen')}>
          <Box flexDirection="row" gap="s16">
            <Icon name="notificationIcon" color="primary" size={24} />
            <Text preset="headingSmall" bold color='gray1'>Meus Pets</Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => sair()}>
          <Box flexDirection="row" gap="s16">
            <Icon name="notificationIcon" color="primary" size={24} />
            <Text preset="headingSmall" bold color='gray1'>Sair</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  )
}

const Avatar = {
  borderRadius: 50
}



