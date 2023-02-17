import { TextInputProps } from 'react-native';
import { Container, Label, Input as InputComponent } from './styles';

interface InputProps extends TextInputProps{
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
}

export function Input({ label, placeholder, isPassword, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{ label }</Label>
      <InputComponent 
        placeholder={placeholder} 
        secureTextEntry={isPassword}
        {...rest}
      />
    </Container>
  );
}