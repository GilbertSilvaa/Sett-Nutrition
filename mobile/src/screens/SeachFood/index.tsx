import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '../../components/Input';
import { CardFoodSearch } from './components/CardFoodSearch';
import { Container, Header } from '../Meals/styles';

import { api } from '../../services/api';
import { getAccessToken } from '../../utils/access-token';
import { Food } from '../../@types/food';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface SearchFoodata {
  search: string;
}

export function SearchFood() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm<SearchFoodata>();

  const [foodListResult, setFoodListResult] = useState<Food[]>([]);

  async function onSubmit({ search }: SearchFoodata) {
    const accessToken = await getAccessToken();

    const data = { name: search };
    const { data: response } = await api.post<Food[]>('/food/name', data, {
      headers: {'x-access-token': accessToken}
    });

    setFoodListResult(response);
  }

  function redirectFoodScreen(idFood: string) {
    navigation.dispatch(CommonActions.navigate({
      name: 'FoodScreen',
      params: { idFood }
    }));
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
      {foodListResult.map((food, index) =>
        <CardFoodSearch 
          key={index} 
          id={food._id} 
          image={food.image}  
          name={food.name}
          onPress={redirectFoodScreen}
        />
      )}
    </Container>
  );
}