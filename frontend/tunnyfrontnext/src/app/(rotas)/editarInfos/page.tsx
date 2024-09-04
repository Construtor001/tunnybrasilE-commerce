import "../../globals.css"
import style from "./editar.module.css"
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
                    <div className={style.arrumarTopo}>
                        <p className={style.editarInformacoes}>Editar Informações</p>
                        <Image className={style.imagemEditar} quality={100} src="/Image/imagemEditarInfos.svg" alt="" height={85} width={85}/>
                    </div>

                    <div style={{display:"flex", position:"absolute", zIndex:"1"}}>
                        <Image quality={100} src="/Image/fundoEditarInfos.svg" alt="" height={450} width={450}/>
                        <Image quality={100} src="/Image/fundoEditarInfos.svg" alt="" height={450} width={450}/>
                    </div>

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>Nome Completo</p>
                        <input type="text" className={style.inputEditarInfos} placeholder="João Pereira da Silva Santos"/>
                        <Image className={style.lapisEditar} quality={100} src="/Image/lapisEditar.svg" alt="" height={45} width={45}/>
                    </div>

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>Insira um novo email</p>
                        <input type="text" className={style.inputEditarInfos} placeholder="Joaopereira123@gmail.com"/>
                        <Image className={style.lapisEditar} quality={100} src="/Image/lapisEditar.svg" alt="" height={45} width={45}/>
                    </div>

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>Data de aniversário</p>
                        <input type="text" className={style.inputEditarInfos} placeholder="19/03/2002"/>
                        <Image className={style.lapisEditar} quality={100} src="/Image/lapisEditar.svg" alt="" height={45} width={45}/>
                    </div>

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>CPF</p>
                        <input type="text" className={style.inputEditarInfos} placeholder="245.016.335-69"/>
                        <Image className={style.lapisEditar} quality={100} src="/Image/lapisEditar.svg" alt="" height={45} width={45}/>
                    </div>

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>Número de telefone</p>
                        <input type="text" className={style.inputEditarInfos} placeholder="(71) 98706-6509"/>
                        <Image className={style.lapisEditar} quality={100} src="/Image/lapisEditar.svg" alt="" height={45} width={45}/>
                    </div>

                    <div className={style.arrumarBotoes}>

                        <div className={style.botaoSalvar}>
                            Salvar
                            <Image quality={100} src="/Image/Vsalvar.svg" alt="" height={38} width={38}/>
                        </div>

                        <div className={style.botaoCancelar}>
                            Cancelar
                            <Image quality={100} src="/Image/Xcancelar.svg" alt="" height={40} width={40}/>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    )
}