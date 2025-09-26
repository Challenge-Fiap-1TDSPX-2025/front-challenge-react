import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { saveTicket } from '../services/ticket-services';
import { FormInput } from '../components/form-input';

export function NovoTicketPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachments(Array.from(event.target.files));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !description) {
      alert('Por favor, preencha o título e a descrição.');
      return;
    }

    saveTicket({ title, description, arquivos: attachments });
    
    alert('Ticket criado com sucesso!');
    navigate('/paciente/tickets');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Criar Novo Ticket</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <FormInput
            label="Título do Problema"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
            maxLength={100}
          />

          <div>
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Descreva o Problema em Detalhes
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
              placeholder="Descreva com o máximo de detalhes o que está acontecendo..."
            />
          </div>
          
          <div>
            <label htmlFor="attachments" className="block text-gray-700 text-sm font-bold mb-2">
              Anexos (JPG, PNG, PDF)
            </label>
            <input
              id="attachments"
              type="file"
              multiple
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .pdf"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
            <div className="mt-2 text-xs text-gray-500">
              {attachments.length > 0
                ? attachments.map(file => file.name).join(', ')
                : 'Nenhum arquivo selecionado'}
            </div>
          </div>

          
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/paciente/dashboard"
              className="text-gray-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Voltar
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            >
              Enviar Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}