import { Ticket } from "../components/ticket"; // 👈 aqui sim importa
import type{ TicketProps } from "../types/ticket";

interface TicketListProps {
  tickets: TicketProps[];
}

export function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} /> 
      ))}
    </div>
  );
}
