export type TicketStatus = 'aberto' | 'andamento' | 'resolvido';

export type TicketFilter = TicketStatus | 'todos';

export type ProblemType =
  | 'agendamento-nova-consulta' 
  | 'cancelamento-reagendamento' 
  | 'duvidas-medicamentos'
  | 'resultados-exames'
  | 'outro'
  | 'problema-tecnico' 
  | 'solicitacao-documento' 
  | 'reclamacao-atendimento' 
  | 'duvida-pagamento' 
  | 'atualizacao-dados' 
  | 'historico-medico';

export interface Message {
  author: 'paciente' | 'atendente';
  text: string;
  timestamp: string;
}

export interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  data: string; 
  problemType: ProblemType;
  messages: Message[]; 
  arquivos: File[];
  idPaciente: number;
}

export interface StoredTicket extends Omit<Ticket, 'arquivos' | 'messages'> {
  arquivos: string[];
  messages: Message[];
}

export interface CreateTicketPayload {
  nomeConversa: string;
  conteudoConversa: string; 
  idPaciente: number; 
  idTipoProblema: number;
}