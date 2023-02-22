import { InputProps } from '../../components/Input';

let inputProps : InputProps;

interface ISteps {
  question: string;
  unit?: typeof inputProps.unit;
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
    question: 'Informe sua meta de peso',
    unit: 'kg'
  },
]