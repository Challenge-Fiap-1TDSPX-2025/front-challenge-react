import { LinkRodape } from "./link-rodape"

export function Footer() {
    return (
        <footer id="contato" className="bg-[#add2f7] border-t-2 border-[#222325] pt-[60px] pb-5 px-0">
            <div className="conteiner">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mb-10">
                    <div className="max-w-[300px]">
                        <div className="logo">
                            <i className="fa-solid fa-stethoscope"></i>
                            <span>HealthSupport</span>
                        </div>
                        <p className='text-[#1f2124]  my-4'>Soluções inteligentes para profissionais de saúde atenderem melhor seus pacientes.</p>

                    </div>

                    <LinkRodape
                        tituloLink="Produto"
                        itemListaLink={[
                            { label: "Gerenciador de Tickets", href: "/tickets" },
                            { label: "Preços", href: "/precos" }
                        ]}
                    />
                    <LinkRodape
                        tituloLink="Empresa"
                        itemListaLink={[
                            { label: "Integrantes", href: "/integrantes" },
                        ]}
                    />
                    <LinkRodape
                        tituloLink="Suporte"
                        itemListaLink={[
                            { label: "Central de Ajuda", href: "/teste" },
                            { label: "Contato", href: "/contato" }
                        ]}
                    />
                   




                </div>


                <div className="border-t border-[#222325] pt-5 text-center text-[#222325] ">
                    <p>&copy; 2025 HealthSupport. Todos os direitos reservados.</p>
                    <div className="flex justify-center gap-4 mt-3">
                        <a href="#" className='text-sm text-[#222325] transition-colors duration-300 ease-in-out hover:text-indigo-600 hover:underline'>Política de Privacidade</a>
                        <a href="#" className='text-sm text-[#222325] transition-colors duration-300 ease-in-out hover:text-indigo-600 hover:underline'>Termos de Serviço</a>
                        <a href="#" className='text-sm text-[#222325] transition-colors duration-300 ease-in-out hover:text-indigo-600 hover:underline'>LGPD</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}