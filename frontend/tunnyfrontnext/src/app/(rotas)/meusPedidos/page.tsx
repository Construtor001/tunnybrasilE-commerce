"use client"

import "../../globals.css"
import style from "./meusPedidos.module.css"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export default function MeusPedidos(){

    const rota = usePathname()
    const rotasb = rota.slice(1)
    const addrota = useRouter()

    if(rotasb == "meuspedidos"){
        addrota.push("/meusPedidos")
    }

    return(
        <div>
            <div className={style.barramenu}>
                <div className={style.juncao}>
                    <Image width={32} height={29} src="/Image/voltar.png" alt="logo" className={style.barraimg}/>
                </div>
                <div className={style.nomePedidos}>Meus Pedidos</div>
                    <Image src="/Image/logo.png" alt="logo" width={108} height={49} className={style.logoimg}/>
                <div className={style.juntar2}>
                    <Image src="/Image/perfil.png" alt="pefil" width={35} height={35} className={style.perfilimg}/>
                    <Image src="/Image/cadastrar.png" alt="cadstro" className={style.cadastroimg} width={80} height={35}/>
                </div>
            </div>

            <div className={style.barraPedidos}>
                <div className={style.barraLocal}></div>
            </div>

            <Image className={style.meuspedidos} width={500} height={200} alt="" src="/Image/pedido.png"/>

            <div className={style.juncao3}>
                <div className={style.nomePedidosEstrela}>Aqui estão seus pedidos</div>
                <Image alt="" height={30} width={30} src="/Image/estrelaMeusPedidos.png"/>
            </div>

            <div className={style.barraNomesBarra}>
                <div className={style.nomesBarra}>Peidos</div>
                <div className={style.nomesBarra}>Preparando</div>
                <div className={style.nomesBarra}>Enviados</div>
                <div className={style.nomesBarra}>Recebidos</div>
            </div>
        </div>
    )
}