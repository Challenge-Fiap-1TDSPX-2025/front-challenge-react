import React from 'react';
import logo from '../assets/logo-challenge.png';
import { Button } from '../components/button';
import { Link } from 'react-router-dom'; 

export function EscolhaPerfil() { // Ou o nome que você deu à sua página
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-4">
      <div className="p-8 bg-white rounded-lg shadow-xl text-center w-full max-w-md">
        
        <img src={logo} alt="HealthSupport Logo" className="w-20 h-20 mx-auto mb-4" />

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Bem-vindo(a) ao HealthSupport
        </h1>
        <p className="text-gray-500 mb-8">
          Para continuar, selecione o seu perfil de acesso.
        </p>

        <div className="space-y-4">
          <Button to="/login/paciente" variant="indigo">
            Sou Paciente
          </Button>

          <Button to="/login/atendente" variant="teal">
            Sou Atendente
          </Button>
        </div>

        <div className="mt-8">
          <Link 
            to="/" 
            className="text-sm text-gray-500 hover:text-gray-800 hover:underline transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </div>

      </div>
    </div>
  );
}