import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreem, SignUpScreen, SuccessScreen, ForgotPasswordScreen, Home, MyAccount, MyPets } from '@screens'
import { IconProps } from '../components/Icon/Icon';

import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '@components';


export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
};

export type RootDrawParamList = {
  HomeScreen: undefined;
  MyAccountScreen: undefined;
  MyPetsScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawParamList>();

type HomeRootProps = DrawerScreenProps<RootDrawParamList, 'HomeScreen'>;

export function HomeRoot({ navigation }: HomeRootProps) {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerShown: false,

    }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={Home} />
      <Drawer.Screen name="MyPetsScreen" component={MyPets} />
      <Drawer.Screen name="MyAccountScreen" component={MyAccount} />
    </Drawer.Navigator>
  );
}

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreem} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

        <Stack.Screen
          name="HomeScreen"
          component={HomeRoot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


