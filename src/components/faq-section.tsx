import React, { useState } from 'react';
import { CardPerguntas } from './card-perguntas';
import { CtaSection } from './cta-section'; 

const faqData = [
  {
    id: 1,
    question: 'Como acessar as ferramentas de ticket ou chat IA?',
    answer: ( 
      <ul className="list-disc space-y-2 pl-5">
        <li>Faça login na sua conta HealthSupport</li>
        <li>No painel principal, você encontrará os ícones para "Gerenciador de Tickets"</li>
        <li>Clique no ícone da ferramenta que deseja acessar</li>
        <li>Para o Gerenciador de Tickets, você verá todos os tickets abertos e poderá criar novos</li>
        <li>Para o Chat IA, você poderá configurar respostas automáticas e monitorar interações</li>
      </ul>
    ),
  },
  {
    id: 2,
    question: 'Como fazer login?',
    answer: (
      <div className="space-y-3">
        <p>Para fazer login na plataforma HealthSupport:</p>
        <ul className="list-disc pl-5">
          <li>Insira seu e-mail e senha cadastrados</li>
          <li>Clique no botão "Entrar"</li>
        </ul>
        <p>Caso tenha esquecido sua senha, clique em "Esqueci minha senha" e siga as instruções enviadas ao seu e-mail.</p>
      </div>
    ),
  },
  {
    id: 3,
    question: 'Como visualizar os tickets criados?',
    answer: (
       <div className="space-y-3">
        <p>Para visualizar os tickets criados:</p>
        <ul className="list-disc pl-5">
          <li>Acesse o Gerenciador de Tickets no painel principal</li>
          <li>Na página inicial do gerenciador, você verá uma lista de todos os tickets</li>
          <li>Utilize os filtros disponíveis para organizar por: status, data, ou departamento</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    question: 'Como marcar uma teleconsulta?',
    answer: (
       <div className="space-y-3">
        <p>Para marcar uma teleconsulta:</p>
        <ul className="list-disc pl-5">
          <li>Acesse o módulo "Agenda" no menu lateral</li>
          <li>Clique no botão "Nova Consulta"</li>
          <li>E assim por diante...</li>
        </ul>
      </div>
    )
  }
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-12 bg-[#add2f7] min-h-[70vh]">
      <div className="container mx-auto px-5 flex flex-col items-center">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800">FAQ</h1>
          <p className="text-xl text-gray-600">Perguntas Frequentes</p>
        </div>

   
        <div className="w-full max-w-4xl">
          {faqData.map((item) => (
            <CardPerguntas
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id} 
              onClick={() => handleItemClick(item.id)} 
            />
          ))}
        </div>
        

      </div>
    </section>
  );
}