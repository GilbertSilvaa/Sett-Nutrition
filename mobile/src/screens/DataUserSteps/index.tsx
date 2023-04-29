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
import { bmrCalculate } from '../../utils/calculate';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/use-auth';
import { getAccessToken } from '../../utils/access-token';

export interface InformationsData {
  age: number;
  weight: number;
  height: number;
  gender: number;
  activityLevel: number;
  waterGoal: number;
  weightGoal: number;
}

interface DataUserProps {
  userId: string;
}

export function DataUserSteps({ userId }: DataUserProps) {
  const [step, setStep] = useState(0);
  const [messageError, setMessageError] = useState('');

  const { control, handleSubmit } = useForm<InformationsData>();
  const { setUser } = useAuth();

  function nextStep() {
    if(step + 1 < informationSteps.length)
      setStep(prev => prev + 1);
  }

  function previousStep() { 
    if(step > 0)
      setStep(prev => prev - 1);
  }

  async function onSubmit(data: InformationsData) {
    setMessageError('');

    const dataValues = Object.values(data);

    if(dataValues.includes('' || undefined)) {
      setMessageError('Algum campo está vazio');
      return;
    }

    const imc = data.weight/(Math.pow(data.height, 2));
    const bmr = bmrCalculate({ 
      activityLevel: data.activityLevel,
      age: data.age,
      gender: data.gender,
      height: data.height,
      weight: data.weight
    });

    let addCaloriesGoal = 0;

    if(data.weight > data.weightGoal) addCaloriesGoal = -500;
    if(data.weight < data.weightGoal) addCaloriesGoal = 500;

    const accessToken = await getAccessToken();

    await Promise.all([
      api.put('/user/update-informations', {...data, imc, bmr}, {
        headers: {'x-access-token': accessToken}
      }),
      api.put('/user/update-goals', {calories: bmr + addCaloriesGoal, water: data.waterGoal}, {
        headers: {'x-access-token': accessToken}
      })
    ]);

    setUser({ id: userId });
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
                    onPress={step + 1 == informationSteps.length 
                      ? handleSubmit(onSubmit) 
                      : nextStep
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