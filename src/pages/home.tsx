
import mulherFoto from '../assets/pexels-karolina-grabowska-7195310.jpg'
import imagemRecurso1 from '../assets/7709378_3731957 1.png'
import imagemRecurso2 from '../assets/26601499_85z_2201_w009_n001_95c_p6_95 1.png'
import timer from '../assets/timer.png'
import ticket from '../assets/ticket.png'
import bot from '../assets/bot.png'
import linhaGraf from '../assets/line-chart.png'
import feedback from '../assets/feedback.png'
import profileUser from '../assets/profile-user.png'

import { CardBeneficio } from '../components/card-beneficios'
import { CardSolucao } from '../components/card-solucao'
import { CardDepoimento } from '../components/card-depoimento'
import { CardPlano } from '../components/card-plano'


export function Home() {
    return (



        <main className='text-[#333]'>

            <section className=" py-20 h-208 bg-[#C8E3F7] ">
                <div className="flex w-full m-auto max-w-[1200px] h-full ">
                    <div className="flex flex-row gap-10 items-center w-full ">
                        <div className="flex flex-col gap-10 w-[560px] ">
                            <h1 className=' text-[2.5rem] leading-[1.2] font-bold '>Atendimento Eficiente e Inteligente para Profissionais de Saúde</h1>
                            <p className='text-lg  max-w-[500px] font-medium'>Gerencie tickets de dúvidas e ofereça respostas automáticas com IA para seus pacientes, tudo
                                em uma única plataforma.</p>
                            <div className="mt-4 md:w-full">
                                <a href="dashbord.html" className="botoes md:w-full">Entrar
                                    <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className=" rounded-2xl overflow-hidden items-center w-3/5 hidden md:block">
                            <img src={mulherFoto} alt="mulher de jaleco verde com fones, olhando para a tela de um notebook" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Soluções */}
            <section id="solucoes" className="py-20 bg-{#f9fafb}">
                <div className="conteiner">
                    <div className=" text-center max-w-[700px] mx-auto mb-15">
                        <div className=" inline-block bg-[#4f46e5] text-white py-1.5 px-3 font-medium mb-3 rounded-[20px]">Nossas Soluções</div>
                        <h2 className='text-4xl font-bold mb-4'>Duas Ferramentas Poderosas em Uma Plataforma</h2>
                        <p className='text-[18px] font-medium'>Otimize seu atendimento com nossas soluções integradas para profissionais de saúde.</p>
                    </div>

                    <div className=" grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                        {/* Solução 1: Gerenciador de Tickets */}
                        <CardSolucao
                            cardSolucao={{
                                imagemUrl: ticket,
                                tituloCard: "Gerenciador de Tickets",
                                subTituloCard: "Sistema completo para gerenciar dúvidas e solicitações dos seus pacientes.",
                                topicosCard: "Organize tickets por tipo de problema;Atualize status: aberto, em andamento e fechado;Priorize atendimentos urgentes"
                            }}
                        />
                        <CardSolucao
                            cardSolucao={{
                                imagemUrl: bot,
                                tituloCard: "Chatbot para Pacientes",
                                subTituloCard: "Assistente virtual inteligente para responder dúvidas comuns dos seus pacientes.",
                                topicosCard: "Respostas automáticas 24/7;Encaminhamento para humanos quando necessário; Aprendizado contínuo com novas interações"
                            }}
                        />



                    </div>
                </div>
            </section>

            {/* Seção Como Funciona */}
            <section id="como-funciona" className=" bg-[#add2f7] py-20">
                <div className="conteiner">
                    <div className="text-center max-w-[700px] mx-auto mb-[60px]">
                        <div className="distintivo">Como Funciona</div>
                        <h2 className="text-4xl font-bold mb-4" >Simplifique seu Atendimento em 3 Passos</h2>
                        <p className='text-[1.125rem] font-medium text-[#31343a]'>Nossa plataforma foi projetada para ser intuitiva e fácil de usar.</p>
                    </div>

                    {/* Gerenciador de Tickets */}
                    <div id="gerenciador-tickets" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
                        {/* Conteúdo do texto: sempre à esquerda em md+ */}
                        <div className="conteudo-recurso order-1">
                            <h3 className="text-[1.75rem] font-bold mb-8 text-[#111827]">Gerenciador de Tickets</h3>

                            {/* Passo 1 */}
                            <div className="flex gap-5 mb-5">
                                <div className="w-10 h-10 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="text-[1.125rem] font-semibold mb-2 text-[#111827]">Receba Dúvidas</h4>
                                    <p className="text-[#202020] text-[1.2rem] font-normal">
                                        Todas as dúvidas são organizadas em tickets, permitindo respostas rápidas, acompanhamento centralizado e uma experiência muito mais profissional.
                                    </p>
                                </div>
                            </div>

                            {/* Passo 2 */}
                            <div className="flex gap-5 mb-5">
                                <div className="w-10 h-10 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="text-[1.125rem] font-semibold mb-2 text-[#111827]">Organize e Priorize</h4>
                                    <p className="text-[#202020] text-[1.2rem] font-normal">
                                        classNameifique os tickets por tipo de problema, urgência e departamento. Atribua responsáveis e defina prazos.
                                    </p>
                                </div>
                            </div>

                            {/* Passo 3 */}
                            <div className="flex gap-5">
                                <div className="w-10 h-10 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="text-[1.125rem] font-semibold mb-2 text-[#111827]">Acompanhe e Resolva</h4>
                                    <p className="text-[#202020] text-[1.2rem] font-normal">
                                        Atualize o status dos tickets conforme o atendimento progride e mantenha os pacientes informados em cada etapa.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="imagem-recurso order-2 md:order-1 w-3/5 hidden lg:block mx-auto">
                            <img
                                src={imagemRecurso1}
                                alt="imagem cartunesca de uma mulher vestindo jaleco branco dentro de uma tela dando saudações"
                                className="rounded-[8px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] w-full h-auto"
                            />
                        </div>
                    </div>



                    {/* Chat IA */}
                    <div id="chat-ia" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
                        {/* Texto: sempre acima da imagem em telas pequenas */}
                        <div className="conteudo-recurso order-1 md:order-2">
                            <h3 className="text-[1.75rem] font-bold mb-8 text-[#111827]">Chat IA para Pacientes</h3>
                            <div className="passos space-y-5">
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-2 text-[#111827]">Configure sua Base de Conhecimento</h4>
                                        <p className="text-[#202020] text-[1.2rem] font-normal">
                                            Alimente o sistema com informações sobre procedimentos, horários, preparos e outras dúvidas frequentes.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-2 text-[#111827]">Ative o Assistente Virtual</h4>
                                        <p className="text-[#202020] text-[1.2rem] font-normal">
                                            Integre o chat ao seu site, aplicativo ou WhatsApp para que os pacientes possam fazer perguntas a qualquer momento.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-[#4f46e5] text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-2 text-[#111827]">Monitore e Aprimore</h4>
                                        <p className="text-[#202020] text-[1.2rem] font-normal">
                                            Acompanhe as interações, identifique novas dúvidas comuns e melhore continuamente as respostas da IA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Imagem: sempre abaixo do texto em telas pequenas */}
                        <div className="imagem-recurso order-2 md:order-1 w-3/5 hidden lg:block mx-auto">
                            <img
                                src={imagemRecurso2}
                                alt="imagem cartunesca de uma mulher falando com um robô, entre eles há uma chat de conversa"
                                className="rounded-[8px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] w-full h-auto"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-[#f9fafb]">
                <div className="conteiner">
                    <div className="text-center max-w-[700px] mt-0 mx-auto mb-[60px]">
                        <div className="distintivo">Benefícios</div>
                        <h2 className='text-4xl font-bold mb-4'>Por que escolher nossa plataforma?</h2>
                        <p className='text-[#31343a] font-medium text-[1.125rem]'>Veja como nossas soluções podem transformar seu atendimento.</p>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                        <CardBeneficio
                            cardBeneficio={{
                                imagemUrl: timer,
                                altImagem: "icone de umn Cronômetro parcialmente decorrido, mostrando o tempo em andamento",
                                titulo: "Economia de Tempo",
                                paragrafo: "Reduza em até 70% o tempo gasto com dúvidas repetitivas e gerenciamento de solicitações."
                            }}
                        />
                        <CardBeneficio
                            cardBeneficio={{
                                imagemUrl: linhaGraf,
                                altImagem: "icone de um grafico uma seta apotando para cima",
                                titulo: "Aumento da Produtividade",
                                paragrafo: "Atenda mais pacientes com a mesma equipe e foque no que realmente importa."
                            }}
                        />
                        <CardBeneficio
                            cardBeneficio={{
                                imagemUrl: feedback,
                                altImagem: "imagem icone de balões com uma mão fazendo um sinal de posistivo.",
                                titulo: "Satisfação do Paciente",
                                paragrafo: "Respostas rápidas e precisas aumentam a satisfação e fidelização dos seus pacientes."
                            }}
                        />




                    </div>
                </div>
            </section>


            <section id="depoimentos" className="py-20">
                <div className="conteiner">
                    <div className="cabecalho-secao">
                        <div className="distintivo">Depoimentos</div>
                        <h2 className='text-4xl font-bold mb-4'>O que nossos clientes dizem</h2>
                        <p className='text-[31343a] font-bold text-[1.125rem]'>Veja como nossas soluções estão ajudando profissionais de saúde.</p>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                        <CardDepoimento
                            cardDepoimento={{
                                depoimento: "O gerenciador de tickets organizou completamente nosso fluxo de atendimento. Conseguimos reduzir o tempo de resposta em 60% e os pacientes estão muito mais satisfeitos.",
                                imagemUrl: profileUser,
                                imagemAlt: "foto de perfil de uma pessoa",
                                nomeAutor: "Carla Mendes",
                                localAutor: "Clínica Saúde Total"
                            }}
                        />
                        <CardDepoimento
                            cardDepoimento={{
                                depoimento: "O Chatbot é incrível! Ele responde as dúvidas mais comuns dos pacientes 24 horas por dia,liberando nossa equipe para focar em casos mais complexos. Um investimento que se pagou em semanas.",
                                imagemUrl: profileUser,
                                imagemAlt: "foto de perfil de uma pessoa",
                                nomeAutor: "Ricardo Alves  ",
                                localAutor: "Centro Médico Bem Estar"
                            }}
                        />
                        <CardDepoimento
                            cardDepoimento={{
                                depoimento: "A combinação das duas ferramentas revolucionou nosso atendimento. Os pacientes recebem respostas instantâneas via IA e, quando necessário, seus casos são convertidos em tickets para nossa equipe resolver.",
                                imagemUrl: profileUser,
                                imagemAlt: "foto de perfil de uma pessoa",
                                nomeAutor: "Patrícia Santos ",
                                localAutor: "Hospital São Lucas"
                            }}
                        />

                    </div>
                </div>
            </section>

            <section id="precos" className="py-20 bg-[#f9fafb]">
                <div className="conteiner">
                    <div className="cabecalho-secao">
                        <div className="distintivo">Preços</div>
                        <h2 className='text-4xl font-bold mb-4'>Planos Flexíveis para Cada Necessidade</h2>
                        <p className='text-[#31343a] font-medium text-[1.125rem]'>Escolha o plano ideal para o tamanho da sua prática ou clínica.</p>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px]">


                        <CardPlano
                            cardPlano={{
                                tituloPlano: "Básico",
                                subTituloPlano: "Ideal para profissionais individuais.",
                                precoPlano: "R$ 97/mês",
                                itemListaPlano: [
                                    "Incluso: até 30 tickets/mês",
                                    "Janela de atendimento: cada ticket pode ser respondido livremente em até 24h após abertura.",
                                    "Extra: tickets adicionais cobrados por unidade (ex.: R$1,50 cada).",
                                    "1 usuário",
                                    "",
                                    "",

                                ],
                            }}
                        />
                        <CardPlano
                            cardPlano={{
                                tituloPlano: "Crescimento",
                                subTituloPlano: "Perfeito para clínicas pequenas e médias.",
                                precoPlano: "R$197",
                                itemListaPlano: [
                                    "150 tickets/mês para suportar volume maior de atendimentos.",
                                    "Respostas com janela de até 72h, garantindo flexibilidade no fluxo de trabalho.",
                                    "Extra: tickets adicionais cobrados por unidade (ex.: R$1,00 cada).",
                                    "Até 5 usuários",

                                ],
                            }}
                        />
                        <CardPlano
                            cardPlano={{
                                tituloPlano: "Performance",
                                subTituloPlano: "Para hospitais e redes de clínicas.",
                                precoPlano: "R$1.299",
                                itemListaPlano: [
                                    "Tickets ilimitados, sem restrição de volume.",
                                    "Janela de resposta ilimitada, sem bloqueio no fluxo de comunicação.",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                ],
                            }}
                        />


                    </div>
                </div>
            </section>


            <section id="comecar" className="py-20 text-center">
                <div className="conteiner">
                    <div className="cabecalho-secao">
                        <h2 className='text-4xl font-bold mb-4'>Pronto para Revolucionar seu Atendimento?</h2>
                        <p className='text-[#31343a] font-medium text-[1.125rem]'>Junte-se a centenas de profissionais de saúde que já estão economizando tempo e melhorando a
                            satisfação dos pacientes.</p>
                    </div>
                    <div className="flex justify-center gap-3 mt-8 mb-4 mx-0">
                        <a href="dashbord.html" className="botao botao-primario">Comece seu Teste Gratuito
                        </a>

                    </div>
                    <p className="text-[#6b7280] text-[0.75rem]">14 dias grátis. Sem necessidade de cartão de crédito.</p>
                </div>
            </section>
        </main>                    
    )
}    
            
