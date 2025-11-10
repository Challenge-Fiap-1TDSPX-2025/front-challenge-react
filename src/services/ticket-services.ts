import type { CreateTicketPayload, StoredTicket, ProblemType} from '../types/ticket'; 

const API_BASE_URL_ROOT = import.meta.env.VITE_API_BASE_URL || 'https://health-support-java.onrender.com';

const API_BASE_URL = `${API_BASE_URL_ROOT}/tickets/novo`; 
const API_BASE_URL_TICKETS = `${API_BASE_URL_ROOT}/tickets`;

interface RawMessageData {
  author: string;
  text: string;
  timestamp: string;
}

interface RawTicketData {
  id: number;
  title: string;
  status: string;
  data: string;
  idTipoProblema: number;
  idPaciente: number;
  messages: RawMessageData[];
  arquivos: string[];
}

export const saveTicket = async (newTicketData: CreateTicketPayload) => {

  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTicketData), 
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'Erro desconhecido na API' }));
    
    throw new Error(errorBody.message || `Falha HTTP: ${response.status} ${response.statusText}`);
  }

  const isNoContent = response.status === 204 || response.headers.get('content-length') === '0';

    if (isNoContent) {
        return {}; // Retorna um objeto vazio em vez de tentar ler JSON
    }


  return response.json(); 
};


const mapIdToProblemType = (id: number): ProblemType => {
  if (id === 1) return 'agendamento-nova-consulta'; 
  if (id === 2) return 'cancelamento-reagendamento'; 
  if (id === 3) return 'duvidas-medicamentos';
  if (id === 4) return 'resultados-exames';
  if (id === 5) return 'problema-tecnico';
  if (id === 6) return 'solicitacao-documento';
  if (id === 7) return 'reclamacao-atendimento';
  if (id === 8) return 'duvida-pagamento';
  if (id === 9) return 'atualizacao-dados';
  if (id === 10) return 'historico-medico';
  return 'outro'; 
};



export const fetchAllTickets = async (): Promise<StoredTicket[]> => {
  const response = await fetch(API_BASE_URL_TICKETS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 204) {
      return [];
  }
  
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ mensagem: 'Erro desconhecido na API ao buscar todos os tickets' }));
    throw new Error(errorBody.mensagem || `Falha HTTP: ${response.status} ${response.statusText}`);
  }

  const data: RawTicketData[] = await response.json();
  
  return data.map(item => {
    const normalizedStatus = item.status
      .toLowerCase()
      .replace('em ', '') 
      .trim() as StoredTicket['status']; 
      
    return {
      id: item.id,
      title: item.title,
      status: normalizedStatus, 
      data: new Date(item.data).toISOString(),
      problemType: mapIdToProblemType(item.idTipoProblema), 
      idPaciente: item.idPaciente,
      messages: item.messages.map((msg) => ({
        author: msg.author as 'paciente' | 'atendente',
        text: msg.text,
        timestamp: msg.timestamp,
      })),
      arquivos: item.arquivos,
    };
  }); 
};



export const fetchTicketsByPatient = async (idPaciente: number): Promise<StoredTicket[]> => {
  const response = await fetch(`${API_BASE_URL_TICKETS}/paciente/${idPaciente}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 204) {
      return [];
  }
  
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ mensagem: 'Erro desconhecido na API ao buscar tickets' }));
    throw new Error(errorBody.mensagem || `Falha HTTP: ${response.status} ${response.statusText}`);
  }

  const data: RawTicketData[] = await response.json();


  
  return data.map(item => {
    const normalizedStatus = item.status
      .toLowerCase()
      .replace('em ', '') 
      .trim() as StoredTicket['status']; 
      
    return {
      id: item.id,
      title: item.title,
      status: normalizedStatus, // Usa o status corrigido
      data: new Date(item.data).toISOString(),
      problemType: mapIdToProblemType(item.idTipoProblema), 
      idPaciente: idPaciente,
      messages: item.messages.map((msg) => ({
        author: msg.author as 'paciente' | 'atendente',
        text: msg.text,
        timestamp: msg.timestamp,
      })),
      arquivos: item.arquivos,
    };
  });
};



export const updateTicketStatus = async (idTicket: number, newStatus: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL_TICKETS}/${idTicket}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
  });

  if (!response.ok) {
      let errorMessage = `Falha ao atualizar status do ticket ${idTicket}.`;
      try {
          const errorBody = await response.json();
          errorMessage = errorBody.mensagem || errorMessage;
      } catch {
          errorMessage = `${errorMessage} Status: ${response.status}`;
      }
      throw new Error(errorMessage);
  }
};


interface AttendantReplyPayload {
    idAtendente: number;
    conteudoConversa: string;
    novoStatus?: string; // Opcional
}


export const sendAttendantReply = async (idTicket: number, payload: AttendantReplyPayload): Promise<void> => {
  const response = await fetch(`${API_BASE_URL_TICKETS}/${idTicket}/resposta`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), 
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ mensagem: 'Erro desconhecido na API ao enviar resposta' }));
    
    throw new Error(errorBody.mensagem || `Falha HTTP: ${response.status} ${response.statusText}`);
  }
};



// Deletar
export const deleteTicketById = async (idTicket: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL_TICKETS}/${idTicket}`, {
      method: 'DELETE',
  });

  if (!response.ok) {
      let errorMessage = `Falha ao deletar ticket ${idTicket}.`;
      try {
          const errorBody = await response.json();
          errorMessage = errorBody.mensagem || errorMessage;
      } catch {
          errorMessage = `${errorMessage} Status: ${response.status}`;
      }
      throw new Error(errorMessage);
  }
};


