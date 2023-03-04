import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Notice } from '../../components/Notice';
import { DataUserSteps } from '../DataUserSteps';
import { Container, FormContainer, Link } from './styles';

import { api } from '../../services/api';
import { setAccessToken } from '../../utils/access-token';

interface CreateAccountProps {
  backLogin: () => void;
}

interface CreateAccountData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function CreateAccount({ backLogin }: CreateAccountProps) {
  const [userIdCreated, setUserIdCreated] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm<CreateAccountData>();

  async function onSubmit(data: CreateAccountData) {
    setIsLoading(true);
    setMessageError('');

    if(data.password != data.confirmPassword) {
      setMessageError('As senhas são diferentes');
      setIsLoading(false);
      return;
    }

    const { data: userResponse } = await api.post('/user/create', data);

    if(userResponse._id) {
      setUserIdCreated(userResponse._id);
      setAccessToken(userResponse.token);
    }
    else
      setMessageError(userResponse.message);

    setIsLoading(false);
  }

  if(userIdCreated)
    return <DataUserSteps userId={userIdCreated}/>;

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
              label="Nome"
              placeholder="Informe seu nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />

        <Controller 
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              label="E-mail"
              placeholder="Informe seu melhor email"
              keyboardType="email-address"
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
              placeholder="Crie uma senha"
              isPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <Controller 
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              label="Confirmar Senha"
              placeholder="Confirme sua senha"
              isPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />

        <Button 
          title="criar conta" 
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </FormContainer>

      <Link onPress={backLogin}>fazer login</Link>
    </Container>
  );
}