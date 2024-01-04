import { Text, Box, BasicScreen, TitleLine, Button } from "@components";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawParamList } from "@routes";


type props = DrawerScreenProps<RootDrawParamList, 'AreaPetScreen'>;


export function AreaPet({ navigation }: props) {

  function goBackToLogin() {
    navigation.goBack();
  }

  return (
    <BasicScreen title="Olá Moisés" goBack={() => { goBackToLogin() }}>
      <Box mt="s36" flexDirection="row" justifyContent="space-between">
        <Box gap="s16">
          <Text
            preset="headingMedium"
            bold
            color='gray1'
          >
            Moisés
          </Text>

          <Text preset="headingSmall" bold color='primary'>
            Adicione a raça
          </Text>

          <Text preset="headingSmall" bold color='primary'>
            Adicione o peso
          </Text>

          <Text preset="headingSmall" bold color='primary'>
            Adicione a altura
          </Text>
        </Box>

        <Box height={171} width={171} backgroundColor="gray3" style={IconDog}>
        </Box>
      </Box>

      <Box mt="s36">
        <Text
          preset="paragraphMedium"
          bold
          color='primary'
        >
          Saiba mais sobre a alimentação do seu cão
        </Text>
      </Box>

      <TitleLine text="Agenda de hoje" />

      <Box mt="s20">
        <Text preset="paragraphMedium" color='gray1'>
          Por enquanto você não há nenhuma atividade para hoje :)
        </Text>
      </Box>


      <Box mt="s56">
        <Button title="Adicionar atividade" />
      </Box>
    </BasicScreen>
  )
}


const IconDog = {
  borderRadius: 100
}