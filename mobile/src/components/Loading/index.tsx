import { Image } from 'react-native';
import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <Image source={require('../../assets/loading.gif')} />
    </Container>
  );
}