import { InputProps } from '../../components/Input';
import { InformationsData } from '.';

let inputProps : InputProps;

interface ISteps {
  question: string;
  name: keyof InformationsData;
  unit?: typeof inputProps.unit;
  
  isSelectList?: boolean,
  options?: {
    label: string;
    value: number | string;
  }[],
};

export const informationSteps : ISteps[] = [
  {
    question: 'Informe sua idade',
    name: 'age',
  },
  {
    question: 'Informe seu peso',
    name: 'weight',
    unit: 'kg'
  },
  {
    question: 'Informe sua altura',
    name: 'height',
    unit: 'm'
  },
  {
    question: 'Selecione seu sexo',
    name: 'gender',
    isSelectList: true,
    options: [
      {
        label: 'Selecione',
        value: ''
      },
      {
        label: 'Masculino',
        value: '1'
      },
      {
        label: 'Feminino',
        value: '2'
      }
    ]
  },
  {
    question: 'Selecione seu nível de atividade fisica',
    name: 'activityLevel',
    isSelectList: true,
    options: [
      {
        label: 'Selecione',
        value: ''
      },
      {
        label: 'Sedentário',
        value: 1.2
      },
      {
        label: 'Levemente ativo',
        value: 1.375
      },
      {
        label: 'Moderadamente ativo',
        value: 1.55
      },
      {
        label: 'Altamente ativo',
        value: 1.725
      },
      {
        label: 'Extremamente ativo',
        value: 1.9
      }
    ]
  },
  {
    question: 'Informe sua meta de água',
    name: 'waterGoal',
    unit: 'ml'
  },
  {
    question: 'Informe sua meta de peso',
    name: 'weightGoal',
    unit: 'kg'
  }
]