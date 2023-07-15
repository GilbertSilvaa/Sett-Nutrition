import { Input } from '../../components/Input';
import { Container, Header } from '../Meals/styles';

import { useForm, Controller } from 'react-hook-form';

interface SearchFoodata {
  search: string;
}

export function SearchFood() {
  const { control, handleSubmit } = useForm<SearchFoodata>();

  function onSubmit(data: SearchFoodata) {
    console.log(data.search);
  }

  return (
    <Container>
      <Header>
        <Controller 
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              placeholder="Informe o alimento" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value} 
              autoFocus
              returnKeyType="search"
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
          name="search"
        />
      </Header>
    </Container>
  );
}