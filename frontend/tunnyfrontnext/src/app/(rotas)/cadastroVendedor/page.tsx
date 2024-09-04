import "../../globals.css"
import style from "./cadastroPagamento.module.css"
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

                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div className={style.organizarBarraProgresso}>
                            <p className={style.nomeEtapas}>etapa 1</p>
                            <p className={style.nomeEtapas}>etapa 2</p>
                            <p className={style.nomeEtapas}>etapa 3</p>
                            <p className={style.nomeEtapas}>etapa 4</p>
                        </div>
                        <div className={style.barraFora}>
                            <p className={style.barraDentro}></p>
                        </div>
                    </div>

                    <div className={style.arrumarTopo}>
                        <p className={style.editarInformacoes}>Cadastro</p>
                    </div>
                    
                    <Image quality={100} className={style.iconePagamento} src="/Image/iconeCadastro.svg" alt="" height={100} width={100}/>

                    <div className={style.organizarDnv}>
                        <div className={style.arrumar}>
                            <p className={style.nomearCampo}>Nome Completo</p>
                            <input type="text" className={style.inputEditarInfos} placeholder="João Pereira da Silva Santos"/>
                        </div>

                        <div className={style.arrumar}>
                            <p className={style.nomearCampo}>Insira um novo email</p>
                            <input type="text" className={style.inputEditarInfos} placeholder="Joaopereira123@gmail.com"/>
                        </div>

                        <div className={style.arrumar}>
                            <p className={style.nomearCampo}>Data de aniversário</p>
                            <input type="text" className={style.inputEditarInfos} placeholder="19/03/2002"/>
                        </div>

                        <div className={style.arrumar}>
                            <p className={style.nomearCampo}>CPF</p>
                            <input type="text" className={style.inputEditarInfos} placeholder="245.016.335-69"/>
                        </div>

                        <div className={style.arrumar}>
                            <p className={style.nomearCampo}>Número de telefone</p>
                            <input type="text" className={style.inputEditarInfos} placeholder="(71) 98706-6509"/>
                        </div>
                        
                        <div className={style.arrumar}>
                            <p className={style.nomearCampo}>Número de telefone</p>
                            <input type="text" className={style.inputEditarInfos} placeholder="(71) 98706-6509"/>
                        </div>
                    </div>

                    <div className={style.botaoArrumar}>
                        <input type="button" value="Avançar" className={style.botaoAvancar}/>
                    </div>

                </div>
            </div>
        </div>
    )
}