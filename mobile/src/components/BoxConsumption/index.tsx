import { ReactNode } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, HeaderTitle, Body } from './styles';

interface BoxConsumptionProps {
  title: string;
  iconName: any;
  children: ReactNode;
  addCConsumption: () => void;
}

export function BoxConsumption({ 
  title, 
  children, 
  iconName, 
  addCConsumption 
}: BoxConsumptionProps) {
  
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Ionicons 
            name={iconName}
            size={28} 
            color="#FFF" 
          />
          <Text 
            style={{ 
              marginLeft: 24, 
              fontSize: 17, 
              fontWeight: 'bold', 
              color: '#FFF' 
            }}
          >
            { title }
          </Text>
        </HeaderTitle>

        <Ionicons
          name="add-circle"
          size={30}
          color="#FFF"
          onPress={addCConsumption}
        />
      </Header>
      <Body>
        { children }
      </Body>
    </Container>
  );
}