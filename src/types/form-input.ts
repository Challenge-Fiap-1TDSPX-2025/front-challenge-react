export interface FormInputProps {
    label: string;
    id: string;
    name: string;
    type?: 'text' | 'email' | 'tel' | 'number';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    colSpan?: string;
    maxLength?: number;
  }