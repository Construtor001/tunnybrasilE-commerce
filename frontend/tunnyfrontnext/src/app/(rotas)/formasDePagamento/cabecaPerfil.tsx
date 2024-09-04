"use client"

import "../../globals.css"
import style from "./head.module.css"
import Image from "next/image"
import Link from "next/link"

export default function BarraMenuPerfil(){

    return(
        <div style={{position:"relative"}}>
            <div className={style.barramenu}>
                <div className={style.juncao}>
                    <Image width={32} height={30} src="/Image/voltar.png" alt="logo" className={style.barraimg}/>
                </div>
                <div className={style.englob}>
                    <p className={style.nomeSugestoes}>Perfil</p>
                </div>
                <Image src="/Image/logo.png" alt="logo" width={130} height={64} className={style.logoimg}/>
            </div>

            <div className={style.barraconteudo}>
                <Link style={{textDecoration:"none"}} href={"/cupons"}>
                    <p style={{marginLeft:"15px", marginRight:"15px" }} className={style.conteudos}>
                        <Image src="/Image/cupom.png" alt="" width={27} height={17} className={style.tamanhoCupo}/>Cupons
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/suporte"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/suporte.png" alt="" className={style.tamanhoSupo} width={32} height={25}/>Suporte ao cliente
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/meusPedidos"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/pedidos.png" alt="" width={27} height={22} className={style.tamanhoPedi}/>Meus Pedidos
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/customizar"}>
                    <div className={style.organizarBorda}>
                        <p style={{marginLeft:"15px", marginRight:"15px", marginBottom:"-2px", marginTop:"-4px"}} className={style.conteudos}>
                            <Image style={{marginLeft:"-12px", marginTop:"4px", marginBottom:"4px"}} src="/Image/pincelNome.svg" alt="" width={24} height={24}/>
                                <bdo className={style.tamanhoCadaa}>Produtos</bdo> 
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(255,0,0)"}}>C</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(255,0,220)"}}>u</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(198,0,255)"}}>s</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(103,3,255)"}}>t</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(32,0,255)"}}>o</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(0,85,255)"}}>m</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(0,185,255)"}}>i</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(0,255,160)"}}>z</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(32,255,46)"}}>a</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(205,255,0)"}}>v</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(255,164,7)"}}>e</bdo>
                                <bdo className={style.tamanhoCustom} style={{color:"rgb(255,119,0)"}}>i</bdo>
                                <bdo className={style.tamanhoCustom} style={{marginRight:"-10px",color:"rgb(255,3,3)"}}>s</bdo>
                        </p>
                    </div>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/sugestoes"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/sugestao.png" alt="" width={24} height={22} className={style.tamanhoSuge}/>Sugestões
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/conversa"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/conversa.png" alt="" className={style.tamanhoConv} width={24} height={22}/>Conversa
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/favoritos"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/favorito.png" alt="" width={32} height={29} className={style.tamanhoFavo}/>Favoritos
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/cesta"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/cesta.png" alt="" width={25} height={20} className={style.tamanhoCest}/>Cesta
                    </p>
                </Link>
                <Link style={{textDecoration:"none"}} href={"/#"}>
                    <p style={{marginLeft:"15px", marginRight:"15px"}} className={style.conteudos}>
                        <Image src="/Image/notificacoes.png" width={27} height={22} alt="" className={style.tamanhoNoti}/>Notificações
                    </p>
                </Link>
            </div>
        </div>
    )
}