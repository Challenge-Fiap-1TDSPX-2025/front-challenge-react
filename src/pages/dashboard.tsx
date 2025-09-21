import { useState } from "react";
import Sidebar from "../components/side-bar";
//import TicketList from "../components/TicketList";
//import TicketDetailPanel from "../components/TicketDetailPanel";
//import ModalConfirmDelete from "../components/ModalConfirmDelete";

export function Dashboard() {
   
    const tickets = [
        {
            id: 1,
            title: "Como faço para acessar minha consulta?",
            description:
                "Estou tentando entrar na minha consulta mas não consigo acessar o sistema. Poderiam me ajudar?",
            status: "andamento",
            date: "15/05/2023 10:45",
        },
        {
            id: 2,
            title: "Problema com login no aplicativo",
            description:
                "Não consigo fazer login no aplicativo móvel. A senha está correta, mas o sistema não reconhece meu usuário.",
            status: "abertos",
            date: "16/05/2023 14:30",
        },
        {
            id: 3,
            title: "Não recebi o link da minha consulta.",
            description:
                "Olá, gostaria de saber se o link da minha consulta já foi enviado. Não recebi nada até agora. Tem como verificar?",
            status: "resolvidos",
            date: "14/05/2023 09:15",
        },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto relative">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Tickets</h1>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold">
                        Novo Ticket
                    </button>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <select className="p-2 border rounded-md w-48">
                        <option value="">Data de criação</option>
                        <option value="hoje">Hoje</option>
                        <option value="semana">Esta Semana</option>
                        <option value="mes">Este Mês</option>
                    </select>
                    <select className="p-2 border rounded-md w-48">
                        <option value="">Tipo do problema</option>
                        <option value="login">Login</option>
                        <option value="pagamento">Pagamento</option>
                        <option value="deposito">Depósito</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Buscar ticket..."
                        className="p-2 border rounded-md flex-1 min-w-[200px]"
                    />
                </div>

                {/* Status Tabs */}
                <div className="flex gap-2 border-b mb-6">
                    {["todos", "abertos", "andamento", "resolvidos"].map((status) => (
                        <button
                            key={status}
                            className={`px-4 py-2 font-medium ${status === "todos"
                                    ? "text-indigo-600 border-b-2 border-indigo-600"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            {status === "todos"
                                ? "Todos os tickets"
                                : status === "andamento"
                                    ? "Em andamento"
                                    : status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>

            </main>




        </div>
    );
}
