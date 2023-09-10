import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text italic preset="headingLarge">
        PetFacil xxx
      </Text>
      <Text preset="headingLarge">PetFacil xxx dasdasdas d</Text>
    </SafeAreaView>
  );
}

export default App;
