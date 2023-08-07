import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface CardFoodSearchProps {
  id: string;
  name: string;
  image?: string;
  onPress: (id: string) => void;
}

export function CardFoodSearch({ id, image, name, onPress }: CardFoodSearchProps) {
  return (
    <Container activeOpacity={0.7} onPress={_ => onPress(id)}>
      <Image 
        source={{ uri: image}}/>
      <Text>{ name }</Text>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 95%;
  margin: 0 auto;
  height: 70px;
  background-color: #a2c1ff;
  border: 2px solid #257BE2;
  border-radius: 4px;
  margin-bottom: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.Image`
  width: 25%;
  height: 100%;
  border-radius: 4px;
`;

const Text = styled.Text`
  font-size: 17px;
  margin-left: 10%;
  color: #113560;
`;