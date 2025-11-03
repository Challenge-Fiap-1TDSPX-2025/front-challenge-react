import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from '../components/form-input'; // Seu componente reutilizado
import { Link } from 'react-router-dom';
import type { CadastroFormData } from '../types/cadastro-form';

export function CadastroPage() {
  const {
    register, // Função para registrar os inputs
    handleSubmit, // Wrapper para a função de submissão
    watch, // Para monitorar o valor de um campo (usado na confirmação de senha)
    formState: { errors, isSubmitting }, // Para erros e estado de envio
    reset // Para limpar o formulário
  } = useForm<CadastroFormData>();

  const [apiError, setApiError] = useState('');

  const onSubmit = async (data: CadastroFormData) => {
    setApiError(''); 
    
    const dataToSend = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      
    };
    
    const SERVER_URL = 'http://localhost:8080/paciente'; 
  
    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(dataToSend), 
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `Erro ${response.status} ao cadastrar.` }));
        throw new Error(errorData.message || 'Erro: Ocorreu um problema no servidor.');
      }
  
      // Sucesso:
      console.log('Cadastro de Paciente realizado com sucesso!');
      alert('Cadastro de Paciente realizado com sucesso! Redirecionando para login.');
      reset(); 
      // Ex: Se você usar `useNavigate` do react-router-dom: navigate('/login');
  
    } catch (error) {
        
        let errorMessage = 'Ocorreu um erro inesperado na comunicação.';
  
        // Verifica se o erro é uma instância de Error e usa sua mensagem
        if (error instanceof Error) {
          errorMessage = error.message;
        } 
        // Opcional: Se for um objeto com uma propriedade 'message' (comum em erros de API)
        else if (typeof error === 'object' && error !== null && 'message' in error) {
           errorMessage = (error as { message: string }).message;
        }
        // Opcional: Se for uma string
        else if (typeof error === 'string') {
            errorMessage = error;
        }
  
        setApiError(errorMessage);
        console.error('Erro de API:', error);
      }
  };
  // Observa o campo de senha para validação
  const senha = watch('senha', ''); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Crie sua Conta
        </h2>

        {/* 4. Conecte o formulário com o handleSubmit */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Input: Nome Completo */}
          <FormInput
            label="Nome Completo"
            id="nome"
            {...register('nome', { required: 'Nome é obrigatório' })} 
            error={errors.nome} 
            />
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}

        {/* Input: Email (CORRIGIDO) */}
        <FormInput
            label="Email"
            id="email"
            type="email"
            {...register('email', { // O nome 'email' já está aqui!
                required: 'Email é obrigatório',
                pattern: {
                value: /^\S+@\S+$/i,
                message: 'Formato de email inválido'
            }
        })}
        error={errors.email}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

        {/* Input: Senha (CORRIGIDO) */}
        <FormInput
            label="Senha"
            id="senha"
            type="text" // Use type='password' em produção
            {...register('senha', { // O nome 'senha' já está aqui!
            required: 'Senha é obrigatória',
            minLength: { value: 6, message: 'Mínimo de 6 caracteres' } 
            })}
            error={errors.senha}
            />
            {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}

          {/* Input: Confirmar Senha */}
          <FormInput
            label="Confirmar Senha"
            id="confirmarSenha"
            type="text"
            {...register('confirmarSenha', { 
              required: 'Confirmação é obrigatória',
              validate: (value) => value === senha || 'As senhas não conferem'
            })}
          />
          {errors.confirmarSenha && <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha.message}</p>}

          {/* Erro de API */}
          {apiError && <div className="text-red-600 p-2 bg-red-100 rounded-md text-sm">{apiError}</div>}

          {/* Botão de Submissão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-bold transition-colors ${
              isSubmitting 
                ? 'bg-indigo-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline font-semibold">
            Faça Login
          </Link>
        </p>
      </div>
    </div>
  );
}