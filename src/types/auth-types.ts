import type { ReactNode } from 'react';


export interface PacienteData {
    id: number;
    nome: string;
}

export interface AtendenteData {
    id: number;
    nome: string;
    login: string; // O email
}

export interface AuthContextType {
    paciente: PacienteData | null;
    atendente: AtendenteData | null;
    isLoggedIn: boolean;
    login: (userData: PacienteData | AtendenteData, userType: 'paciente' | 'atendente') => void;
    logout: () => void;
}


export interface AuthProviderProps {
    children: ReactNode;
}