import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';

import { RootStackParamList } from '@routes';
import { FormTextInput, Button, Text, Screen } from '@components';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResetNavigationSuccess } from '@hooks';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
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

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Recuperar Senha" />
    </Screen>
  );
}
