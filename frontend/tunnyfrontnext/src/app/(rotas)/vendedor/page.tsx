"use client"

import "../../globals.css"
import style from "./vendedor.module.css"
import Image from "next/image"
import Link from "next/link"
import Prod from "../produtos/produto"
import { Rodape } from "@/app/rodape"
import { useRouter } from "next/navigation"

export default function Vendedor(){
    
    const router = useRouter()
    const voltar =  router.forward

    return(
        <div className={style.pagina}>
            <div className={style.alinhar_banner}>

                <div className={style.alinhar_banner_botoes}>
                    
                    <div className={style.btn_voltar}>
                        <Image className={style.imgbanner} alt="" height={30} width={35} src="/Image/voltar.png"/>
                        <p className={style.nome_banner_botoes} onClick={voltar}>Voltar</p>
                    </div>

                    <div className={style.fundoBanner}>

                        <Image className={style.imgbanner} alt="" height={270} width={1000} src="/Image/fundoBanner.png"/>

                        <div className={style.ft_perfil}>
                            <Image className={style.imgbanner} alt="" height={150} width={150} src="/Image/fotoPerfil.png"/>
                        </div>

                    </div>

                    <div className={style.btn_cesta}>
                        <Image className={style.imgbanner} alt="" height={35} width={30} src="/Image/cestaimg.svg"/>
                        <p className={style.nome_banner_botoes}>Cesta</p>
                    </div>

                </div>

                <div className={style.alinhar_nome_seguidores}>

                    <div className={style.compartilhar}>
                        <p className={style.nome_compartilhar}>Compartilhar</p>
                        <Image alt="" height={30} width={15} src="/Image/compartilharimg.svg"/>
                    </div>

                    <div className={style.nome_loja}>
                        <p>Lojão SC</p>
                    </div>

                    <div className={style.seguir}>
                        <p className={style.nome_seguir}>Seguir</p>
                        <Image alt="" height={30} width={30} src="/Image/adicionarimg.svg"/>
                    </div>

                </div>

                <div className={style.alinhar_informacoes}>

                    <div>
                        <p style={{marginRight:"80px"}} className={style.nome}>Seguidores 45</p>
                    </div>

                    <p className={style.barra_divisao}></p>

                    <div>
                        <p className={style.nome}>Seguindo 13</p>
                    </div>

                    <p className={style.barra_divisao}></p>

                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <p className={style.nome}>Classificações</p>
                        <p style={{marginLeft:"-35px", fontWeight:"bold",fontSize:"20px", marginRight:"5px"}}>4,3</p>
                        <Image alt="" height={25} width={25} src="/Image/estrelaMeusPedidos.png"/>
                    </div>

                </div>

                <div className={style.alinhar_descricao}>
                        <p className={style.descricao_loja}>Aqui você encontra diversas promoções todos os dias!</p>
                        <p className={style.descricao_loja}>Venha conferir</p>
                </div>
                
                <div className={style.alinhar_barra}>

                    <div className={style.barra_menu}>
                        <p className={style.menu_nome}>Produtos</p>

                        <p className={style.barra_divisao_menu}></p>

                        <p className={style.menu_nome}>catalogo</p>

                        <p className={style.barra_divisao_menu}></p>

                        <p className={style.menu_nome}>ofertas</p>
                    </div>

                </div>
                
                <div className={style.alinhar_produtos}>
                    <div className={style.centroProdCustom}>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                    </div>

                    <div className={style.centroProdCustom}>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                    </div>

                    <div className={style.centroProdCustom}>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                        <Link style={{textDecoration: "none"}} href={"/produtos"}>
                            <Prod/>
                        </Link>
                    </div>
                </div>

                <Rodape/>
            </div>
        </div>
    )
}