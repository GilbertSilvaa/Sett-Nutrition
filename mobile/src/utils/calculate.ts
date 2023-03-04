
interface IBmr {
  activityLevel: number;
  weight: number;
  height: number;
  age: number;
  gender: number;
}

export function bmrCalculate({ activityLevel, age, height, weight, gender }: IBmr) {
  if(gender == 1)
    return (activityLevel * (66 + ((13.7 * weight) + (5 * height) - (6.8 * age))));
  else 
    return (activityLevel * (655 + ((9.6 * weight) + (1.8 * height) - (4.7 * age))));
}