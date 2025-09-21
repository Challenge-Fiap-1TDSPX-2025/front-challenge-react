import type { CardPlano } from "../types/card-plano"

interface CardPlanoProps {
    cardPlano: CardPlano
}
export function CardPlano({ cardPlano }: CardPlanoProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-[8px] p-[30px] shadow-sm transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-md">
            <div className="mb-5">
                <h3 className='text-2xl font-bold mb-2'>{cardPlano.tituloPlano}</h3>
                <p className='text-[#6b7280] font-[0.875rem]'>{cardPlano.subTituloPlano}</p>
            </div>
            <div className="flex items-baseline mb-6">
                <span className="text-[2rem] font-bold">{cardPlano.precoPlano}</span>
                <span className="text-[#6b7280] ml-1">/mês</span>
            </div>
            <ul className="mb-6">
                <ul className="mb-6">
                    {cardPlano.itemListaPlano.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 mb-3">
                            <i className="text-indigo-600 text-sm"></i>
                            {item}
                        </li>
                    ))}
                </ul>
            </ul>
            <a href="#" className=" inline-block py-2.5 px-5 rounded-[5px] font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-md bg-[#4f46e5] text-white border-2  hover:bg-[#4338ca] border-[#4338ca] w-full text-center">Começar Agora</a>
        </div>
    )
}