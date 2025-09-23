import React from 'react';

import { CardIntegrante } from './card-integrantes';

import gustavoPhoto from '../assets/gustavo.jpg';
import guilhermePhoto from '../assets/guilherme.jpg';
import anthonyPhoto from '../assets/anthony.jpg';

const integrantesData = [
  { 
    photoSrc: gustavoPhoto, 
    photoAlt: 'Foto do Gustavo', 
    name: 'Gustavo Araujo da Silva', 
    rm: 'RM: 566526', 
    turma: 'Turma: 1TDSPX-2025', 
    linkedinUrl: 'https://www.linkedin.com/in/gustavo-araujo-677aa12b1/', 
    githubUrl: 'https://github.com/gustavoDev02' 
  },
  { 
    photoSrc: guilhermePhoto, 
    photoAlt: 'Foto do Guilherme', 
    name: 'Guilherme Santos Fonseca', 
    rm: 'RM: 564232', 
    turma: 'Turma: 1TDSPX-2025', 
    linkedinUrl: 'https://www.linkedin.com/in/guilherme-fonseca-2b57b5358', 
    githubUrl: 'https://github.com/guifo2604' 
  },
  { 
    photoSrc: anthonyPhoto, 
    photoAlt: 'Foto do Anthony', 
    name: 'Anthony de Souza Henriques', 
    rm: 'RM: 566188', 
    turma: 'Turma: 1TDSPX-2025', 
    linkedinUrl: 'https://br.linkedin.com/in/anthony-henriques-69b256368', 
    githubUrl: 'https://github.com/Anthony566188' 
  },
];

export function IntegrantesSection() {
  return (
    // Tradução da classe .secao-integrantes do seu CSS
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col justify-items-center">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Integrantes
        </h1>
        {/* Tradução da classe .grade-integrantes */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* 5. Usa .map() para renderizar um card para cada integrante */}
          {integrantesData.map((integrante, index) => (
            <CardIntegrante 
              key={index} 
              {...integrante} // A sintaxe {...} passa todas as propriedades do objeto de uma vez
            />
          ))}
        </div>
      </div>
    </section>
  );
}