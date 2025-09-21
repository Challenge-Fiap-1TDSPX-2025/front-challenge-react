
import type { CardSoulcao } from '../types/card-solucao'

interface CardSolucaoProps{
    cardSolucao:CardSoulcao
}

export function CardSolucao({ cardSolucao }: CardSolucaoProps) {
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm transition-shadow duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      
      <div className="icone-solucao w-[70px] h-[70px] bg-[rgba(79,70,229,0.1)] rounded-[50%] flex items-center justify-center mb-5">
        <img src={cardSolucao.imagemUrl} alt="magem de dois tickets superexpostos" className="func-icons" />
      </div>

      <h3 className="text-2xl font-bold mb-3">{cardSolucao.tituloCard}</h3>
      <p className="mb-5 font-semibold">{cardSolucao.subTituloCard}</p>

      <ul className="mb-8 flex flex-col gap-2.5 font-semibold">
        {cardSolucao.topicosCard.split(";").map((topico, index) => (
          <li key={index} className="text-[#4b5563]">{topico}</li>
        ))}
      </ul>

      <a href="dashbord.html" className="inline-block py-2.5 px-5 rounded-[5px] font-semibold cursor-pointer transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-200 w-full text-center">
        Saiba Mais
      </a>
    </div>
  );
}


