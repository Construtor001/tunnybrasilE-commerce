import Image from "next/image"
import style from "./produto.module.css"

import { produtos } from "../../../interfaces"

interface prodherdeiro extends Omit<produtos, "tipo">{}

export default function Prod(props: prodherdeiro){


    
    return(
        <div>
            <div>
                <div className={style.produto_carrinho}>
                    <Image className={style.produto_foto} layout="responsive" alt="" height={100} width={100} src={props.url}/>
                    {/* <div  style={{backgroundImage: "url("+`${props.url}`+")"}}>
                        <p className={style.produto_desconto}><bdo style={{color:"yellow", fontWeight:"bold"}}>{props.desconto}%</bdo> de desconto</p>
                        <div className={style.produto_favorito}>
                        <Image alt="" height={25} width={25} src="/Image/estrela_ns.png"/>
                        <p className={style.produto_favorito_nome}>Favoritar</p>
                        </div>
                    </div> */}


                    <div className={style.produto_carrinho_descricao}>
                        <div className={style.divisao_foto_descricao}></div>
                        <p className={style.produto_carrinho_nome}>{props.nome}</p>
                        <div style={{display:"flex", alignItems:"center", marginLeft:"-100px", marginTop:"-3px"}}>
                            <Image style={{marginTop:"10px",marginLeft:"48px"}} alt="" height={25} width={75} src="/Image/4estrelas.svg"/>
                            <p className={style.produto_carrinho_avaliacoes}>{props.avaliacoes} Avaliações</p>
                        </div>
                        <p className={style.produto_valor_desconto_ordenar}>
                            <bdo className={style.produto_valor_desconto}>R$ 389,27</bdo>
                            <bdo className={style.produto_valor_desconto_dois}>40%</bdo>
                        </p>
                        <div style={{display:"flex", justifyContent:"start", width:"100%"}}>
                            <p className={style.produto_carrinho_valor_pix}>R$ {props.preco<999?props.preco:props.preco.toLocaleString('pt-BR')},90</p>
                        </div>
                        <p className={style.produto_carrinho_valor_cartao}>1x no pix ou 5x de R$ 32,00 no cartão de crédito</p>
                    
                        <div className={style.agrupar_comprar_produto}>
                            <div className={style.ver_mais}>
                                <Image style={{marginRight:"5px"}} alt="" height={15} width={15} src="/Image/olhos.png"/>
                                Ver Sobre
                            </div>
                            <div className={style.comprar_agora}>Comprar Agora</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}