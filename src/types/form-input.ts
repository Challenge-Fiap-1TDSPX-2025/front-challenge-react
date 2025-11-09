
import type { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'; 
import type { CadastroFormData } from './cadastro-form'; 

export type RhfError = FieldError | Merge<FieldError, FieldErrorsImpl<CadastroFormData>> | undefined;

export interface FormInputProps {
    label: string;
    id: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'number' | 'password' | 'date'; 
    
    value?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
    required?: boolean;
    colSpan?: string;
    maxLength?: number;
    
    error?: RhfError; 
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    ref?: React.Ref<HTMLInputElement>;
}