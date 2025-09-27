import React, { useState, useEffect } from 'react';
import { getTickets, deleteTicket, addMessageToTicket } from '../services/ticket-services';
import type { StoredTicket, Message, TicketStatus, ProblemType } from '../types/ticket';
import { Ticket } from './ticket';
import { PainelLateral } from './painel-lateral';
import { TicketConversation } from './conversa-ticket';
import { NewMessageForm } from './form-nova-mensagem';

export function TicketList() {
  const [tickets, setTickets] = useState<StoredTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<StoredTicket | null>(null);

  useEffect(() => {
    setTickets(getTickets().reverse());
  }, []);

  const handleNewMessage = (ticketId: number, messageText: string) => {
    const newMessage: Message = {
      author: 'paciente',
      text: messageText,
      timestamp: new Date().toISOString(),
    };
    addMessageToTicket(ticketId, newMessage);
    const updatedTickets = getTickets().reverse();
    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === ticketId) || null);
  };

  const handleDeleteTicket = (ticketId: number) => {
    if (window.confirm(`Tem certeza que deseja excluir o Ticket#${ticketId}?`)) {
      deleteTicket(ticketId);
      setTickets(currentTickets => currentTickets.filter(ticket => ticket.id !== ticketId));
    }
  };

  const problemTypeLabels: Record<ProblemType, string> = {
    'agendamento-consulta': 'Agendamento de consulta',
    'duvidas-medicamentos': 'Dúvidas sobre medicamentos',
    'resultados-exames': 'Resultados de exames',
    'sintomas-mal-estar': 'Relatar sintomas / mal-estar',
    'outro': 'Outro',
  };

  const statusLabels: Record<TicketStatus, string> = {
    aberto: 'Aberto',
    andamento: 'Em Andamento',
    resolvido: 'Resolvido',
  };

  if (tickets.length === 0) {
    return (
      <div className="text-center py-10 px-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-medium text-gray-700">Nenhum ticket encontrado.</h3>
        <p className="text-gray-500 mt-2">Você ainda não criou nenhum ticket de suporte.</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} onClick={() => setSelectedTicket(ticket)} className="cursor-pointer">
            <Ticket ticket={ticket} onDelete={handleDeleteTicket} />
          </div>
        ))}
      </div>

      {selectedTicket && (
        <PainelLateral 
          title={`Conversa - Ticket# ${selectedTicket.id}`}
          isOpen={!!selectedTicket} 
          onClose={() => setSelectedTicket(null)}
        >
          <div className="flex flex-col h-full">
            
            <div className="p-6 border-b space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-500">Título</p>
                <p className="text-lg text-gray-800 font-semibold">{selectedTicket.title}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Categoria</p>
                <p className="text-gray-700">{problemTypeLabels[selectedTicket.problemType]}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Status</p>
                <p className="text-gray-700">{statusLabels[selectedTicket.status]}</p>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
                <TicketConversation messages={selectedTicket.messages} />
            </div>
            <div className="p-4 border-t">
              <NewMessageForm 
                  onSubmit={(messageText) => handleNewMessage(selectedTicket.id, messageText)}
              />
            </div>
          </div>
        </PainelLateral>
      )}
    </>
  );
}