import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../components/form-input'; 
import { loginSchema, type LoginFormData } from '../schemas/loginSchemas'


const API_BASE_URL = 'http://localhost:8080';

export function LoginPage() {
  const navigate = useNavigate();
  const { userType } = useParams<{ userType: 'paciente' | 'atendente' }>();

  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [apiError, setApiError] = useState('');


  const getLoginEndpoint = (type: string | undefined) => {
    if (type === 'paciente') {
    
      return `${API_BASE_URL}/login/paciente/autenticar`;
    }
    if (type === 'atendente') {

      return `${API_BASE_URL}/login/atendente/autenticar`;
    }
    return '';
  };

 
  const onSubmit = async (data: LoginFormData) => {
    setApiError('');
    const loginUrl = getLoginEndpoint(userType);

    if (!loginUrl) {
      setApiError('Erro: Tipo de usuário não reconhecido na URL.');
      return;
    }

    const loginData = {
      login: data.email,
      senha: data.senha,
    };

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const userData = await response.json();
        alert(`Login de ${userType?.toUpperCase()} bem-sucedido!`);
        
        // 3. Redirecionamento para o Dashboard correto
        const dashboardPath = userType === 'paciente' ? '/paciente/dashboard' : '/dashboard';
        navigate(dashboardPath);
        
      } else {
        // Trata erro de autenticação (401 Unauthorized, etc.)
        const errorData = await response.json().catch(() => ({ mensagem: 'Falha na autenticação. Verifique suas credenciais.' }));
        setApiError(errorData.mensagem || `Falha no login de ${userType}.`);
      }
    } catch (error) {
      // Trata erro de rede/servidor (servidor fora do ar)
      let errorMessage = 'Erro ao conectar com o servidor. Verifique a URL e a porta.';
      if (error instanceof Error) errorMessage = error.message;
      setApiError(errorMessage);
      console.error('Erro de comunicação:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Login de {userType === 'paciente' ? 'Paciente' : 'Atendente'}
        </h1>
        <p className="text-center text-gray-500 mb-6">Acesse sua conta para continuar.</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Campo Email */}
          <FormInput
            label="Email"
            id="email"
            type="email"
            {...register('email')}
            error={errors.email}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

          {/* Campo Senha */}
          <FormInput
            label="Senha"
            id="senha"
            type="password"
            {...register('senha')}
            error={errors.senha}
          />
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}

          {/* Erro de API */}
          {apiError && <div className="text-red-600 p-2 bg-red-100 rounded-md text-sm">{apiError}</div>}
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-2 px-4 rounded-lg transition-colors ${
                isSubmitting
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSubmitting ? 'Verificando...' : 'Entrar'}
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          {userType === 'paciente' && (
            <Link to="/cadastro" className="text-sm text-indigo-600 hover:underline">
              Ainda não tem conta? Cadastre-se
            </Link>
          )}
          {userType === 'atendente' && (
            <Link to="/login" className="text-sm text-gray-500 hover:text-gray-800 hover:underline">
              Voltar para a seleção de perfil
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}