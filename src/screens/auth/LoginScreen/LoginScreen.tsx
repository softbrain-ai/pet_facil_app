import React from 'react';

import { SafeAreaView, View } from 'react-native';

import { TextInput, Button, Screen, Text, Icon } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreem({ navigation }: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen')
  }

  return (
    <Screen scrollable>
      <View>
        <SafeAreaView>

          <TextInput
            label='Email'
            placeholder="Digite seu e-mail"
            errorMessage='Menssagem de error'
            boxProps={{ mb: 's20' }}
          />

          <TextInput
            label='Senha'
            placeholder="Digite sua senha"
            RightComponent={<Icon color='gray2' name='eyesOn' />}
            boxProps={{ mb: 's10' }}
          />

          <Text onPress={navigateToForgotPasswordScreen} color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
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
