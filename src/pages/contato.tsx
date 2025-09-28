import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '../components/form-input'; 

export function Contato() {
  const [formData, setFormData] = useState({
    assunto: '',
    nome: '',
    email: '',
    confirmaEmail: '',
    ddd: '',
    telefone: '',
    cidade: '',
    estado: '',
    titulo: '',
    mensagem: '',
    termos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      assunto: '',
      nome: '',
      email: '',
      confirmaEmail: '',
      ddd: '',
      telefone: '',
      cidade: '',
      estado: '',
      titulo: '',
      mensagem: '',
      termos: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (formData.email !== formData.confirmaEmail) {
      alert("Erro: O E-MAIL e a CONFIRMAÇÃO DO E-MAIL não conferem.");
      return; 
    }
    
    // **2. Mensagem de Sucesso e Reset:**
    alert('Mensagem enviada com sucesso!');
    handleReset(); // 👈 CHAMA A FUNÇÃO PARA LIMPAR O ESTADO
  };

  return (
    <main>
      <section className="py-20 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 max-w-[1200px]">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Precisa de ajuda?</h1>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">Só nos chamar!</h3>
            <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <fieldset className="border border-gray-300 p-6 mb-8 rounded-md">
                <legend className="text-lg font-semibold text-gray-800 px-2">SELECIONE UMA OPÇÃO</legend>
                <div className="select-container relative">
                  <select
                    id="assunto"
                    name="assunto"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="comercial">Informações Comerciais</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    ▼
                  </div>
                </div>
              </fieldset>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <fieldset className="border border-gray-300 p-6 rounded-md">
                  <legend className="text-lg font-semibold text-gray-800 px-2">INFORMAÇÕES PESSOAIS</legend>
                  <div className="space-y-4">
                    <FormInput
                      label="NOME"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required={true}
                    />

                    <FormInput
                      label="E-MAIL"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                    />
                    
                    <FormInput
                      label="CONFIRMAÇÃO DO E-MAIL"
                      id="confirmaEmail"
                      name="confirmaEmail"
                      type="email"
                      value={formData.confirmaEmail}
                      onChange={handleChange}
                      required={true}
                    />

                    <div className="grid grid-cols-3 gap-2">
                      <FormInput
                        label="DDD"
                        id="ddd"
                        name="ddd"
                        value={formData.ddd}
                        onChange={handleChange}
                        required={true}
                        maxLength={2}
                        colSpan="col-span-1"
                      />
                      <FormInput
                        label="TELEFONE"
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        required={true}
                        colSpan="col-span-2"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="border border-gray-300 p-6 rounded-md">
                  <legend className="text-lg font-semibold text-gray-800 px-2">MENSAGEM</legend>
                  <div className="space-y-4">
                    <FormInput
                      label="CIDADE"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required={true}
                    />
                    <FormInput
                      label="ESTADO"
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      required={true}
                    />
                    <FormInput
                      label="TÍTULO DA MENSAGEM"
                      id="titulo"
                      name="titulo"
                      value={formData.titulo}
                      onChange={handleChange}
                      required={true}
                    />
                    <div className="campo-formulario">
                      <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                        MENSAGEM<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={10}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={formData.mensagem}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="termos"
                        name="termos"
                        className="mt-1 mr-2"
                        required
                        checked={formData.termos}
                        onChange={handleChange}
                      />
                      <label htmlFor="termos" className="text-sm text-gray-700">
                        Eu li e concordo com os termos da <a href="#" className="text-indigo-600 underline">política de privacidade</a>.
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button" 
                  onClick={handleReset} 
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                >
                  LIMPAR
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}