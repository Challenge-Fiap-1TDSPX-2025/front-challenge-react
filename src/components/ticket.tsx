import type { StoredTicket, TicketStatus } from "../types/ticket";

type TicketComponentProps = {
  ticket: StoredTicket;
  onDelete: (id: number) => void;
};

export function Ticket({ ticket, onDelete }: TicketComponentProps) {
  const statusStyles: Record<TicketStatus, { bg: string; text: string; label: string }> = {
    aberto: { bg: 'bg-red-100', text: 'text-red-800', label: 'Aberto' },
    andamento: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Em Andamento' },
    resolvido: { bg: 'bg-green-100', text: 'text-green-800', label: 'Resolvido' },
  };

  const currentStatus = statusStyles[ticket.status];

  return (
    <div className="bg-white shadow p-4 rounded-md border relative">
      
      <button 
        onClick={() => onDelete(ticket.id)}
        className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-600 transition-colors"
        aria-label="Excluir ticket"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>

      <div className="flex justify-between items-center mb-2 pr-8">
        <span className="font-semibold text-gray-700">Ticket# {ticket.id}</span>
        <span className="text-sm text-gray-500">
          {new Date(ticket.data).toLocaleString('pt-BR')}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">{ticket.title}</h3>
      <p className="text-gray-600">{ticket.description}</p>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-gray-500 truncate pr-4" title={ticket.arquivos.join(', ')}>
          <span className="font-medium">Anexos:</span> {ticket.arquivos.join(', ') || 'Nenhum'}
        </div>
        
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${currentStatus.bg} ${currentStatus.text}`}>
          {currentStatus.label}
        </span>
      </div>
    </div>
  );
}