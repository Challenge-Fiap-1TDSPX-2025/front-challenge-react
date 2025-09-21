import type {CardBeneficio} from "../types/card-beneficios"

interface CardBeneficioProps{
    cardBeneficio: CardBeneficio
}

export function CardBeneficio({cardBeneficio} : CardBeneficioProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-[8px] p-6 text-center shadow-sm h-[300px] flex flex-col justify-center">
            <div className="icone-beneficio">
                <img src={cardBeneficio.imagemUrl} alt={cardBeneficio.altImagem} className='w-3/5' />
            </div>
            <h3 className='text-2xl font-semibold mb-5'>{cardBeneficio.titulo}</h3>
            <p className='text-[#6b7280] text-[0.875rem]'>{cardBeneficio.paragrafo}</p>
        </div>
    )
}