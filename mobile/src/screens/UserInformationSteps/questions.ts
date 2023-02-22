import { InputProps } from '../../components/Input';

let inputProps : InputProps;

interface ISteps {
  question: string;
  unit?: typeof inputProps.unit;
  isSelectList?: boolean,
  options?: {
    label: string;
    value: number | string;
  }[]
};

export const informationSteps : ISteps[] = [
  {
    question: 'Informe sua idade',
  },
  {
    question: 'Informe seu peso',
    unit: 'kg'
  },
  {
    question: 'Informe sua altura',
    unit: 'm'
  },
  {
    question: 'Selecione seu sexo',
    isSelectList: true,
    options: [
      {
        label: 'Masculino',
        value: 'M'
      },
      {
        label: 'Feminino',
        value: 'F'
      }
    ]
  },
  {
    question: 'Selecione seu nível de atividade fisica',
    isSelectList: true,
    options: [
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
    unit: 'ml'
  },
  {
    question: 'Informe sua meta de peso',
    unit: 'kg'
  }
]