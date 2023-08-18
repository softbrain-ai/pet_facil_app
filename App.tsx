import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Text } from './src/components/Text';


function App(): JSX.Element {
  return (
    <SafeAreaView >
      <Text preset='headingLarge' style={{ color: 'red' }}>PetFacil xxx</Text>
    </SafeAreaView>
  );
}

export default App;
