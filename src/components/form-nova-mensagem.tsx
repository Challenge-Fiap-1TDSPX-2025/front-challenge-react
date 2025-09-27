import React, { useState } from 'react';

type NewMessageFormProps = {
  onSubmit: (messageText: string) => void;
};

export function NewMessageForm({ onSubmit }: NewMessageFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 pt-4 border-t">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua resposta..."
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
        rows={3}
      />
      <button 
        type="submit"
        className="mt-2 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Enviar Resposta
      </button>
    </form>
  );
}