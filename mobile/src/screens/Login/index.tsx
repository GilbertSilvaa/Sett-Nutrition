import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Notice } from '../../components/Notice';
import { Container, FormContainer, Link } from './styles';

interface LoginData {
  email: string;
  password: string;
}

export function Login() {
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    setMessageError("");
    setIsLoading(true);

    setTimeout(() => {
      setMessageError("E-mail ou senha incorreta");
      setIsLoading(false);
    }, 3000);

    console.log(data);
  }

  return (
    <Container>
      <Notice message={messageError}/>

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

        <Button 
          title="login" 
          onPress={handleSubmit(onSubmit)} 
          isLoading={isLoading} 
          disabled={isLoading}
        />
      </FormContainer>
      
      <Link>criar uma conta</Link>
    </Container>
  );
}