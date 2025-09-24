import React from 'react';
import { Link } from 'react-router-dom';

type DashboardLinkButtonProps = {
  to: string;
  title: string;
  description: string;
};
export function ButtonPaciente({ to, title, description }: DashboardLinkButtonProps) {
  return (
    <Link 
      to={to} 
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="font-normal text-gray-600">{description}</p>
    </Link>
  );
}