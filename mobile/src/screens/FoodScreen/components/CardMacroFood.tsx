import styled from 'styled-components/native';

interface CardMacroFoodProps {
  name: string;
  amount: number;
  typeMacro: 'proteins' | 'carbohydrates' | 'fats';
}

const schemaColor = {
  'proteins': {
    primary: '#154B2B',
    secundary: '#64FFAB',
  },
  'carbohydrates': {
    primary: '#70591D',
    secundary: '#FDFF8E',
  },
  'fats': {
    primary: '#451414',
    secundary: '#FF9B9B',
  }
}

export function CardMacroFood({ name, amount, typeMacro }: CardMacroFoodProps) {

  return (
    <Container 
      style={{ 
        backgroundColor: schemaColor[typeMacro].secundary,
        borderColor: schemaColor[typeMacro].primary
      }}
    >
      <Spacing>
        <Text style={{ color: schemaColor[typeMacro].primary }}>{ name }</Text>
        <Text style={{ color: schemaColor[typeMacro].primary }}>{ amount }g</Text>
      </Spacing>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 68px;
  margin: 8px 0;
  border-radius: 8px;
  padding: 16px;
  border: 2px solid;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const Spacing = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;