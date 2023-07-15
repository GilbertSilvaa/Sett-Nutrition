import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Meals } from '../screens/Meals';
import { MealScreen } from '../screens/MealScreen';
import { SearchFood } from '../screens/SeachFood';

export type RootStackParamList = {
  Home: undefined;
  Meals: undefined;
  Meal: { 
    idTypeMeal: string;
    nameMeal: string;
  },
  SearchFood: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={ Home }
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Meals" 
        component={ Meals }
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Meal"
        component={ MealScreen }
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SearchFood"
        component={ SearchFood }
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}