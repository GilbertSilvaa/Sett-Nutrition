import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';

interface WaterCardProps {
  amountWater: number;
  time: string;
}

export function WaterCard({ amountWater, time }: WaterCardProps) {
  return (
    <Container>
      <View>
        <Text style={{ color: '#113560', fontSize: 17, fontWeight: '500' }}> 
          {amountWater} mls 
        </Text>

        <Text style={{ color: '#535353', marginTop: 4 }}>{time}</Text>
      </View>
      <Ionicons
        name="remove-circle"
        size={28}
        color="#113560"
      />
    </Container>
  );
}