import { useContext } from 'react';
import { AuthContext, AuthContextDataProps } from '../contexts/auth-context';

export function useAuth(): AuthContextDataProps {
  return useContext(AuthContext);
}