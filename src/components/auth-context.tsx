import React, { useState, useCallback } from 'react'; 
// Importar os novos tipos e AuthContext
import type { PacienteData, AtendenteData, AuthProviderProps } from '../types/auth-types'; 
import { AuthContext } from '../components/auth-context-core';


// Provedor de Contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // Estado para o paciente logado
    const [paciente, setPaciente] = useState<PacienteData | null>(null);
    // NOVO: Estado para o atendente logado
    const [atendente, setAtendente] = useState<AtendenteData | null>(null);

    // Função de Login Unificada
    const login = useCallback((userData: PacienteData | AtendenteData, userType: 'paciente' | 'atendente') => {
        if (userType === 'paciente') {
            setPaciente(userData as PacienteData);
            setAtendente(null); // Garante que o outro é nulo
        } else if (userType === 'atendente') {
            setAtendente(userData as AtendenteData);
            setPaciente(null); // Garante que o outro é nulo
        }
    }, []); 

    // Função de Logout
    const logout = useCallback(() => {
        setPaciente(null);
        setAtendente(null);
    }, []); 

    // Está logado se houver dados em paciente OU atendente
    const isLoggedIn = !!paciente || !!atendente; 

    return (
        <AuthContext.Provider value={{ paciente, atendente, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};