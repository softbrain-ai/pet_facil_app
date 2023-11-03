import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from '../../../components/Box/Box';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { FormPasswordINput, FormTextInput } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, signUpSchema } from './SignUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
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
    <Screen canGoBack={true} isDefault={false} scrollable>
      {/* //TODO: colocar um botão para voltar aqui */}
      <Text preset="headingLarge" mb="s24">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        label="Seu username"
        name="username"
        placeholder="Nome"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        boxProps={{ mb: 's10' }}
      />

      <FormPasswordINput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's10' }}
      />

      <Button
        disabled={!formState.isValid}
        onPress={submitForm}
        marginTop="s48"
        title="Criar Conta"
      />

      <Box mt="s20" alignItems="center">
        <Text
          onPress={() => navigation.navigate('LoginScreen')}
          preset="headingSmall"
          color="primary"
          mb="s32">
          Já tenho conta
        </Text>
      </Box>
    </Screen>
  );
}
