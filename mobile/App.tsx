import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import { AuthContextProvider } from './src/contexts/auth-context';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar hidden/>
        <Routes/>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

