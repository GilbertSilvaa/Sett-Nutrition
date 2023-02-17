import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../components/Input';
import { ButtonLogin } from '../../components/ButtonLogin';
import { Container, FormContainer } from './styles';

interface LoginData {
  email: string;
  password: string;
}

export function Login() {

  const { control, handleSubmit } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    console.log(data);
  }

  return (
    <Container>
      <FormContainer>
        <Controller 
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              label="E-mail" 
              placeholder="exemple@email.com"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              label="Senha" 
              placeholder="informe a senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isPassword
            />
          )}
          name="password"
        />

        <ButtonLogin title="login" onPress={handleSubmit(onSubmit)}/>
      </FormContainer>
    </Container>
  );
}