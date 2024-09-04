import "./globals.css"
import style from "./cupons.module.css"
import Image from "next/image"

export default function Cupons(){
    return(
        <div className={style.fundo}>
            <div className={style.barraMenu}>
                <p className={style.nomefavoritos}>Válidos</p>
                <p className={style.nomeVisto}>Expirados</p>

                <Image className={style.barraimgf} width={32} height={29} src="/Image/voltar.png" alt=""/>
                <div className={style.organizar}>
                    <div className={style.barraFavEVist}>
                        <div className={style.barraselecionada}></div>
                    </div>
                </div>
            </div>
            <div className={style.cartoes}>
                <div className={style.nomeCupons}>Seus Cupons</div>
                <div className={style.cartao}>
                    <Image className={style.banner} alt="" src="/Image/cartaoCupom.png" width={800} height={300}/>
                    <Image className={style.usar} alt="" src="/Image/botaoUsar.png" width={75} height={35}/>
                </div>
                <div className={style.cartao}>
                    <Image className={style.banner} alt="" src="/Image/cartaoCupom.png" width={800} height={300}/>
                    <Image className={style.usar} alt="" src="/Image/botaoUsar.png" width={75} height={35}/>
                </div>
            </div>

        </div>
    )
}