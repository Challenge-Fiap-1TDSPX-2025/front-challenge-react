import React from 'react';
import type { FormInputProps } from '../types/form-input';

export function FormInput({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  colSpan = '',
  maxLength,
}: FormInputProps) {
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
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required={required}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
}