

import type { CardIntegranteProps } from '../types/cards-integrantes';

import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

export function CardIntegrante({ 
  photoSrc, 
  photoAlt, 
  name, 
  rm, 
  turma, 
  linkedinUrl, 
  githubUrl 
}: CardIntegranteProps) {
  return (
    
    <div className="flex flex-col w-[273px] text-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
      
      
      <div className="mx-auto mb-4">
        <img 
          src={photoSrc} 
          alt={photoAlt} 
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-300" 
        />
      </div>
      
      
      <h3 className="text-xl font-bold text-gray-800 mb-1">
        {name}
      </h3>
      <p className="text-gray-500 text-sm">{rm}</p>
      <p className="text-gray-500 text-sm mb-4">{turma}</p>
      
      
      <div className="flex justify-center space-x-4">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={linkedinIcon} alt="LinkedIn" className="h-7 w-7" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
          <img src={githubIcon} alt="GitHub" className="h-7 w-7" />
        </a>
      </div>

    </div>
  );
}