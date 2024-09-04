import "../../globals.css"
import style from "./pagamento.module.css"
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
                    </div>

                    <Image quality={100} className={style.iconePagamento} src="/Image/iconePagamento.svg" alt="" height={120} width={120}/>

                    <div className={style.organizarAdicoes}>
                        <p className={style.nomesAdicionados}>Formas Adicionadas</p>
                        <p className={style.nomesAdicionados}>Endereços Adicionados</p>
                    </div>
                    <p className={style.barra}></p>
                    <p className={style.barra2}></p>
                    
                    <div className={style.arrumarCartoes}>
                        <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                            <div className={style.organizarSelecionado}>
                                <p className={style.selecao}>
                                    <p className={style.selecionado}></p>
                                </p>
                                <p className={style.nomeCartao}>Cartão de crédito</p>
                                <p className={style.escolhido}>Escolhido</p>
                            </div>
                        </div>
                        <Image quality={100} className={style.cartao} src="/Image/cartaoPagamento.svg" alt="" height={120} width={120}/>
                        
                        <div className={style.organizarDeletar}>
                            <Image quality={100} src="/Image/botaoDeletarPagamento.svg" alt="" height={30} width={30}/>
                            <p className={style.nomeBotaoDeletar}>Deletar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}