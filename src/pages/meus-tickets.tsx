import { Link } from 'react-router-dom';
import { TicketList } from '../components/ticket-list';

export function MeusTickets() {
  return (
    <div className="bg-sky-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">Meus Tickets</h1>
          <p className="text-lg text-slate-500 mt-2">
            Acompanhe aqui o status dos seus chamados.
          </p>
        </div>

        {/* Renderizamos o TicketList. Ele cuidará de buscar
          e exibir os tickets ou a mensagem de "nenhum ticket".
        */}
        <TicketList />

        <div className="mt-10 text-center">
          <Link 
            to="/paciente/dashboard"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Voltar ao Painel
          </Link>
        </div>
        
      </div>
    </div>
  );
}