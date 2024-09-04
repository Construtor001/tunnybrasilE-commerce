import "../../globals.css";
import style from "./confirmacao.module.css"
import Image from "next/image"
import Cabeca from "./cabecaCarrinho"
import RodapePagamento from "../carrinho/rodapePagamento";

export default function Confirmacao(){
    return(
        <div className={style.pagina}>
            <Cabeca/>
            <div className={style.organizar_informacoes}>

                <div className={style.informacoes_dos_produtos}>
                    
                    <p className={style.informacoes_titulo}>INFORMAÇÕES PESSOAIS</p>

                    <div className={style.organizar_fundo_informacoes}>
                        
                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>CPF:</p>
                            <p className={style.valor}>000.000.000-00</p>
                        </div>

                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>NOME COMPLETO:</p>
                            <p className={style.valor}>José da silva pereira</p>
                        </div>
                        
                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>EMAIL:</p>
                            <p className={style.valor}>josedasilva@gmail.com</p>
                        </div>
                        
                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>TELEFONE:</p>
                            <p className={style.valor}>(71) 9 9999-9999</p>
                        </div>

                    </div>
                    
                    <p className={style.informacoes_titulo}>ENDEREÇO DE ENTREGA</p>

                    <div className={style.organizar_fundo_informacoes}>
                        
                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>CEP:</p>
                            <p className={style.valor}>00.000-000</p>
                        </div>

                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>ENDEREÇO:</p>
                            <p className={style.valor}>Casa do caralho</p>
                        </div>
                        
                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>NÚMERO DA CASA:</p>
                            <p className={style.valor}>69</p>
                        </div>
                        
                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>BAIRRO:</p>
                            <p className={style.valor}>Liberdade</p>
                        </div>

                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>CIDADE:</p>
                            <p className={style.valor}>Salvador</p>
                        </div>

                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>ESTADO:</p>
                            <p className={style.valor}>Bahia</p>
                        </div>

                        <div className={style.organizar_nome_valor}>
                            <p className={style.nome}>PONTO DE REFERÊNCIA:</p>
                            <p className={style.valor}>Próximo ao bar do iolanda</p>
                        </div>

                    </div>
                    
                    <p className={style.informacoes_titulo}>INFORMAÇÕES SOBRE OS PRODUTOS</p>

                    <div className={style.organizar_fundo_produto}>

                        <Image className={style.imagem_produto_confirmacao} height={116} width={117} src="/Image/casaco.png" alt=""/>

                        <div className={style.descricao_produto_confirmacao}>

                            <p className={style.nome_descricao}>Moletom masculino casual forro quente anime macaco d luffy hoodies dos homens velo uma peça moletom jaqueta de alta qualidade</p>

                            <div className={style.organizar_informacoes_produto}>

                                <p className={style.informacoes_produto}>Quantidade: 1</p>
                                <p className={style.informacoes_produto}>Cor: Preto</p>
                                <p className={style.informacoes_produto}>Tamanho: M</p>

                            </div>
                        </div>

                        <div className={style.organizar_preco}>

                            <p className={style.nome_preco}>Preço no Pix:</p>
                            <p className={style.valor_preco}>R$ 199,89 à vista</p>

                        </div>

                    </div>
                    <div className={style.organizar_fundo_produto}>

                        <Image className={style.imagem_produto_confirmacao} height={116} width={117} src="/Image/casaco.png" alt=""/>

                        <div className={style.descricao_produto_confirmacao}>

                            <p className={style.nome_descricao}>Moletom masculino casual forro quente anime macaco d luffy hoodies dos homens velo uma peça moletom jaqueta de alta qualidade</p>

                            <div className={style.organizar_informacoes_produto}>

                                <p className={style.informacoes_produto}>Quantidade: 1</p>
                                <p className={style.informacoes_produto}>Cor: Preto</p>
                                <p className={style.informacoes_produto}>Tamanho: M</p>

                            </div>
                        </div>

                        <div className={style.organizar_preco}>

                            <p className={style.nome_preco}>Preço no Pix:</p>
                            <p className={style.valor_preco}>R$ 199,89 à vista</p>

                        </div>

                    </div>
                </div>

                <div className={style.recibo}>
                    
                    <p className={style.recibo_nome}>RESUMO DO PEDIDO</p>

                    <div className={style.organizar_valor_primeiro}>
                        <p className={style.nome_valor_primeiro}>Valor dos produtos:</p>
                        <p className={style.valor_primeiro}>R$ 3.111,10</p>
                    </div>

                    <div className={style.barra_divisoria}></div>

                    <div className={style.organizar_valor_frete}>
                        <p className={style.valor_frete_nome}>Frete</p>
                        <p className={style.valor_frete}>R$ 0,00</p>
                    </div>

                    <div className={style.organizar_valor_descricao_prazo}>
                        <div className={style.organizar_valor_prazo}>
                            <p className={style.nome_valor_prazo}>Total á prazo:</p>
                            <p className={style.valor_prazo}>R$ 3.111,10</p>
                        </div>
                        <p className={style.descricao_prazo}>(em até <bdo className={style.bold}> 10x </bdo> de <bdo className={style.bold}> R$ 311,11 </bdo> sem juros)</p>
                    </div>

                    <div className={style.organizar_valor_segundo}>
                        <p className={style.valor_segundo_nome}>Valor á vista no <bdo style={{marginLeft:"0px"}} className={style.bold}>Pix:</bdo></p>
                        <p className={style.valor_segundo}>R$ 2.799,99</p>
                        <p className={style.valor_segundo_economize}>(Economize: <bdo style={{marginLeft:"0px"}} className={style.bold}>R$ 311,11)</bdo></p>
                    </div>

                    <div className={style.organizar_botoes}>
                        <input className={style.botoes} value="Ir para o pagamento"/>
                        <input className={style.botoes} value="Continuar comprando"/>
                    </div>

                </div>

            </div>
            <RodapePagamento/>
        </div>
    )
}