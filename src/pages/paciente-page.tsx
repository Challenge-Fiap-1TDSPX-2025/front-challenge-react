import { Link } from "react-router-dom";
import { ButtonPaciente } from "../components/button-paciente";

export function PacienteDashboard() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100 p-4">
      <div className="w-full max-w-3xl">
        
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">
            Painel do Paciente
          </h1>
          <p className="text-lg text-slate-500 mt-2">
            O que você gostaria de fazer?
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ButtonPaciente
            to="/paciente/tickets"
            title="Ver Meus Tickets"
            description="Acompanhe o status e o histórico dos seus atendimentos."
          />
          <ButtonPaciente
            to="/paciente/tickets/novo"
            title="Criar Novo Ticket"
            description="Inicie um novo atendimento para resolver suas dúvidas."
          />
        </div>


        <div className="mt-12 text-center">
          <Link 
            to="/login"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Voltar
          </Link>
        </div>

      </div>
    </div>
  );
}