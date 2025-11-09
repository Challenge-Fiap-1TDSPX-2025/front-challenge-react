
import React from 'react';
import type { FormInputProps } from '../types/form-input';

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({
    label,
    id,
    name,
    type = 'text',
    required = false,
    colSpan = '',
    maxLength,
    error,
    ...restProps
  }, ref) => {
  
  const isError = !!error;

  return (
    <div className={`campo-formulario ${colSpan}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        ref={ref} 
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
          ${isError 
            ? 'border-red-500 ring-red-500' 
            : 'border-gray-300 focus:ring-indigo-500'}
        `}
        required={required}
        maxLength={maxLength}
        {...restProps} 
      />
    </div>
  );
});