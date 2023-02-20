import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Login } from '../screens/Login';
import { useAuth } from '../hooks/use-auth';

import StackRoutes from './stack-routes';
import { Loading } from '../components/Loading';

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { user, isUserLoading } = useAuth();

  if(isUserLoading) 
    return <Loading/>;

  return (
    <>
      {!user.id ? 
        <Login/>
        :
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#257BE2',
              paddingHorizontal: 8
            },
            drawerActiveBackgroundColor: '#ffffff33',
            drawerActiveTintColor: '#FFF',
            drawerInactiveTintColor: '#FFF',
            drawerItemStyle: {
              padding: 12
            }
          }}
        >
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
              },
              drawerIcon: () => (
                <Ionicons
                  name="home-outline"
                  size={20}
                  color="#FFF"
                />
              )
            }}
          />
        </Drawer.Navigator>
      }
    </>
  );
}