import React, { Children } from 'react';
import { Box, TouchableOpacityBox } from '../Box/Box';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Text } from '../Text/Text';

import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Icon } from '../Icon/Icon';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  isDefault?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  isDefault = true,
}: ScreenProps) {

  const { top } = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
      <Container>
        <Box style={{ paddingTop: top, height: isDefault ? 411 : 0, position: 'relative', display: 'flex' }}>
          {
            isDefault &&
            <>
              <Box style={{ position: 'absolute', top: -360, alignSelf: 'center' }}>
                <Icon name="elipse" color='primary' />
              </Box>

              <Text
                mt='s40'
                preset="headingLarge"
                bold
                color='background'
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              >
                PET
              </Text>

              <Text
                mt='s61'
                bold
                color='background'
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              >Estamos quase lá :)</Text>
              <Text
                preset="headingLarge"
                bold
                color='background'
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              >
                Faça seu login
              </Text>
            </>
          }
        </Box>

        <Box paddingHorizontal="s24" pb='s24'>{children}</Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
