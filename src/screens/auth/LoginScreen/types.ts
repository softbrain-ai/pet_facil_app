import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes';

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export type FormTypeLogin = {
  email: string;
  password: string;
};
