import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Box } from '../../../components/Box/Box';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>;


export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  function submitForm() {
    //TODO: Make Call to API here
    //TODO: if true redirect
    navigation.navigate(
      'SuccessScreen', {
      title: `Enviamos as ${'\n'}instruções para seu ${'\n'}e-mail`,
      description: `Clique no link enviado no seu e-mail para recuperar sua senha`,
      icon: {
        name: 'messageRound',
        color: 'primary'
      }
    }
    )
  }

  return (
    <Screen isDefault={false}>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <Box>
        <TextInput
          placeholder="Digite sua senha"
          style={{ borderWidth: 1, height: 50 }}
        />
      </Box>

      <Button onPress={submitForm} title="Recuperar Senha" />
    </Screen>
  );
}
