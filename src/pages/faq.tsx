export function Faq(){
    return(
      <main className="w-full">
      
        <section className="secao-faq">
            <div className="w-full h-full  mx-auto px-5 flex flex-col justify-center items-center bg-[#add2f7]">
                <div className="cabecalho-secao">
                    <h1>FAQ</h1>
                    <p>Perguntas Frequentes</p>
                </div>

                <div className="lista-faq max-w-[900px]">
                  
                    <div className="item-faq">
                        <div className="pergunta-faq">
                            <div className="numero-pergunta">1.</div>
                            <h3>Como acessar as ferramentas de ticket ou chat IA?</h3>
                            
                        </div>
                        <div className="resposta-faq w-full bg-amber-300">
                            <ul>
                                <li>Faça login na sua conta HealthSupport</li>
                                <li>No painel principal, você encontrará os ícones para "Gerenciador de Tickets" </li>
                                <li>Clique no ícone da ferramenta que deseja acessar</li>
                                <li>Para o Gerenciador de Tickets, você verá todos os tickets abertos e poderá criar
                                    novos</li>
                                <li>Para o Chat IA, você poderá configurar respostas automáticas e monitorar interações
                                </li>
                            </ul>

                        </div>
                    </div>

                 
                    <div className="item-faq">
                        <div className="pergunta-faq">
                            <div className="numero-pergunta">2.</div>
                            <h3>Como fazer login?</h3>
                            
                        </div>
                        <div className="resposta-faq">
                            <p>Para fazer login na plataforma HealthSupport:</p>
                            <ul>

                                <li>Insira seu e-mail e senha cadastrados</li>
                                <li>Clique no botão "Entrar"</li>
                            </ul>
                            <p>Caso tenha esquecido sua senha, clique em "Esqueci minha senha" e siga as instruções
                                enviadas ao seu e-mail para redefinição.</p>
                            <p>Para o primeiro acesso, utilize as credenciais enviadas ao e-mail cadastrado durante a
                                contratação do serviço.</p>
                        </div>
                    </div>

                    
                    <div className="item-faq">
                        <div className="pergunta-faq">
                            <div className="numero-pergunta">3.</div>
                            <h3>Como visualizar os tickets criados?</h3>
                            
                        </div>
                        <div className="resposta-faq">
                            <p>Para visualizar os tickets criados:</p>
                            <ul>
                                <li>Acesse o Gerenciador de Tickets no painel principal</li>
                                <li>Na página inicial do gerenciador, você verá uma lista de todos os tickets</li>
                                <li>Utilize os filtros disponíveis para organizar por: status, data, ou
                                    departamento</li>

                            </ul>

                        </div>
                    </div>

                  
                    <div className="item-faq">
                        <div className="pergunta-faq">
                            <div className="numero-pergunta">4.</div>
                            <h3>Como marcar uma teleconsulta?</h3>
                            
                        </div>
                        <div className="resposta-faq">
                            <p>Para marcar uma teleconsulta:</p>
                            <ul>
                                <li>Acesse o módulo "Agenda" no menu lateral</li>
                                <li>Clique no botão "Nova Consulta"</li>
                                <li>Selecione "Teleconsulta" como tipo de atendimento</li>
                                <li>Escolha a data e horário disponíveis</li>
                                <li>Selecione o paciente ou cadastre um novo</li>
                                <li>Adicione observações se necessário</li>
                                <li>Clique em "Confirmar Agendamento"</li>
                            </ul>
                            <p>O paciente receberá automaticamente um e-mail com o link para a teleconsulta e instruções
                                de acesso.</p>
                        </div>
                    </div>
                </div>
                <div className="contato-faq">
                    <h3>Não encontrou o que procurava?</h3>
                    <p>Entre em contato com nossa equipe de suporte para obter ajuda personalizada.</p>
                    <a href="contato.html" className="botao botao-primario">Falar com Suporte</a>
                </div>
            </div>
        </section>
    </main>
    )
    
}