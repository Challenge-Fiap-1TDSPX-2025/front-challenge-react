import React, { useState, useEffect } from 'react';
import { getTickets, deleteTicket } from '../services/ticket-services'; // 👈 1. Importa a função deleteTicket
import type { StoredTicket } from '../types/ticket';
import { Ticket } from './ticket';

export function TicketList() {
  const [tickets, setTickets] = useState<StoredTicket[]>([]);

  useEffect(() => {
    setTickets(getTickets().reverse());
  }, []);

  // 👇 2. FUNÇÃO PARA LIDAR COM A EXCLUSÃO 👇
  const handleDeleteTicket = (ticketId: number) => {
    // Pede confirmação ao usuário antes de excluir
    if (window.confirm(`Tem certeza que deseja excluir o Ticket#${ticketId}?`)) {
      // Exclui do localStorage
      deleteTicket(ticketId);
      // Atualiza a lista na tela, removendo o ticket excluído do estado
      setTickets(currentTickets => currentTickets.filter(ticket => ticket.id !== ticketId));
    }
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
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} onDelete={handleDeleteTicket} />
      ))}
    </div>
  );
}