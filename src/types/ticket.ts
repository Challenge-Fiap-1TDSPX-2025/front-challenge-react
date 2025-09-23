export interface TicketProps {
  id: number;
  title: string;
  description: string;
  status: "todos" | "abertos" | "andamento" | "resolvidos";
  date: string;
}
