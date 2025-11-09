import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveTicket } from '../services/ticket-services'; 
import { FormInput } from '../components/form-input';
import { useAuth } from '../components/auth-context-core'; 

export function NovoTicketPage() {
  const { paciente, isLoggedIn } = useAuth(); 
  
  // Estados para os campos do formulário
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  
  const [problemTypeId, setProblemTypeId] = useState<string>('1'); 
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const problemOptions = [
    { value: 1, label: 'Agendamento de nova consulta' }, 
    { value: 2, label: 'Cancelamento ou reagendamento' },
    { value: 3, label: 'Dúvidas sobre medicamentos/receita' },
    { value: 4, label: 'Informações de Resultados de exames' },
    { value: 5, label: 'Problema técnico com login' },
    { value: 6, label: 'Solicitação de declaração/atestado' },
    { value: 7, label: 'Reclamação de atendimento médico' },
    { value: 8, label: 'Dúvida sobre convênio/pagamento' },
    { value: 9, label: 'Atualização de dados cadastrais' },
    { value: 10, label: 'Acesso à histórico médico' },
    { value: 11, label: 'Outro' },
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setApiError('');

    
    if (!isLoggedIn || !paciente || paciente.id <= 0) {
        setApiError('Erro: Você precisa estar logado como paciente para criar um ticket.');
        return;
    }

    // Validação básica do frontend
    if (!title || !description) {
      setApiError('Por favor, preencha o título e a descrição.');
      return;
    }

    setIsSubmitting(true);

    try {
      await saveTicket({ 
        idPaciente: paciente.id,
        // Conversão para inteiro (number) antes de enviar para a API
        idTipoProblema: parseInt(problemTypeId, 10), 
        nomeConversa: title,             
        conteudoConversa: description,         
    });
        
        alert('Ticket criado com sucesso! Você será redirecionado.');
        navigate('/paciente/tickets'); // Redireciona para a lista de tickets após sucesso

    } catch (error) {
        // Exibe o erro retornado pelo service/API
        const errorMessage = error instanceof Error ? error.message : 'Falha desconhecida ao criar o ticket.';
        setApiError(errorMessage);
        console.error('Erro no envio do ticket:', error);

    } finally {
        setIsSubmitting(false);
    }
  };

  // Se não estiver logado, exibe uma mensagem ou redireciona
  if (!isLoggedIn) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-sky-50 p-4">
            <p className="text-xl text-red-600">Acesso negado. Por favor, <Link to="/login/paciente" className="underline">faça login</Link> como paciente.</p>
        </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Criar Novo Ticket</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* TÍTULO DO PROBLEMA (nomeConversa) */}
          <FormInput
            label="Título do Problema"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
            maxLength={100}
          />
          
          {/* TIPO DE PROBLEMA (id_tipo_problema) */}
          <div>
            <label htmlFor="problemType" className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de Problema
            </label>
            <select
              id="problemType"
              value={problemTypeId} // Usa o estado string do ID
              onChange={(e) => setProblemTypeId(e.target.value)} // Seta o ID como string
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {problemOptions.map(option => (
                // Value do option é o ID (convertido para string)
                <option key={option.value} value={String(option.value)}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* DESCRIÇÃO DO PROBLEMA (conteudoConversa) */}
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
              required
            />
          </div>
          
          {/* ANEXOS */}
           <div>
            <label htmlFor="attachments" className="block text-gray-700 text-sm font-bold mb-2">
              Anexos (JPG, PNG, PDF)
            </label>
            <input
              id="attachments"
              type="file"
              multiple
              onChange={(e) => setAttachments(Array.from(e.target.files || []))}
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

          {/* Mensagem de Erro da API */}
          {apiError && (
              <div className="text-red-600 p-3 bg-red-100 rounded-lg text-sm border border-red-300">
                  {apiError}
              </div>
          )}

          {/* Botões de Ação */}
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/paciente/dashboard"
              className="text-gray-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Voltar
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-indigo-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Ticket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}