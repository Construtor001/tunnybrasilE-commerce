import Image from "next/image"
import style from "./bannerSkelleton.module.css"

export default function bannerSkelleton(){
    return(
        <>
            <div className={style.banner}>
                <div className={style.juncao3}>
                    <Image src="/Image/bolinhaBranca1.png" width={9} height={9} alt="bolinha branca" className={style.bola}/>
                    <Image src="/Image/bolinhaBranca2.png" width={9} height={9} alt="bolinha branca" className={style.bola}/>
                    <Image src="/Image/bolinhaCinza.png" width={9} height={9} alt="bolinha branca" className={style.bola}/>
                </div>
            </div>
        </>
    )
}