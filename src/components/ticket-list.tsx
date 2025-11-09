import { useState, useEffect } from 'react';
import type { StoredTicket, Message, TicketStatus, ProblemType } from '../types/ticket';
import { Ticket } from './ticket';
import { PainelLateral } from './painel-lateral';
import { TicketConversation } from './conversa-ticket';
import { NewMessageForm } from './form-nova-mensagem';
import { useAuth } from './auth-context-core'; 
import { fetchTicketsByPatient, deleteTicketById } from '../services/ticket-services'; 

const addMessageToTicket = (ticketId: number, newMessage: Message) => {
    console.log(`[MOCK] Nova mensagem para o Ticket #${ticketId}: ${newMessage.text}`);
};

export function TicketList() {
  const { paciente, isLoggedIn } = useAuth(); // Obter paciente logado
  const [tickets, setTickets] = useState<StoredTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<StoredTicket | null>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    async function loadTickets() {
      // Verifica se há paciente logado
      if (!isLoggedIn || !paciente || paciente.id <= 0) {
        setIsLoading(false);
        setError("Usuário não autenticado ou ID do paciente não encontrado.");
        return;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        // Busca os tickets do paciente logado
        const fetchedTickets = await fetchTicketsByPatient(paciente.id);
        
        setTickets(fetchedTickets.reverse()); // Exibe o mais recente primeiro
        
      } catch (e) {
        console.error("Erro ao carregar tickets:", e);
        // Exibir erro do servidor/serviço
        const errorMessage = e instanceof Error ? e.message : "Falha ao carregar a lista de tickets do servidor.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadTickets();
  }, [isLoggedIn, paciente]); // Recarrega se o status de login mudar

  const handleNewMessage = (ticketId: number, messageText: string) => {
    const newMessage: Message = {
      author: 'paciente',
      text: messageText,
      timestamp: new Date().toISOString(),
    };
    
  
    addMessageToTicket(ticketId, newMessage); 
    
    
    setTickets(currentTickets => {
        const updatedTickets = currentTickets.map(t => 
            
            t.id === ticketId ? { ...t, messages: [...t.messages, newMessage] } : t
        );
        
        setSelectedTicket(updatedTickets.find(t => t.id === ticketId) || null);
        return updatedTickets;
    });
  };

  const handleDeleteTicket = async (ticketId: number) => { 
    if (window.confirm(`Tem certeza que deseja excluir o Ticket#${ticketId}? Esta ação é irreversível.`)) {
      try {
        await deleteTicketById(ticketId); 
        alert(`Ticket #${ticketId} excluído com sucesso.`);
        
        
        setTickets(currentTickets => currentTickets.filter(ticket => ticket.id !== ticketId));
        setSelectedTicket(null); // Fecha o painel lateral
        
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Falha desconhecida ao excluir o ticket.";
        alert(`Erro ao excluir o ticket: ${errorMessage}`);
        console.error('Erro ao deletar ticket:', e);
      }
    }
  };

  const problemTypeLabels: Record<ProblemType, string> = {
    'agendamento-nova-consulta': 'Agendamento/Reagendamento',
    'duvidas-medicamentos': 'Dúvidas sobre medicamentos',
    'resultados-exames': 'Resultados de exames',
    'cancelamento-reagendamento': 'Cancelamento/Reagendamento',
    'problema-tecnico': 'Problema técnico com login',
    'solicitacao-documento': 'Solicitação de documento', 
    'reclamacao-atendimento': 'Reclamação de atendimento', 
    'duvida-pagamento': 'Dúvida sobre convênio/pagamento', 
    'atualizacao-dados': 'Atualização de dados', 
    'historico-medico': 'Acesso à histórico médico', 
    'outro': 'Outro',
  };

  const statusLabels: Record<TicketStatus, string> = {
    aberto: 'Aberto',
    andamento: 'Em Andamento',
    resolvido: 'Resolvido',
  };

  // Tratamento de estados de carregamento e erro
  if (isLoading) {
    return (
      <div className="text-center py-10 px-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-medium text-gray-700">Carregando tickets...</h3>
        <p className="text-gray-500 mt-2">Buscando seus chamados no servidor.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 px-4 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-xl font-medium text-red-700">Erro ao carregar</h3>
        <p className="text-red-500 mt-2">{error}</p>
        <p className="text-red-500 mt-2">Verifique se o backend está rodando em `http://localhost:8080`.</p>
      </div>
    );
  }
  
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
                <p className="text-gray-700">{problemTypeLabels[selectedTicket.problemType as ProblemType]}</p>
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