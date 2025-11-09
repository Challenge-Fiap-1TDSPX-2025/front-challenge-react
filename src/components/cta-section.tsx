
export function CtaSection() {
  return (
    <div className="text-center mt-12 p-8 bg-blue-100/50 rounded-lg">
      <h3 className="text-2xl font-bold text-slate-800">
        Não encontrou o que procurava?
      </h3>
      <p className="my-3 text-slate-700">
        Entre em contato com nossa equipe de suporte para obter ajuda personalizada.
      </p>
      <a 
        href="/contato" 
        className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
      >
        Falar com Suporte
      </a>
    </div>
  );
}