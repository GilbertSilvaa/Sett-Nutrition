import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Meals } from '../screens/Meals';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
}