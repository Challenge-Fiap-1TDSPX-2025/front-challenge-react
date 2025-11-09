
import { CardValor } from './card-valores';

import ticketIcon from '../assets/ticket.png';
import botIcon from '../assets/bot.png';
import groupIcon from '../assets/group.png';

// 3. Define os dados para cada card em um array
const valoresData = [
  { 
    iconSrc: ticketIcon, 
    iconAlt: 'Ícone de ticket', 
    title: 'Eficiência (Ticket)', 
    description: 'Otimizamos o fluxo de atendimento para reduzir o tempo de resposta e aumentar a produtividade.' 
  },
  { 
    iconSrc: botIcon, 
    iconAlt: 'Ícone de robô', 
    title: 'Inovação (Chat IA)', 
    description: 'Utilizamos inteligência artificial para automatizar respostas, liberando sua equipe para casos complexos.' 
  },
  { 
    iconSrc: groupIcon, 
    iconAlt: 'Ícone de grupo', 
    title: 'Humanização (Suporte)', 
    description: 'Mesmo com automação, garantimos que cada paciente receba atenção personalizada quando necessário.' 
  }
];

export function ValoresSection() {
  return (
    // Tradução da classe .secao-valores do seu CSS
    <section className="py-20 bg-sky-100">
      <div className="container mx-auto px-4">
        {/* Tradução da classe .titulo-secao */}
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Nossos Valores
        </h1>
        {/* Tradução da classe .grade-valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 5. Usa .map() para renderizar um card para cada item do array */}
          {valoresData.map((valor, index) => (
            <CardValor 
              key={index} 
              iconSrc={valor.iconSrc}
              iconAlt={valor.iconAlt}
              title={valor.title}
              description={valor.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}