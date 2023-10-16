import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {

  function submitForm() {
    navigation.navigate('SuccessScreen', {
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success'
      }
    });
  }

  return (
    <Screen canGoBack={true}>
      <Box mb="s10" mt="s56">
        <TextInput placeholder="Nome" style={{ borderWidth: 1, height: 50 }} />
      </Box>

      <Box mb="s10">
        <TextInput placeholder="Email" style={{ borderWidth: 1, height: 50 }} />
      </Box>

      <Box mb="s10">
        <TextInput placeholder="Senha" style={{ borderWidth: 1, height: 50 }} />
      </Box>

      <Button onPress={submitForm} marginTop="s48" title="Criar Conta" />
      <Box mt="s20" alignItems="center">
        <Text
          // onPress={backToLogin}
          preset="headingSmall"
          color="primary"
          mb="s32">
          Já tenho conta
        </Text>
      </Box>
    </Screen>
  );
}
