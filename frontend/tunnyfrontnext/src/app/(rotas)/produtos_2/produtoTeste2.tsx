import Image from "next/image"
import style from "./produto.module.css"

import { produtos } from "../../../interfaces"

interface prodherdeiro extends Omit<produtos, "tipo">{}

export default function Prod(props: prodherdeiro){
    return(
        <div>
            <div>
                <div className={style.produto_carrinho}>
                    <div className={style.alinhar_imagem}>
                        <Image className={style.produto_foto} layout="responsive" alt="" height={100} width={100} src="/Image/jaqueta.png"/>
                        <div className={style.organizar_super_promocao}>
                            <div className={style.organizar_super_promocao_nome}>
                                <p className={style.nome_barra_promocao_1}>Super</p>
                                <p className={style.nome_barra_promocao_2}>Promoção</p>
                            </div>
                            <Image className={style.barra_promocao} alt="" height={147} width={142} src="/Image/barra_promocao.png"/>
                        </div>
                        <div className={style.desconto_promocao}>
                            <p className={style.desconto_promocao_porcentagem}>45%</p>
                            <Image className={style.preco_baixo} alt="" height={12} width={16} src="/Image/preco_baixo.png"/>
                        </div>
                        <div className={style.tempo_limitado}>
                            <p className={style.tempo_limitado_numero_1}>Termina em</p>
                            <p className={style.tempo_limitado_numero_2}>6 dias</p>
                        </div>
                    </div>
                    {/* <div  style={{backgroundImage: "url("+`${props.url}`+")"}}>
                        <p className={style.produto_desconto}><bdo style={{color:"yellow", fontWeight:"bold"}}>{props.desconto}%</bdo> de desconto</p>
                        <div className={style.produto_favorito}>
                        <Image alt="" height={25} width={25} src="/Image/estrela_ns.png"/>
                        <p className={style.produto_favorito_nome}>Favoritar</p>
                        </div>
                    </div> */}
                    


                    <div className={style.produto_carrinho_descricao}>
                        <div className={style.divisao_foto_descricao}></div>
                        <p className={style.produto_carrinho_nome}>Casaco One Piece</p>

                        <div style={{display:"flex", alignItems:"center", marginTop:"-3px", marginLeft:"10px"}}>
                            <Image  alt="" height={25} width={60} src="/Image/4estrelas.svg"/>
                            <p className={style.produto_carrinho_avaliacoes}>({props.avaliacoes}) Avaliações</p>
                        </div>

                        <p className={style.produto_valor_desconto_ordenar}>
                            <bdo className={style.produto_valor_desconto}>R$ 389,27</bdo>
                        </p>
                        <p className={style.produto_carrinho_valor_pix}>R$ 159,90</p>
                        <p className={style.produto_carrinho_valor_cartao}>1x no pix ou 5x de R$ 32,00 no cartão de crédito</p>
                    
                        <div className={style.agrupar_comprar_produto}>
                            <div className={style.relogio_icone_alinhar}>
                                <Image className={style.relogio_icone} alt="" height={18} width={22} src="/Image/relogio_oferta2.png"/>
                            </div>
                            <div className={style.comprar_agora}>
                                <p style={{fontSize:"12px", marginBottom:"-4px", fontWeight:"600"}}>Limitado</p>
                                <p style={{paddingBottom:"3px", fontWeight:"800"}}>Adquira já</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}