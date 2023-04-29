import { createContext, useState, useEffect, ReactNode } from 'react';

import { api } from '../services/api';
import { getAccessToken } from '../utils/access-token';

interface UserProps {
  id: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  setUser: (data: UserProps) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as UserProps); 
  const [isUserLoading, setIsUserLoading] = useState(false);

  async function signWithToken() {
    setIsUserLoading(true);

    const accessToken = await getAccessToken();
    
    try {
      const { data } = await api.get('/user/goals', { 
        headers: {'x-access-token': accessToken} 
      });
      
      if(data) setUser({ id: data.userId }); 

    } 
    finally {
      setIsUserLoading(false);
    }
  }

  useEffect(() => {
    signWithToken();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isUserLoading,
      setUser
    }}>
      { children }
    </AuthContext.Provider>
  );
}