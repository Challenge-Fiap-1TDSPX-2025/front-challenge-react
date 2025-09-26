export type TicketStatus = 'aberto' | 'andamento' | 'resolvido';

export type ProblemType =
  | 'agendamento-consulta'
  | 'duvidas-medicamentos'
  | 'resultados-exames'
  | 'sintomas-mal-estar'
  | 'outro';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  data: string;
  problemType: ProblemType;
  arquivos: File[];
}

export interface StoredTicket extends Omit<Ticket, 'arquivos'> {
  arquivos: string[];
}