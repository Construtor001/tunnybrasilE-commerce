import "../../globals.css"
import style from "./perfil.module.css"
import BarraMenuPerfil from "./cabecaPerfil"
import Image from "next/image"

export default function Perfil(){
    return(
        <div style={{height:"100vh", width:"100vw", overflow:"hidden"}}>
            <BarraMenuPerfil/>
            <div style={{display:"flex", background:"rgb(239,239,239)", height:"100%", width:"100%"}}>

                <div className={style.perfilOpcoes}>
                    <p className={style.tituloInfosPerfil}>Meus Pedidos</p>
                    <div>
                        <p className={style.opcoesInfosPerfil}>Pedidos</p>
                        <p className={style.opcoesInfosPerfil}>Preparando</p>
                        <p className={style.opcoesInfosPerfil}>Enviado</p>
                        <p className={style.opcoesInfosPerfil}>Recebido</p>
                    </div>
                    <p className={style.tituloInfosPerfil}>Informações pessoais</p>
                    <div>
                        <p className={style.opcoesInfosPerfil}>Editar Informações</p>
                    </div>
                    <p className={style.tituloInfosPerfil}>Carteira</p>
                    <div>
                        <p className={style.opcoesInfosPerfil}>Formas de pagamento</p>
                    </div>
                    <p className={style.tituloInfosPerfil}>Venda Conosco</p>
                    <div>
                        <p className={style.opcoesInfosPerfil}>Cadastre-se Já</p>
                    </div>
                    <p className={style.tituloInfosPerfil}>Politica de Privacidade</p>
                    <div>
                        <p className={style.opcoesInfosPerfil}>Termos de privacidade</p>
                    </div>

                    <div style={{display:"flex", alignItems:"center", width:"100%", justifyContent:"end", position:"relative"}}>
                        <Image quality={100} className={style.centrarlizar1} src="/Image/carrinhoLogin.svg" alt="" height={40} width={40}/>
                        <p className={style.customNomeLogin}>Custom</p>
                        <Image quality={100} className={style.centrarlizar2} src="/Image/XLogin.svg" alt="" height={40} width={40}/>
                    </div>
                </div>

                <div className={style.perfilArea}>
                    <div className={style.organizarNomepedidos}>
                        <div className={style.barraNomesBarra}>
                            <div className={style.nomesBarra}>Pedidos</div>
                            <div className={style.nomesBarra}>Preparando</div>
                            <div className={style.nomesBarra}>Enviados</div>
                            <div className={style.nomesBarra}>Recebidos</div>
                        </div>
                        <div className={style.barraPedidos}>
                            <div className={style.barraLocal}></div>
                        </div>
                    </div>
                    <div className={style.organizar2}>
                        <div className={style.filtro}>Frete Grátis</div>
                        <div className={style.filtro}>Entre R$50 - R$299</div>
                        <div className={style.filtro}>Entre R$300 - R$700</div>
                        <div className={style.filtro}>Entre R$700 - R$1000</div>
                        <div className={style.filtro}>Acima de R$1000</div>
                        <div className={style.filtro}>Prazo Curto</div>
                    </div>
                    <Image className={style.iconeNencontrado} src="/Image/iconNencontraMPedidos.svg" alt="" height={150} width={150}/>

                    <div className={style.organizarNomes}>
                        <div className={style.organizarNencontrado}>
                            <p className={style.nomeNencontrado}>Você não tem pedidos</p>
                            <p className={style.tristeNencontrado}>:(</p>
                        </div>
                        <p style={{marginLeft:"-19px", textDecoration:"underline"}} className={style.nomeNencontrado}>Trazer dos favoritos</p>
                    </div>

                    <div className={style.centroProdCustom}>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                        <div className={style.produtoCustom}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}