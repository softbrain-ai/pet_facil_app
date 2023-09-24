import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text italic preset="headingLarge" bold >
          PetFacil xxx
        </Text>

        <Button marginBottom='s24' title='Enviar' />
        <Button loading marginBottom='s24' preset='outline' title='outline' />
        <Button loading title='Enviar' />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
