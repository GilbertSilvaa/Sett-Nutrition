import { useRoute, RouteProp, useNavigation, StackActions } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack-routes';

import { BoxConsumption } from '../../components/BoxConsumption';
import { Panel } from '../../components/Panel';

import { Container, Header, Text } from '../Meals/styles';
import { Footer, Main } from './styles';
import { ButtonOption } from '../../components/ButtonOption';

const amountMacrosExample = [
  { 
    amount: 900,
    macroName: 'carbs',
    color: '#00fff0'
  },
  { 
    amount: 250,
    macroName: 'protein',
    color: '#ff5656'
  },
  { 
    amount: 335,
    macroName: 'gord',
    color: '#ffb673'
  },
];
const caloriesExample = {
  amount: 205,
  goal: 3000
}
const waterExample = {
  amount: 900,
  goal: 2500
}

type MealScreenRouteProps = RouteProp<RootStackParamList, 'Meal'>;

export function MealScreen() {
  const { params } = useRoute<MealScreenRouteProps>();
  const navigator = useNavigation();

  return (
    <Container>
      <Header>
        <Text>{params.nameMeal}</Text>
      </Header>
      <Main>
        <Panel 
          macros={amountMacrosExample}
          calories={caloriesExample}
          water={waterExample}
        />

        <BoxConsumption 
          title="Alimentos" 
          iconName="pizza-outline"
          addCConsumption={() => navigator.dispatch(StackActions.push('SearchFood'))}
        >

        </BoxConsumption>
      </Main>
      <Footer>
        <ButtonOption 
          title="cancelar" 
          color="#b32b2b"
          onPress={() => navigator.dispatch(StackActions.popToTop())}
        />
        <ButtonOption title="salvar" color="#2d9450"/>
      </Footer>
    </Container>
  );
}