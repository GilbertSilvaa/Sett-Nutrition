import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack-routes';
import { getAccessToken } from '../../utils/access-token';

import { Food } from '../../@types/food';
import { api } from '../../services/api';
import { Container, Image, Padding, Spacing, SubTitle, Title } from './styles';
import { Loading } from '../../components/Loading';
import { CardMacroFood } from './components/CardMacroFood';
import { Footer } from '../MealScreen/styles';
import { ButtonOption } from '../../components/ButtonOption';

type FoodScreenRouteProps = RouteProp<RootStackParamList, 'FoodScreen'>;

export function FoodScreen() {
  const { params } = useRoute<FoodScreenRouteProps>();

  const [food, setFood] = useState({} as Food);

  useEffect(() => {
    !async function getFood() {
      const accessToken = await getAccessToken();

      const { data } = await api.get<Food>(`/food/${params.idFood}`, {
        headers: {'x-access-token': accessToken}
      });
      
      setFood(data);
    }();
  }, []);

  if(!food)
    return (
      <Container>
        <Loading/>
      </Container>
    );

  return (
    <Container>
      <Image source={{ uri: food.image }} />
      <Padding>
        <Spacing>
          <Title>{ food.name }</Title>
          <SubTitle style={{ color: '#323232' }}>
            { food.portionInGrams }g
          </SubTitle>
        </Spacing>
        <SubTitle style={{ color: '#575757', marginTop: 4, marginBottom: 28 }}>
          { food.calories } cals
        </SubTitle>

        <CardMacroFood 
          name="Proteínas" 
          amount={food.proteins} 
          typeMacro="proteins" 
        />
        <CardMacroFood 
          name="Carboidratos" 
          amount={food.carbohydrates} 
          typeMacro="carbohydrates"
        />
        <CardMacroFood 
          name="Gorduras totais" 
          amount={food.fats} 
          typeMacro="fats"
        />
      </Padding>

      <Footer>
        <View></View>
        <ButtonOption title="adicionar" color="#2D9450" />
      </Footer>
    </Container>
  );
}