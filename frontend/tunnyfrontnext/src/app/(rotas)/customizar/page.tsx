"use client"

import "../../globals.css"
import style from "./customizar.module.css"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Customizar(){
    
    return(
        <div className={style.pagina}>
            
            <div className={style.customizar}>

                <div className={style.alinhar_logo}>
                    <Image className={style.logo_img} alt="" height={60} width={130} src="/Image/logo.png"/>
                </div>

                <div className={style.alinhar_produto}>
                    <div className={style.produto}></div>
                </div>

                <div className={style.icones}>

                    <div className={style.alinhar_icone}>
                        <Image style={{marginTop:"10px"}} alt="" height={50} width={50} src="/Image/emoji.svg"/>
                        <p className={style.nome_icone}>Emoji</p>
                    </div>
                    <div className={style.alinhar_icone}>
                        <Image style={{marginTop:"10px"}} alt="" height={50} width={50} src="/Image/icone.svg"/>
                        <p className={style.nome_icone}>Icone</p>
                    </div>
                    <div className={style.alinhar_icone}>
                        <Image style={{marginTop:"10px"}} alt="" height={50} width={50} src="/Image/textura.svg"/>
                        <p className={style.nome_icone}>Texturas</p>
                    </div>

                    <div className={style.alinhar_importar}>
                        <div className={style.importar}>
                            <div className={style.seta_h}></div>
                            <div className={style.seta_v}></div>
                        </div>
                        <p className={style.nome_importar}>Importar da Galeria</p>
                    </div>
                    
                </div>

                <div className={style.rodape}>
                    <p className={style.nome_cores}>Cores</p>
                    <div className={style.todas_cores}>
                        <div style={{background:"blue"}} className={style.cores}></div>
                        <div style={{background:"red"}} className={style.cores}></div>
                        <div style={{background:"green"}} className={style.cores}></div>
                        <div style={{background:"purple"}} className={style.cores}></div>
                        <div style={{background:"pink"}} className={style.cores}></div>
                        <div style={{background:"gray"}} className={style.cores}></div>
                        <div style={{background:"yellow"}} className={style.cores}></div>
                        <div style={{background:"blue"}} className={style.cores}></div>
                        <div style={{background:"orange"}} className={style.cores}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}