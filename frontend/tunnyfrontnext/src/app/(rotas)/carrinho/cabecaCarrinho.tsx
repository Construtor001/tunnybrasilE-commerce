import style from "./cabecaCarrinho.module.css"
import "../../globals.css"
import Image from "next/image"

export default function CabecaCarrinho(){
    return(
        <div className={style.topo}>
            <Image  src="/Image/logo_3.png" alt="pefil" width={150} height={60} className={style.logoimg}/>

            <div className={style.barra_progresso}>
                <div className={style.bolinha_agrupar1}>
                    <p className={style.barra_nome}>carrinho</p>
                    <div className={style.bolinha1}></div>
                </div>
                <div className={style.bolinha_agrupar2}>
                    <p className={style.barra_nome}>identificação</p>
                    <div className={style.bolinha2}></div>
                </div>
                <div className={style.bolinha_agrupar3}>
                    <p className={style.barra_nome}>forma de pagamento</p>
                    <div className={style.bolinha3}></div>
                </div>
                <div className={style.bolinha_agrupar4}>
                    <p className={style.barra_nome}>confirmação</p>
                    <div className={style.bolinha4}></div>
                </div>
            </div>
        </div>
    )
}