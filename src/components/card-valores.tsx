import React from 'react';

import type { CardValorProps } from '../types/cards-integrantes';

export function CardValor({ iconSrc, iconAlt, title, description }: CardValorProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      
      <div className="bg-blue-100 p-4 rounded-full mb-5">
        <img src={iconSrc} alt={iconAlt} className="h-10 w-10" />
      </div>
      
      
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h2>
      
    
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
    </div>
  );
}