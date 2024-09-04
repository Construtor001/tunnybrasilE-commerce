import style from "./notificacoes.module.css"
import "../../globals.css"
import Image from "next/image"

export default function Notificacoes(){
    return(
        <>
            <div className={style.telaFundo}>
                <div className={style.fundo}>

                    <div className={style.organizarTopo}>
                        <Image className={style.iconeVoltar} src={"/Image/retornar.svg"} alt="" height={34} width={40}/>

                        <p className={style.nomeNotificacoes}>Notificações</p>
                    </div> 

                    <div className={style.fundoNotificacao}>
                        <p className={style.nomeNotificacao}>vá consertar seu nome vai seu poha</p>
                        
                        <div className={style.organizarSilenciar}>
                            <Image className={style.iconeSilenciar} src={"/Image/silenciarIcone.svg"} alt="" height={22} width={36}/>
                            
                            <p className={style.nomeSilenciar}>Silênciar</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}