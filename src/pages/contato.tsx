import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso!');
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
                    <div className="campo-formulario">
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                        NOME<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-MAIL<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="campo-formulario">
                      <label htmlFor="confirmaEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        CONFIRMAÇÃO DO E-MAIL<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="confirmaEmail"
                        name="confirmaEmail"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={formData.confirmaEmail}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-1">
                             <label htmlFor="ddd" className="block text-sm font-medium text-gray-700 mb-1">
                                DDD<span className="text-red-500">*</span>
                             </label>
                             <input
                               type="text"
                               id="ddd"
                               name="ddd"
                               maxLength={2}
                               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                               required
                               value={formData.ddd}
                               onChange={handleChange}
                             />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                                TELEFONE<span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="telefone"
                              name="telefone"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                              value={formData.telefone}
                              onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                                CIDADE<span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cidade"
                              name="cidade"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                              value={formData.cidade}
                              onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-1">
                                ESTADO<span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="estado"
                              name="estado"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              required
                              value={formData.estado}
                              onChange={handleChange}
                            />
                        </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="border border-gray-300 p-6 rounded-md">
                  <legend className="text-lg font-semibold text-gray-800 px-2">MENSAGEM</legend>
                  <div className="space-y-4">
                    <div className="campo-formulario">
                      <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                        TÍTULO DA MENSAGEM<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={formData.titulo}
                        onChange={handleChange}
                      />
                    </div>
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
                  type="reset"
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