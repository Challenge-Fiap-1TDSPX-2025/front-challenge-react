import type { Message } from '../types/ticket';

type TicketConversationProps = {
  messages: Message[];
};

export function TicketConversation({ messages }: TicketConversationProps) {
  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div key={index} className={`flex ${msg.author === 'atendente' ? 'justify-end' : 'justify-start'}`}>
          <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${
            msg.author === 'atendente' 
              ? 'bg-indigo-500 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}>
            <p className="text-sm">{msg.text}</p>
            <p className="text-xs opacity-75 mt-1 text-right">
              {new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}