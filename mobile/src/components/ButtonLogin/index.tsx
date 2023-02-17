import { ButtonProps } from 'react-native';
import { Button, Title } from './styles';

interface ButtonLoginProps extends ButtonProps {
  title: string;
  disabled?: boolean;
}

export function ButtonLogin({ title, disabled, ...rest }: ButtonLoginProps) {
  return (
    <Button 
      activeOpacity={0.75} 
      style={{opacity: disabled ? .7 : 1}}
      {...rest}
    >
      <Title>{ title }</Title>
    </Button>
  );
}