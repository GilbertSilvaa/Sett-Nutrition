import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stack-routes';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={ StackRoutes }/>
    </Drawer.Navigator>
  );
}