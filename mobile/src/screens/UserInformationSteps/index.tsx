import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { 
  Container, 
  Modal, 
  ModalTitle, 
  ModalBody, 
  ModalFooter, 
  Button, 
  Text 
} from './styles';

import { informationSteps } from './questions';

export function UserInformationSteps() {
  const [step, setStep] = useState(0);

  function nextStep() {
    if((step + 1) < informationSteps.length)
      setStep(prev => prev + 1); 
  }

  function previousStep() {
    if(step > 0)
      setStep(prev => prev - 1);
  }

  return (
    <Container>
      <Modal>
        <ModalTitle>{ informationSteps[step].question }</ModalTitle>
        <ModalBody>

          {informationSteps[step].isSelectList ?
            <Select 
              options={informationSteps[step].options!}
              onChange={() => {}}
            />
            :
            <Input 
              textAlign="center" 
              keyboardType="numeric" 
              placeholder="digite aqui"
              unit={informationSteps[step].unit}
            />
          }
  
        </ModalBody>

        <ModalFooter>
          {step == 0 ? 
            <Text></Text> 
            :  
            <Button activeOpacity={0.7} onPress={previousStep}>
              <Text>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#FFF"
                />
              </Text>
            </Button>
          }
          <Button activeOpacity={0.7} onPress={nextStep}>
            <Text>
              {(step + 1) == informationSteps.length ?
                'FINALIZAR'  
                :
                <Ionicons
                  name="arrow-forward"
                  size={24}
                  color="#FFF"
                />
              }
            </Text>
          </Button>
        </ModalFooter>
        
      </Modal>
    </Container>
  );
}