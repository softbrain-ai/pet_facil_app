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
        <Box style={{ paddingTop: isDefault ? 0 : top }}>
          {isDefault && (
            <Box
              style={{
                backgroundColor: '#074C4E',
                height: 400,
                borderBottomLeftRadius: 200,
                borderBottomRightRadius: 200,
                paddingTop: isDefault ? top : 0

              }}>
              {canGoBack && (
                <TouchableOpacityBox
                  onPress={navigation.goBack}
                  gap="s10"
                  marginLeft="s24"
                  marginTop="s52"
                  backgroundColor="background"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 50,

                    position: 'absolute',
                  }}>
                  <Icon name="arrowBack" color="primary" size={21} />
                </TouchableOpacityBox>
              )}

              <Box alignItems="center" marginTop="s40">
                <Text preset="headingLarge" color="background" bold>
                  Pet
                </Text>
              </Box>

              <Text></Text>
            </Box>
          )}

          <Box paddingHorizontal="s24">{children}</Box>
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
