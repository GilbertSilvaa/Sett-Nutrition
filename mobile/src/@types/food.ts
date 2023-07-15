export interface Food {
  _id: string;
  name: string;
  image?: string;
  calories: number;
  carbohydrates: number;
  proteins: number;
  fats: number;
  portionInGrams: number;
  isAccepted: boolean;
}