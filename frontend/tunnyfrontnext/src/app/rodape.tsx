import style from "./rodape.module.css"
import Image from "next/image"

export function Rodape(){
    return(
        <div>

            <div className={style.rodape}>
                <div className={style.alinhar_rodape}>
                    <div style={{display:"flex"}}>
                        <div className={style.rodape_pagamentos}>
                            <p className={style.nome_rodape_pagamento}>Formas 
                            de pagamento</p>
                            <div className={style.organizar_pagamento}>
                                <Image style={{marginLeft:"20px"}} alt="" height={27} width={40} src="/Image/boleto.png"/>
                                <Image style={{marginLeft:"20px"}} alt="" height={27} width={40} src="/Image/pix.png"/>
                                <Image style={{marginLeft:"20px"}} alt="" height={27} width={40} src="/Image/cartao_master_card.png"/>
                                <Image style={{marginLeft:"20px"}} alt="" height={27} width={40} src="/Image/cartao_visa.png"/>
                                <Image style={{marginLeft:"20px"}} alt="" height={27} width={40} src="/Image/cartao_elo.png"/>
                                <Image style={{marginLeft:"20px"}} alt="" height={28} width={45} src="/Image/cartao_hipercard.png"/>
                            </div>
                        </div>
                        <div className={style.rodape_logo}>
                            <p className={style.nome_plataformas}>Estamos em todas as plataformas</p>
                            <div style={{display: "flex"}}>
                                <Image style={{marginLeft:"30px"}} alt="" height={33} width={33} src="/Image/icone_do_facebook.png"/>
                                <Image style={{marginLeft:"30px"}} alt="" height={33} width={33} src="/Image/icone_do_instagram.png"/>
                                <Image style={{marginLeft:"30px"}} alt="" height={33} width={33} src="/Image/icone_do_tiktok.png"/>
                                <Image style={{marginLeft:"30px"}} alt="" height={33} width={33} src="/Image/icone_do_twitter.png"/>
                            </div>
                        </div>
                        <div className={style.rodape_contato}>
                            <p className={style.nome_rodape_contato}>Fale conosco</p>
                            <div className={style.nome_rodape_contato_descricao}>
                                <p>Horário de atendimento: 08:00 ás 21:00 de segunda a sexta</p><br/>
                                <p className={style.contatos}> Email: tunnybrasil@XXX.com</p><br/>
                                <div className={style.contatos_whatsapp}>
                                    <p className={style.contatos_whatsapp_nome}>Atendimento via</p>
                                    <Image className={style.contatos_whatsapp_imagem} alt="" height={25} width={25} src="/Image/icone_whatsapp.png"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.alnhar_informacoes_rodape}>
                        <div className={style.departamento_1}>
                            <div className={style.departamento_titulo_1}>Departamentos</div>
                            <div>Roupa</div>
                            <div>Bolsas</div>
                            <div>Acessorios</div>
                            <div>Mochilas</div>
                            <div>Tenis</div>
                            <div>Toalhas</div>
                            <div>Lençol de cama</div>
                            <div>Bonecos</div>
                            <div>Personalizados</div>
                            
                        </div>

                        <div className={style.departamento_2}>
                            <div className={style.departamento_titulo_2}>Ajuda e suporte</div>
                            <div>Políticas de privacidade</div>
                            <div>Direitos autorais</div>
                            <div>Termos de uso</div>
                            <div>Devolução</div>
                            <div>Como Pedir</div>
                            <div>Como Rastrear</div>
                        </div>
                        
                        <div className={style.departamento_3}>
                            <div className={style.departamento_titulo_3}>novidades e promoções</div>
                            <div>ola mundo</div>
                            <div>ola mundo</div>
                            <div>ola mundo</div>
                            <div>ola mundo</div>
                            <div>ola mundo</div>
                            <div>ola mundo</div>
                            <div>ola mundo</div>
                        </div>
                    </div>

                    <div className={style.inserir_informacoes_rodape}>
                        <p className={style.inserir_informacoes_rodape_nome}>Cadastre-se no nosso site para receber novidades e sobre a tunnybrasil</p>
                        <div style={{display:"flex", marginTop:"10px", marginLeft:"50px"}}>
                            <div>
                                <input className={style.inserir_informacoes_rodape_email} placeholder="Seu Email"/>
                                <input type="button" value="cadastrar" className={style.inserir_informacoes_rodape_email_botao} placeholder="Número de Telefone"/>
                            </div>
                            <div>
                                <input className={style.inserir_informacoes_rodape_numero} placeholder="Seu Número"/>
                                <input type="button" value="cadastrar" className={style.inserir_informacoes_rodape_numero_botao} placeholder="Número de Telefone"/>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div style={{width:"100vw", display:"flex", justifyContent:"center", fontSize:"13px",
        marginTop:"10px", marginBottom:"10px"}}>© Todos os diritos reservados - CNPJ: 53.424.507/0001-39</div>

        </div>
    )
}