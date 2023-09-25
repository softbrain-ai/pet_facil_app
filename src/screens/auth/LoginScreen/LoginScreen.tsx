import React from 'react'
import { Text } from '../../../components/Text'
import { Box } from '../../../components/Box/Box'
import { SafeAreaView, View } from 'react-native'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'

export function LoginScreem() {
  return (
    <Screen>
      <View >
        <SafeAreaView>
          <Box mb='s20' mt='s56'>
            <TextInput
              placeholder='Digite seu e-mail'
              style={{ borderWidth: 1, height: 50 }}
            />
          </Box>

          <Box>
            <TextInput
              placeholder='Digite sua senha'
              style={{ borderWidth: 1, height: 50 }}
            />
          </Box>

          <Text color='primary' preset='paragraphSmall' bold mt='s10'>
            Esqueci minha senha
          </Text>


          <Button marginTop='s48' title='Entrar' />
          <Button preset='outline' marginTop='s12' title='Criar uma conta' />

        </SafeAreaView>
      </View>
    </Screen>
  )
}