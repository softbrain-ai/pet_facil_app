import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/Form/TextInput/TextInput';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { signUpFormType } from './types';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<signUpFormType>({
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack={true} scrollable>
      <FormTextInput
        control={control}
        label="Nome"
        name="nome"
        placeholder="Nome"
        boxProps={{ mb: 's20' }}
        rules={{ required: 'Nome obrigatório' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        boxProps={{ mb: 's10' }}
      // rules={{required: 'E-mail obrigatório'}}
      />

      <TextInput label="Senha" placeholder="Senha" boxProps={{ mb: 's10' }} />

      <Button
        disabled={!formState.isValid}
        onPress={submitForm}
        marginTop="s48"
        title="Criar Conta"
      />

      <Box mt="s20" alignItems="center">
        <Text
          // onPress={backToLogin}
          preset="headingSmall"
          color="primary"
          mb="s32">
          Já tenho conta
        </Text>
      </Box>
    </Screen>
  );
}
