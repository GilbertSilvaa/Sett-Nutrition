import { Text, ButtonProps } from 'react-native';
import { Button } from './styles';

interface ButtonOptionProps extends ButtonProps {
  color: string,
  title: string;
}

export function ButtonOption({ color, title, ...rest }: ButtonOptionProps) {
  return (
    <Button 
      style={{ backgroundColor: color }} 
      activeOpacity={0.7}
      {...rest}
    >
      <Text 
        style={{ 
          color: '#FFF', 
          textTransform: 'uppercase', 
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {title}
      </Text>
    </Button>
  );
}