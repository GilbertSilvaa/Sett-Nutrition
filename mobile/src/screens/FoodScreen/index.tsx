import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack-routes';

import { Container } from './styles';

type FoodScreenRouteProps = RouteProp<RootStackParamList, 'FoodScreen'>;

export function FoodScreen() {
  const { params } = useRoute<FoodScreenRouteProps>();

  return (
    <Container>
    </Container>
  );
}