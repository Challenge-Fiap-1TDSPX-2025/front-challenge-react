import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../components/form-input';
import { Link } from 'react-router-dom';
import { cadastroSchema, type CadastroFormData } from '../schemas/cadastroSchemas';

export function CadastroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
  });

  const [apiError, setApiError] = useState('');

  const onSubmit = async (data: CadastroFormData) => {
    setApiError('');
    
    const dataToSend = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      cpf:data.cpf,
      rg:data.rg,
      dataNascimento:data.dataNascimento,
      endereco:data.endereco
    };
    
    const SERVER_URL = 'http://localhost:8080/paciente/cadastro';
  
    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `Erro ${response.status} ao cadastrar.` }));
        throw new Error(errorData.message || 'Erro: Ocorreu um problema no servidor.');
      }
  
      alert('Cadastro de Paciente realizado com sucesso!');
      reset();
    } catch (error) {
      let errorMessage = 'Ocorreu um erro inesperado na comunicação.';
      if (error instanceof Error) errorMessage = error.message;
      setApiError(errorMessage);
      console.error('Erro de API:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Crie sua Conta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormInput label="Nome Completo" id="nome" {...register('nome')} error={errors.nome} />
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}

          <FormInput label="CPF" id="cpf" {...register('cpf')} error={errors.cpf} />
          {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}

          <FormInput label="RG" id="rg" {...register('rg')} error={errors.rg} />
          {errors.rg && <p className="text-red-500 text-sm mt-1">{errors.rg.message}</p>}

          <FormInput
            label="Data de Nascimento"
            id="dataNascimento"
            type="date"
            {...register("dataNascimento")}
            error={errors.dataNascimento}
          />
          {errors.dataNascimento && (
            <p className="text-red-500 text-sm mt-1">{errors.dataNascimento.message}</p>
          )}

          <FormInput label="Endereço" id="endereco" {...register('endereco')} error={errors.endereco} />
          {errors.endereco && <p className="text-red-500 text-sm mt-1">{errors.endereco.message}</p>}

          <FormInput label="Email" id="email" type="email" {...register('email')} error={errors.email} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

          <FormInput label="Senha" id="senha" type="password" {...register('senha')} error={errors.senha} />
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}

          <FormInput label="Confirmar Senha" id="confirmarSenha" type="password" {...register('confirmarSenha')} error={errors.confirmarSenha} />
          {errors.confirmarSenha && <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha.message}</p>}

          {apiError && <div className="text-red-600 p-2 bg-red-100 rounded-md text-sm">{apiError}</div>}

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
