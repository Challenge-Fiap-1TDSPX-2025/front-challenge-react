import React from 'react';

type CardPerguntasProps = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  id: number;
};

export function CardPerguntas({ question, answer, isOpen, onClick, id }: CardPerguntasProps) {
  return (
    <div className="border border-blue-400 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left p-4 flex items-center space-x-4 cursor-pointer"
      >
        <span className="text-blue-600 font-bold text-xl">{id}.</span>
        <h3 className="flex-1 font-semibold text-gray-800">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div 
        className={`
          overflow-hidden transition-all duration-700 ease-in-out // Transição mais lenta (700ms)
          ${isOpen ? 'max-h-[500px]' : 'max-h-0'} // Max-height ajustado para mais largo
        `}
      >
        <div className="px-12 pb-4 text-slate-700">
          {answer}
        </div>
      </div>
    </div>
  );
}