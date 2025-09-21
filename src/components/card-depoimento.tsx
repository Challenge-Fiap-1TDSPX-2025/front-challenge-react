import type{ CardDepoimento } from "../types/card-depoimento"

interface CardDepoimentoProps{
    cardDepoimento: CardDepoimento
}

export function CardDepoimento({cardDepoimento} : CardDepoimentoProps){
    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <p className='text-[#6b7280] mb-6 italic'>{cardDepoimento.depoimento}</p>
            <div className="flex items-center gap-4">
                <div className="avatar-autor">
                    <img src= {cardDepoimento.imagemUrl} alt= {cardDepoimento.imagemAlt} className='w-10 h-10 rounded-full [bg-#e5e7eb]' />
                </div>
                <div className="info-autor">
                    <p className="font-semibold text-[0.875rem]">{cardDepoimento.nomeAutor}</p>
                    <p className="text-[#6b7280] font-[0.75rem]">{cardDepoimento.localAutor}</p>
                </div>
            </div>
        </div>
    )
}