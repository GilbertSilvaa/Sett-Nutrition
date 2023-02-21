import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Notice } from '../../components/Notice';
import { Container, FormContainer, Link } from './styles';

import { useAuth } from '../../hooks/use-auth';
import { api } from '../../services/api';
import { setAccessToken } from '../../utils/access-token';
import { CreateAccount } from '../CreateAccount';

interface LoginData {
  email: string;
  password: string;
}

export function Login() {
  const [messageError, setMessageError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [goToCreateAccount, setGoToCreateAccount] = useState(false);

  const { control, handleSubmit } = useForm<LoginData>();
  const { setUser } = useAuth();

  async function onSubmit(data: LoginData) {
    setIsLoading(true);
    setMessageError('');

    const { data: userResponse } = await api.post('/user/login', data);

    if(userResponse._id) {
      setUser({ id: userResponse._id });
      await setAccessToken(userResponse.token);
    }
    else 
      setMessageError(userResponse.message);

    setIsLoading(false);
  }

  if(goToCreateAccount)
    return <CreateAccount backLogin={() => setGoToCreateAccount(false)}/>;

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
      
      <Link onPress={() => setGoToCreateAccount(true)}>criar uma conta</Link>
    </Container>
  );
}