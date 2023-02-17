import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from '../screens/Login';

import StackRoutes from './stack-routes';

const Drawer = createDrawerNavigator();

export default function Routes() {

  const isAuthenticad = false;

  return (
    <>
      {isAuthenticad ? 
        <Drawer.Navigator>
          <Drawer.Screen 
            name="HomeDrawer" 
            component={ StackRoutes }
            options={{
              title: 'Home',
              headerTitle: '',
              headerShadowVisible: false,
              headerTintColor: '#113560',
              headerStyle: {
                backgroundColor: '#CCD1FF'
              }
            }}
          />
        </Drawer.Navigator>
        :
        <Login/>
      }
    </>
  );
}