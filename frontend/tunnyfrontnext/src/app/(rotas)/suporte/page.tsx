import "../../globals.css"
import style from "./suporte.module.css"
import Image from "next/image"

export default function Suport(){
    return(
        <div className={style.fundo}>

            <div className={style.barraMenu}>

                <Image className={style.barraimgf} width={32} height={29} src="/Image/voltar.png" alt=""/>
                <div className={style.organizar}>
                    <Image className={style.logo} alt="" height={60} width={135} src="/Image/logo.png"/>
                </div>
            </div>

            <Image className={style.fundoSuporte} alt="" width={800} height={700} src="/Image/suportefundoimg.png"/>
            <Image className={style.fundoSuporte2} alt="" width={800} height={700} src="/Image/suportefundoimg.png"/>

            <Image className={style.suporteimg} alt="" width={420} height={280} src="/Image/suporteimg.png"/>

            <div className={style.ajustar}>
                <div className={style.ajuda}>
                    <Image className={style.infoimg} alt="" height={30} width={30} src="/Image/infoimg.png"/>
                    <p className={style.nomeinfo}>Perguntas Frequentes</p>
                    <Image className={style.suportebtnimg} alt="" height={24} width={36} src="/Image/duvidasimg.png" />
                </div>
                <div className={style.ajuda}>
                    <Image className={style.infoimg} alt="" height={30} width={30} src="/Image/infoimg.png"/>
                    <p className={style.nomeinfo}>Falar com um Atendente</p>
                    <Image className={style.suportebtnimg} alt="" height={30} width={22} src="/Image/atendenteimg.png" />
                </div>
                <div className={style.ajuda}>
                    <Image className={style.infoimg} alt="" height={30} width={30} src="/Image/infoimg.png"/>
                    <p className={style.nomeinfo}>Falar com nosso atendente virtual</p>
                    <Image className={style.suportebtnimg} alt="" height={27} width={32} src="/Image/roboatendeimg.png" />
                </div>
            </div>
        </div>
    )
}