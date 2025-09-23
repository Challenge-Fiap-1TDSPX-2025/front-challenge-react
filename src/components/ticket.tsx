import type { TicketProps } from "../types/ticket";

export function Ticket({ id, title, description, status, date }: TicketProps) {
  return (
    <div className="bg-white shadow p-4 rounded-md border">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700">Ticket# {id}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <span
        className={`inline-block mt-2 px-2 py-1 text-xs rounded 
          ${status === "abertos"
            ? "bg-red-100 text-red-600"
            : status === "andamento"
            ? "bg-yellow-100 text-yellow-600"
            : status === "resolvidos"
            ? "bg-green-100 text-green-600"
            : "bg-gray-100 text-gray-600"}`}
      >
        {status}
      </span>
    </div>
  );
}
