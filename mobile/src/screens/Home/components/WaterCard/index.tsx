import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';

interface WaterCardProps {
  id: string;
  amountWater: number;
  time: string;
  remove?: (id: string) => void;
}

export function WaterCard({ id, amountWater, time, remove }: WaterCardProps) {
  return (
    <Container>
      <View>
        <Text style={{ color: '#113560', fontSize: 17, fontWeight: '500' }}> 
          {amountWater} mls 
        </Text>
        <Text style={{ color: '#535353', marginTop: 4 }}>{time}</Text>
      </View>
      {remove &&
        <Ionicons
          name="remove-circle"
          size={28}
          color="#113560"
          onPress={() => remove(id)}
        />
      }
    </Container>
  );
}