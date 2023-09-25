import React, { Children } from 'react';
import { Box } from '../Box/Box';
import { View } from 'react-native';
import { Text } from '../Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Icon } from '../Icon/Icon';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean
}

export function Screen({ children, canGoBack = false }: ScreenProps) {
  const { top } = useAppSafeArea();

  return (
    <Box>
      <Box
        style={{
          backgroundColor: '#074C4E',
          height: 300,
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
          paddingTop: top,
        }}>

        {canGoBack && (
          <Box
            gap="s10"
            marginLeft="s24"
            marginTop="s24"
            backgroundColor="background"
            justifyContent="center"
            alignItems="center"
            style={{
              height: 48,
              width: 48,
              borderRadius: 50,
            }}>
            <Icon name="arrowBack" color="primary" size={21} />
          </Box>
        )}

        <Box alignSelf="center" height="100%">
          <Text marginBottom="s8" preset="headingLarge" color="background" bold>
            Pet
          </Text>
        </Box>
      </Box>

      <Box paddingHorizontal="s24">{children}</Box>
    </Box>
  );
}
