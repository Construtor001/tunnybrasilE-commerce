import style from "./carrinho.module.css"
import Cabeca from "./cabecaCarrinho"
import Produto from "./produtoAmostra"
import ProdutosCarrinho from "./produtosCarrinho"
import Image from "next/image"
import Rodape from "./rodapePagamento"
import ProdTeste from "../produtos/produtoTeste"

export default function Carrinho(){
    return(
        <div className={style.pagina}>
            <Cabeca/>
            
            <div className={style.produto_amostra}>
                <p className={style.produto_texto}>Dê uma olhada nesses também</p>
                <div className={style.organizar_produtos}>
                    <div className={style.ir_produto}>
                        <Image src="/Image/seta_produtos.png" width={35} height={65} alt="" className={style.seta}/>
                    </div>
                    <div className={style.voltar_produto}>
                        <Image src="/Image/seta_produtos.png" width={12} height={24} alt="" className={style.seta_2}/>
                    </div>
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                </div>
                <div className={style.barra}></div>
            </div>

            <div className={style.organizar_dois}>
                <div className={style.produtos_carrinho}>
                    <p className={style.nome_cesta}>CESTA DE PRODUTOS</p>
                    <ProdutosCarrinho/>
                    <div className={style.organizar_barra}>
                        <div className={style.barra_divisoria}></div>
                    </div>
                    <ProdutosCarrinho/>
                    <div className={style.organizar_barra}>
                        <div className={style.barra_divisoria}></div>
                    </div>
                    <ProdutosCarrinho/>
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

            <div className={style.organizar_produtos_recomendados_tudo}>
                <div className={style.produtos_recomendados_nome}>Aproveite e leve junto</div>

                <div className={style.barra2}></div>

                <div className={style.ir_produto_2}>
                    <Image src="/Image/seta_produtos.png" width={35} height={65} alt="" className={style.seta}/>
                </div>
                <div className={style.voltar_produto_2}>
                    <Image src="/Image/seta_produtos.png" width={12} height={24} alt="" className={style.seta_2}/>
                </div>

                <div className={style.organizar_produtos_recomendados}>
                    <ProdTeste sobre={"ola"} id={1} url={"ola"} desconto={"ola"} nome={"ola"} avaliacoes={"ola"} estrelasQuantidade={1} preco={1} formaDePagamento={"ola"}/>

                    <ProdTeste sobre={"ola"} id={1} url={"ola"} desconto={"ola"} nome={"ola"} avaliacoes={"ola"} estrelasQuantidade={1} preco={1} formaDePagamento={"ola"}/>

                    <ProdTeste sobre={"ola"} id={1} url={"ola"} desconto={"ola"} nome={"ola"} avaliacoes={"ola"} estrelasQuantidade={1} preco={1} formaDePagamento={"ola"}/>

                    <ProdTeste sobre={"ola"} id={1} url={"ola"} desconto={"ola"} nome={"ola"} avaliacoes={"ola"} estrelasQuantidade={1} preco={1} formaDePagamento={"ola"}/>

                    <ProdTeste sobre={"ola"} id={1} url={"ola"} desconto={"ola"} nome={"ola"} avaliacoes={"ola"} estrelasQuantidade={1} preco={1} formaDePagamento={"ola"}/>

                    <ProdTeste sobre={"ola"} id={1} url={"ola"} desconto={"ola"} nome={"ola"} avaliacoes={"ola"} estrelasQuantidade={1} preco={1} formaDePagamento={"ola"}/>
                </div>
            </div>

            <Rodape/>
        </div>
    )
}