import { createContext, useState, useEffect, ReactNode } from 'react';
import { AsyncStorage } from 'react-native';

interface UserProps {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: (data: SignInDataProps) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInDataProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as UserProps); 
  const [isUserLoading, setIsUserLoading] = useState(false);

  async function signIn({ email, password }: SignInDataProps) {
    try {
      setIsUserLoading(true);
    }
    catch(error) {
      console.log('signIn Error: ', error);
      throw error;
    }
    finally {
      setIsUserLoading(false);
    }
  }

  async function signInWithToken() {
    try {
      setIsUserLoading(true);
      const acessToken = await AsyncStorage.getItem('acess_token');
    }
    catch(error) {
      console.log('signIn Error: ', error);
      throw error;
    }
    finally {
      setIsUserLoading(false);
    }
  }

  useEffect(() => {
    signInWithToken();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isUserLoading,
      signIn
    }}>
      { children }
    </AuthContext.Provider>
  );
}