import { Picker, PickerProps } from '@react-native-picker/picker';
import { Container, Label, SelectContainer } from './styles';

interface SelectProps extends PickerProps {
  label?: string;
  options: {
    label: string;
    value: number | string;
  }[];
}

export function Select({ label ,options, ...rest }: SelectProps) {

  return (
    <Container>
      <Label>{ label }</Label>
      <SelectContainer>
        <Picker
          style={{
            backgroundColor: '#f1f1f1',
            fontSize: 16,
            borderRadius: 4,
            color: '#222',
          }}
          {...rest}
        >
          { options.map(({ label, value }, index) => 
            <Picker.Item 
            label={label} 
            value={value} 
            key={index} 
            />
          )}
        </Picker>
      </SelectContainer>
    </Container>
  );
}