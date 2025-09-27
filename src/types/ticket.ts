export type TicketStatus = 'aberto' | 'andamento' | 'resolvido';

export type TicketFilter = TicketStatus | 'todos';

export type ProblemType =
  | 'agendamento-consulta'
  | 'duvidas-medicamentos'
  | 'resultados-exames'
  | 'sintomas-mal-estar'
  | 'outro';

export interface Message {
  author: 'paciente' | 'atendente';
  text: string;
  timestamp: string;
}

export interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  data: string; // Data de criação
  problemType: ProblemType;
  messages: Message[]; 
  arquivos: File[];
}

export interface StoredTicket extends Omit<Ticket, 'arquivos' | 'messages'> {
  arquivos: string[];
  messages: Message[];
}