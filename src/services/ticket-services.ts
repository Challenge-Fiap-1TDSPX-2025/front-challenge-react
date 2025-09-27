// src/services/ticketService.ts

import type { Ticket, StoredTicket, Message, TicketStatus } from '../types/ticket';

const TICKETS_KEY = 'healthsupport_tickets';

export const getTickets = (): StoredTicket[] => {
  const ticketsJson = localStorage.getItem(TICKETS_KEY);
  if (ticketsJson) {
    return JSON.parse(ticketsJson);
  }
  return [];
};

export const saveTicket = (newTicketData: Omit<Ticket, 'id' | 'data' | 'status' | 'messages'> & { description: string }) => {
  const tickets: StoredTicket[] = getTickets();
  
  const firstMessage: Message = {
    author: 'paciente',
    text: newTicketData.description,
    timestamp: new Date().toISOString(),
  };

  const ticketToStore: StoredTicket = {
    id: Date.now(),
    data: new Date().toISOString(),
    status: 'aberto',
    title: newTicketData.title,
    problemType: newTicketData.problemType,
    messages: [firstMessage], // A descrição vira a primeira mensagem
    arquivos: newTicketData.arquivos.map(file => file.name), 
  };

  tickets.push(ticketToStore);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};

// 👇 NOVA FUNÇÃO PARA ADICIONAR MENSAGENS 👇
export const addMessageToTicket = (ticketId: number, message: Message) => {
  const tickets = getTickets();
  const ticketIndex = tickets.findIndex(t => t.id === ticketId);

  if (ticketIndex !== -1) {
    tickets[ticketIndex].messages.push(message);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
  }
};

export const deleteTicket = (ticketId: number) => {
  let tickets: StoredTicket[] = getTickets();
  tickets = tickets.filter(ticket => ticket.id !== ticketId);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};
export const updateTicketStatus = (ticketId: number, newStatus: TicketStatus) => {
  const tickets = getTickets();
  const ticketIndex = tickets.findIndex(ticket => ticket.id === ticketId);

  if (ticketIndex !== -1) {
    tickets[ticketIndex].status = newStatus;
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
  }
};