import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { userType } = useParams<{ userType: 'paciente' | 'atendente' }>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(`Login como ${userType} com o email: ${email}`);
    
    if (userType === 'paciente') {
      navigate('/paciente/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Login de {userType === 'paciente' ? 'Paciente' : 'Atendente'}
        </h1>
        <p className="text-center text-gray-500 mb-6">Acesse sua conta para continuar.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-gray-500 hover:text-gray-800 hover:underline">
            Voltar para a seleção de perfil
          </Link>
        </div>
      </div>
    </div>
  );
}