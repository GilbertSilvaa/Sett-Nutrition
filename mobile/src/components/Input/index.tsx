import { TextInputProps } from 'react-native';
import { 
  Container, 
  Label, 
  Input as InputComponent, 
  InputContainer, 
  UnitContainer, 
  UnitText 
} from './styles';

export interface InputProps extends TextInputProps{
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  unit?: 'kg' | 'g' | 'ml' | 'cals' | 'm';
}

export function Input({ label, placeholder, isPassword, unit, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{ label }</Label>
      <InputContainer>
        <InputComponent 
          placeholder={placeholder} 
          secureTextEntry={isPassword}
          {...rest}
        />
        {unit &&
          <UnitContainer>
            <UnitText>{ unit }</UnitText>
          </UnitContainer>
        }
      </InputContainer>
    </Container>
  );
}