import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Screen, Text, FormTextInput, FormPasswordINput } from '@components';
import { useForm } from 'react-hook-form';
import { FormTypeLogin, ScreenProps } from './types';
import { LoginScreenController } from './LoginScreenController';


export function LoginScreem({ navigation }: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<FormTypeLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const teste = new LoginScreenController()


  function submitForm(data: FormTypeLogin) {
    //TODO: Make sure Called to API
    teste.submit()
    Alert.alert(`${data.email} ${data.password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <View>
        <SafeAreaView>
          <FormTextInput
            control={control}
            name="email"
            label="Email"
            rules={{ required: 'Email obrigatório' }}
            placeholder="Digite seu e-mail"
            boxProps={{ mb: 's20' }}
          />

          <FormPasswordINput
            control={control}
            name="password"
            label="Senha"
            rules={{
              required: 'Senha Obrigatória',
              minLength: {
                value: 8,
                message: 'Senha deve ter no mínimo 8 caracteres',
              },
            }}
            placeholder="Digite sua senha"
            boxProps={{ mb: 's10' }}
          />

          <Text
            onPress={navigateToForgotPasswordScreen}
            color="primary"
            preset="paragraphSmall"
            bold
            mt="s10">
            Esqueci minha senha
          </Text>

          <Button
            disabled={!formState.isValid}
            onPress={handleSubmit(submitForm)}
            marginTop="s48"
            title="Entrar"
          />

          <Button
            onPress={navigateToSignUpScreen}
            preset="outline"
            marginTop="s12"
            title="Criar uma conta"
          />
        </SafeAreaView>
      </View>
    </Screen>
  );
}
