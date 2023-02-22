import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Label, SelectContainer } from './styles';

interface SelectProps {
  label?: string;
  options: {
    label: string;
    value: number | string;
  }[];
  onChange: (data: number | string) => void;
}

export function Select({ label ,options, onChange }: SelectProps) {
  const [selectedItem, setSelectedItem] = useState<number | string>('');

  function handleOnChange(option: typeof selectedItem) {
    setSelectedItem(option);
    onChange(option);
  }

  return (
    <Container>
      <Label>{ label }</Label>
      <SelectContainer>
        <Picker
          selectedValue={selectedItem}
          onValueChange={option => handleOnChange(option)}
          style={{
            backgroundColor: '#f1f1f1',
            fontSize: 16,
            borderRadius: 4,
            color: '#222',
          }}
        >
          { options.map(({ label, value }, index) => 
            <Picker.Item 
              key={index} 
              label={label} 
              value={value} 
            />
          )}
        </Picker>
      </SelectContainer>
    </Container>
  );
}