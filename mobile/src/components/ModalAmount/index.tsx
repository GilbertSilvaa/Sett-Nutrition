import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '../Input';
import { ButtonOption } from '../ButtonOption';
import { 
  Container, 
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader, 
  ModalTitle 
} from './styles';

interface AmountData {
  amount: string;
}

interface ModalAmountProps {
  closeModal: () => void;
  saveData: (data: number) => void;
}

export function ModalAmount({ 
  saveData, 
  closeModal
}: ModalAmountProps) {
  const { control, handleSubmit, reset } = useForm<AmountData>();
  
  function handleCloseModal() {
    Keyboard.dismiss();
    closeModal();
    reset();
  }

  function onSubmit(data: AmountData) {
    saveData(parseInt(data.amount));
    Keyboard.dismiss();
    reset();
  }

  return (
    <Container>
      <Modal>
        <ModalHeader>
          <Ionicons
            name="water"
            size={28}
            color="#FFF"
          />
          <ModalTitle>
            Quantidade
          </ModalTitle>
        </ModalHeader>

        <ModalBody>
          <Controller 
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input 
                unit="ml" 
                placeholder="500" 
                keyboardType="numeric" 
                textAlign="center"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="amount"
          />
        </ModalBody>
        
        <ModalFooter>
          <ButtonOption 
            color="#b32b2b" 
            title="cancelar" 
            onPress={handleCloseModal}
          />
          <ButtonOption 
            color="#2d9450" 
            title="salvar" 
            onPress={handleSubmit(onSubmit)}
          />
        </ModalFooter>
      </Modal>
    </Container>
  );
}