import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ Home }/>
    </Stack.Navigator>
  );
}