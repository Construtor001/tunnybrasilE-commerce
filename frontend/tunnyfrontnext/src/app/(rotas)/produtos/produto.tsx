import Image from "next/image"
import style from "./produto.module.css"

export default function Prod(){
    return(
        <div>
            <div >
                <div className={style.produto_carrinho}>
                    <div className={style.produto_foto}>
                        <p className={style.produto_desconto}><bdo style={{color:"yellow", fontWeight:"bold"}}>5%</bdo> de desconto</p>
                        <div className={style.produto_favorito}>
                            <Image alt="" height={25} width={25} src="/Image/estrela_ns.png"/>
                            <p className={style.produto_favorito_nome}>Favoritar</p>
                        </div>
                    </div>
                    <div className={style.produto_carrinho_descricao}>
                        <p className={style.produto_carrinho_nome}>Carrinho de brinquedo</p>
                        <div style={{display:"flex", alignItems:"center", marginLeft:"-100px", marginTop:"-3px"}}>
                            <Image style={{marginLeft:"20px"}} alt="" height={30} width={90} src="/Image/4estrelas.svg"/>
                            <p className={style.produto_carrinho_avaliacoes}>Avaliações (19)</p>
                        </div>
                        <p className={style.produto_carrinho_valor_pix}>R$ 59,90 <bdo style={{fontSize:"22px", fontWeight:"bold", color:"rgb(52, 52, 52)"}}>no pix</bdo></p>
                        <p className={style.produto_carrinho_valor_cartao}><bdo style={{fontSize:"14px", fontWeight:"bold", color:"rgb(52, 52, 52)"}}>ou até</bdo> 5x de R$ 9,98 <bdo style={{fontSize:"14px", fontWeight:"bold", color:"rgb(52, 52, 52)"}}>no cartão de crédito</bdo></p>
                    </div>
                </div>
            </div>
        </div>
    )
}