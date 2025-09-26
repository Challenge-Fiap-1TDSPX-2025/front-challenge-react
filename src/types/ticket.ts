
export type TicketStatus = 'aberto' | 'andamento' | 'resolvido';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;    
  data: string;       
  arquivos: File[]; // Usa o objeto File de verdade
}

export type TicketFilter = 'todos' | TicketStatus;

export interface StoredTicket extends Omit<Ticket, 'arquivos'> {
  arquivos: string[]; // Usa apenas os nomes dos arquivos (strings)
}

