import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Container, DateContainer, Text, Button, ButtonMenu } from './styles';

import { formatDate } from './utils/format-date';
import { Panel } from '../../components/Panel';

export function Home() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());

  const nextDay = () => setDate(state => new Date(state.setDate(state.getDate() + 1)));
  const prevDay = () => setDate(state => new Date(state.setDate(state.getDate() - 1)));

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
  ]
  
  return (
    <Container>
      <ButtonMenu 
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        activeOpacity={0.7}
      >
        <Text>
          <Ionicons
            name="menu"
            size={36}
            color="#113560"
          />
        </Text>
      </ButtonMenu>

      <DateContainer>
        <Button
          onPress={prevDay}
          activeOpacity={0.7}
        >
          <Text>
            <Ionicons
              name="arrow-back"
              size={28}
              color="#257BE2"
            />
          </Text>
        </Button>
        <Text>{ formatDate(date) }</Text>
        <Button
          onPress={nextDay}
          activeOpacity={0.7}
          disabled={date.toDateString() == new Date().toDateString()}
        >
          <Text>
            <Ionicons
              name="arrow-forward"
              size={28}
              color="#257BE2"
            />
          </Text>
        </Button>
      </DateContainer>

      <Panel 
        macrosAmounts={amountMacrosExample}
      />
    </Container>
  );
}