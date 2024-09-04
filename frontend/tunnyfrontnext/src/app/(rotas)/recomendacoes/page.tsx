import "../../globals.css"
import style from "./recomendacoes.module.css"
import Image from "next/image"

export default function Recomendacoes(){
    return(
        <div className={style.pagina}>
            <div className={style.customizar}>

                <div className={style.alinhar_nome}>
                    <Image className={style.btn_voltar} alt="" height={30} width={33} src="/Image/voltar.png"/>
                    <p className={style.recomenda_nome}>Recomendações</p>
                    <Image className={style.btn_cesta} alt="" height={30} width={35} src="/Image/cestaimg.svg"/>
                </div>

                <div className={style.alinhar_produto}>
                    <div className={style.produto}></div>
                </div>

                <div className={style.recomendacoes}>
                    <div className={style.produtos_recomendacoes}></div>
                    <div className={style.produtos_recomendacoes}></div>
                    <div className={style.produtos_recomendacoes}></div>
                    <div className={style.produtos_recomendacoes}></div>
                    <div className={style.produtos_recomendacoes}></div>
                    <div className={style.produtos_recomendacoes}></div>
                </div>

            </div>
        </div>
    )
}