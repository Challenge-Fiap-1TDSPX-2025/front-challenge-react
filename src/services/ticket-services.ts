// src/services/ticketService.ts

import type { Ticket, StoredTicket } from '../types/ticket';

const TICKETS_KEY = 'healthsupport_tickets';

export const getTickets = (): StoredTicket[] => {
  const ticketsJson = localStorage.getItem(TICKETS_KEY);
  if (ticketsJson) {
    return JSON.parse(ticketsJson);
  }
  return [];
};

export const saveTicket = (newTicketData: Omit<Ticket, 'id' | 'data' | 'status'>) => {
  const tickets: StoredTicket[] = getTickets();
  
  const ticketToStore: StoredTicket = {
    ...newTicketData,
    id: Date.now(),
    data: new Date().toISOString(),
    status: 'aberto',
    arquivos: newTicketData.arquivos.map(file => file.name), 
  };

  tickets.push(ticketToStore);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};
export const deleteTicket = (ticketId: number) => {
  let tickets: StoredTicket[] = getTickets();
  tickets = tickets.filter(ticket => ticket.id !== ticketId);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};