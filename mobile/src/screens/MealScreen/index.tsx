import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack-routes';
import { Container, Header, Text } from '../Meals/styles';

type MealScreenRouteProps = RouteProp<RootStackParamList, 'Meal'>;

export function MealScreen() {
  const { params } = useRoute<MealScreenRouteProps>();

  return (
    <Container>
      <Header>
        <Text>{params.nameMeal}</Text>
      </Header>
    </Container>
  );
}