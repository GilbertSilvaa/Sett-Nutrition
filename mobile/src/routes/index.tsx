import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItem,
  DrawerContentComponentProps,
  DrawerItemList
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Login } from '../screens/Login';
import { useAuth } from '../hooks/use-auth';

import StackRoutes from './stack-routes';
import { Loading } from '../components/Loading';
import { removeAcessToken } from '../utils/access-token';


function CustomDrawerContent(props: DrawerContentComponentProps) {

  const { setUser } = useAuth();

  function logout(){
    removeAcessToken();
    setUser({ id: '' });
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem 
        icon={() => 
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#FFF"
          />
        }
        label="Logout" 
        onPress={logout} 
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { user, isUserLoading } = useAuth();

  if(isUserLoading) 
    return <Loading/>;

  if(!user.id)
    return <Login/>;

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props}/>}
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
  );
}