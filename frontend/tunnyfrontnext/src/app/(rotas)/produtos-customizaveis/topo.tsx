import style from "./topo.module.css"
import Image from "next/image"

export default function topo(){
    return(
        <>
            <div className={style.centralizarTopo}>
                <div className={style.barraMenu}>

                    <Image className={style.barraimgf} width={36} height={27} src="/Image/barra.png" alt=""/>
            
                    <Image className={style.logoimg} width={135} height={60} src="/Image/logo.png" alt=""/>
                    <Image className={style.cestaimgf} width={32} height={25} src="/Image/cestaBranca.png" alt=""/>

                </div>
            </div>
        </>
    )
}