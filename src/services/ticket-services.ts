
import type { Ticket } from '../types/ticket';

const TICKETS_KEY = 'healthsupport_tickets';

export const getTickets = (): Ticket[] => {
  const ticketsJson = localStorage.getItem(TICKETS_KEY);
  if (ticketsJson) {
    return JSON.parse(ticketsJson);
  }
  return [];
};

export const saveTicket = (newTicketData: Omit<Ticket, 'id' | 'data' | 'status'>) => {
  const tickets = getTickets();

  const newTicket: Ticket = {
    ...newTicketData,
    id: Date.now(), 
    dara: new Date().toISOString(),
    status: 'aberto', 
  };

  const ticketToStore = {
    ...newTicket,
    arquivos: newTicket.arquivos.map(file => file.name),
  };

  tickets.push(ticketToStore as any);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};