import { Link } from 'react-router-dom';
import type { ButtonProps } from '../types/button'; 

export function Button({ to, variant, children }: ButtonProps) {
  const colorClasses = {
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    teal: 'bg-teal-500 hover:bg-teal-600',
  };

  const baseClasses = 'block w-full text-center text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg';

  return (
    <Link
      to={to}
      className={`${baseClasses} ${colorClasses[variant]}`}
    >
      {children}
    </Link>
  );
}   