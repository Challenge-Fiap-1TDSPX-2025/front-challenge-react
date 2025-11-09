
import { createContext, useContext } from 'react'; 
import type { AuthContextType } from '../types/auth-types'; 

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context as AuthContextType;
};