import React from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { Text } from './src/components/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';
import { Box } from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          backgroundColor: '#074C4E',
          height: '40%',
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text marginBottom='s8' preset="headingLarge" color='background' bold >
          Pet
        </Text>

      </View>
      <View style={{ paddingHorizontal: 24 }}>

        <SafeAreaView>
          <Box mb='s20' mt='s40'>
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
    </ThemeProvider>
  );
}

export default App;
