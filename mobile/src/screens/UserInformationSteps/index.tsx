import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Notice } from '../../components/Notice';
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

export interface InformationsData {
  age: number;
  weight: number;
  height: number;
  gender: number;
  activityLevel: number;
  waterGoal: number;
  weightGoal: number;
}

export function UserInformationSteps() {
  const [step, setStep] = useState(0);
  const [messageError, setMessageError] = useState('');

  const { control, handleSubmit } = useForm<InformationsData>();

  function nextStep() {
    if(step + 1 < informationSteps.length)
      setStep(prev => prev + 1);
  }

  function previousStep() { 
    if(step > 0)
      setStep(prev => prev - 1);
  }

  function onSubmit(data: InformationsData) {
    setMessageError('');

    const dataValues = Object.values(data);

    if(dataValues.includes('' || undefined)) {
      setMessageError('Algum campo está vazio');
      return;
    }

    console.log(data);
  }

  return (
    <Container>
      <Notice message={messageError} />
      <>
        {informationSteps.map((stepMap, index) => {
          if(index == step)
            return (
              <Modal key={index}>
                <ModalTitle>{stepMap.question}</ModalTitle>

                <ModalBody>
                  {stepMap.isSelectList ?
                    <Controller 
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Select
                          options={stepMap.options!}
                          onValueChange={onChange}
                          onBlur={onBlur}
                          selectedValue={value}
                        />
                      )}
                      name={stepMap.name}
                    /> 
                      :
                    <Controller 
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                          textAlign="center"
                          keyboardType="numeric"
                          placeholder="digite aqui"
                          unit={stepMap.unit}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value == undefined ? '' : String(value)}
                        />
                      )}
                      name={stepMap.name}
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
                  <Button 
                    activeOpacity={0.7} 
                    onPress={step + 1 == informationSteps.length ? 
                      handleSubmit(onSubmit) : nextStep
                    }
                  >
                    <Text>
                      {step + 1 == informationSteps.length ?
                        <Text>FINALIZAR</Text>
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
            );
        })}
      </>
    </Container>
  );
}