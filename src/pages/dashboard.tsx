import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/side-bar";
import { Ticket } from "../components/ticket";
import { getTickets, updateTicketStatus, addMessageToTicket } from "../services/ticket-services";
import type { StoredTicket, TicketStatus, TicketFilter, ProblemType, Message } from "../types/ticket";
import { PainelLateral } from "../components/painel-lateral";
import { TicketConversation } from "../components/conversa-ticket";
import { NewMessageForm } from "../components/form-nova-mensagem";

export function Dashboard() {
  const [allTickets, setAllTickets] = useState<StoredTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<StoredTicket | null>(null);
  const [statusFilter, setStatusFilter] = useState<TicketFilter>("todos");
  const [problemTypeFilter, setProblemTypeFilter] = useState<ProblemType | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("todos");

  useEffect(() => {
    setAllTickets(getTickets());
  }, []);

  const filteredTickets = useMemo(() => {
    return allTickets
      .filter(ticket => statusFilter === "todos" ? true : ticket.status === statusFilter)
      .filter(ticket => problemTypeFilter === "todos" ? true : ticket.problemType === problemTypeFilter)
      .filter(ticket => {
        const query = searchQuery.toLowerCase();
        return ticket.title.toLowerCase().includes(query) || ticket.messages.some(msg => msg.text.toLowerCase().includes(query));
      })
      .filter(ticket => {
        if (dateFilter === "todos") return true;
        const ticketDate = new Date(ticket.data);
        const today = new Date();
        if (dateFilter === "hoje") return ticketDate.toDateString() === today.toDateString();
        if (dateFilter === "semana") {
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(today.getDate() - 7);
          return ticketDate >= oneWeekAgo;
        }
        if (dateFilter === "mes") {
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(today.getMonth() - 1);
          return ticketDate >= oneMonthAgo;
        }
        return true;
      })
      .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  }, [allTickets, statusFilter, problemTypeFilter, searchQuery, dateFilter]);

  const handleUpdateStatus = (ticketId: number, newStatus: TicketStatus) => {
    updateTicketStatus(ticketId, newStatus);
    const updatedTickets = getTickets();
    setAllTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === ticketId) || null);
  };
  
  const handleNewMessage = (ticketId: number, messageText: string) => {
    const newMessage: Message = {
      author: 'atendente',
      text: messageText,
      timestamp: new Date().toISOString(),
    };
    addMessageToTicket(ticketId, newMessage);
    const updatedTickets = getTickets();
    setAllTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === ticketId) || null);
  };

  const problemTypeLabels: Record<ProblemType, string> = {
    'agendamento-consulta': 'Agendamento de consulta',
    'duvidas-medicamentos': 'Dúvidas sobre medicamentos',
    'resultados-exames': 'Resultados de exames',
    'sintomas-mal-estar': 'Relatar sintomas / mal-estar',
    'outro': 'Outro',
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tickets</h1>
        
        
        <div className="space-y-4">
          {filteredTickets.map((ticket) => (
            <div key={ticket.id} onClick={() => setSelectedTicket(ticket)} className="cursor-pointer">
              <Ticket ticket={ticket} onDelete={() => { alert('Apenas pacientes podem excluir tickets.'); }} />
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
                  <p className="text-gray-700">{problemTypeLabels[selectedTicket.problemType]}</p>
                </div>
                <div>
                  <label htmlFor="status-update" className="block text-sm font-semibold text-gray-500 mb-1">Status</label>
                  <select
                    id="status-update"
                    defaultValue={selectedTicket.status}
                    onChange={(e) => handleUpdateStatus(selectedTicket.id, e.target.value as TicketStatus)}
                    className="p-2 border rounded-md w-full"
                  >
                    <option value="aberto">Aberto</option>
                    <option value="andamento">Em Andamento</option>
                    <option value="resolvido">Resolvido</option>
                  </select>
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
      </main>
    </div>
  );
}