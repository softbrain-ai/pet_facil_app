import { Box } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text';
import { TextInput } from '../../../components/TextInput/TextInput';

export function SignUpScreen() {

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

      <Button marginTop="s48" title="Criar Conta" />
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
