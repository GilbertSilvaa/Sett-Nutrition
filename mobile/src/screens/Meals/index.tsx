import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { getAccessToken } from '../../utils/access-token';

import * as Style from './styles';

interface TypeMeal {
  _id: string;
  image: string;
  name: string;
}

export function Meals() {
  const [typeMealList, setTypeMealList] = useState<TypeMeal[]>([]);

  useEffect(() => {
    !async function getTypesMeal() {
      const accessToken = await getAccessToken();
      const { data } = await api.get<TypeMeal[]>('/meal/all-types', {
        headers: {'x-access-token': accessToken}
      });

      setTypeMealList(data);
    }();
  }, [])

  return (
    <Style.Container>
      <Style.Header>
        <Style.Text>Selecione o tipo de refeição</Style.Text>
      </Style.Header>

      {typeMealList.map((typeMeal, index) =>  
        <Style.CardMealButton activeOpacity={.7} key={index}>
          <Style.CardMeal 
            resizeMode='cover' 
            source={{ uri: typeMeal.image}}
          >
            <Style.CardMealMain>
              <Style.Text>{typeMeal.name}</Style.Text>
            </Style.CardMealMain>
          </Style.CardMeal>
        </Style.CardMealButton>
        )
      }

    </Style.Container>
  );
}
