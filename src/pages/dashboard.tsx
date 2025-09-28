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

  const ticketCounts = useMemo(() => {
    const counts: Record<TicketFilter, number> = {
      todos: allTickets.length,
      aberto: 0,
      andamento: 0,
      resolvido: 0,
    };
    allTickets.forEach(ticket => {
      counts[ticket.status]++;
    });
    return counts;
  }, [allTickets]);

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="p-2 border rounded-md w-full bg-white">
            <option value="todos">Data de criação</option>
            <option value="hoje">Hoje</option>
            <option value="semana">Esta Semana</option>
            <option value="mes">Este Mês</option>
          </select>
          <select value={problemTypeFilter} onChange={(e) => setProblemTypeFilter(e.target.value as ProblemType | 'todos')} className="p-2 border rounded-md w-full bg-white">
            <option value="todos">Tipo do problema</option>
            {Object.entries(problemTypeLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Buscar ticket..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md w-full sm:col-span-2 lg:col-span-2 bg-white"
          />
        </div>

        <div className="flex flex-wrap gap-2 border-b mb-6">
          {(['todos', 'aberto', 'andamento', 'resolvido'] as TicketFilter[]).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-2 text-sm sm:text-base font-medium flex items-center gap-2 transition-colors rounded-t-md ${
                statusFilter === status
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${
                status === "aberto" ? "bg-red-500" :
                status === "andamento" ? "bg-yellow-500" :
                status === "resolvido" ? "bg-green-500" : "bg-gray-400"
              }`}></span>
              <span>
                {status === "todos" ? "Todos" : status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 rounded-full px-2 py-0.5">
                  {ticketCounts[status]}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div key={ticket.id} onClick={() => setSelectedTicket(ticket)} className="cursor-pointer">
                <Ticket ticket={ticket} onDelete={() => { alert('Apenas pacientes podem excluir tickets.'); }} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">Nenhum ticket encontrado com os filtros atuais.</p>
          )}
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
                    className="p-2 border rounded-md w-full bg-white"
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