import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Box } from '../../../components/Box/Box';
import { TextInput } from '../../../components/Form/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { Icon, PasswordInput } from '@components';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  function submitForm() {
    //TODO: Make sure Call to API

    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description: `Clique no link enviado no seu e-mail para recuperar sua senha`,
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen isDefault={false}>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <PasswordInput
        label='Senha'
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />


      <Button onPress={submitForm} title="Recuperar Senha" />
    </Screen>
  );
}
