import { ButtonProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button as ButtonComponent, Title } from './styles';

interface ButtonComponentProps extends ButtonProps {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({ title, disabled, isLoading, ...rest }: ButtonComponentProps) {
  return (
    <ButtonComponent 
      activeOpacity={0.75} 
      style={{opacity: disabled ? .7 : 1}}
      {...rest}
    >
      <Title>
        {isLoading ? 
          <FontAwesome
            name="spinner"
            size={20}
          /> 
          : 
          title
        }
      </Title>
    </ButtonComponent>
  );
}