import "../../globals.css"
import style from "./cadastroPagamento.module.css"
import BarraMenuPerfil from "./cabecaPerfil"
import Image from "next/image"

export default function Perfil(){
    return(
        <div style={{height:"100vh", width:"100vw", overflowX:"hidden"}}>
            <BarraMenuPerfil/>
            <div className={style.arrumarPagina}>

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

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>Nome da loja</p>
                        <input type="text" className={style.NomeDaLoja} placeholder="Digite um nome"/>
                    </div>

                    <div className={style.arrumar}>
                        <p className={style.nomearCampo}>Descrição da sua loja</p>
                        <input type="text" className={style.DescricaoDaSuaLoja}placeholder="Digite uma descrição"/>
                    </div>

                    <div className={style.arrumarFoto}>
                        <div className={style.inputEditarInfos}>    
                            <p className={style.cruz1}></p>
                            <p className={style.cruz2}></p>
                        </div>
                    </div>

                    <p className={style.nomeFotoDePerfil}>Foto de perfil</p>

                    <div className={style.arrumarTiposDeCores}>
                        <p className={style.NomeCorDaSuaLoja}>Cor da sua loja</p>

                        <div className={style.arrumarCores}>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>

                        <div className={style.arrumarPaleta}>
                            <Image className={style.iconePaletaDeCores} quality={100} src="/Image/iconePaletaDeCores.svg" alt="" height={40} width={40}/>
                            <div className={style.escolherCor}></div>
                            <p className={style.nomePaletaDeCores}>Paleta de cores</p>
                        </div>

                    </div>

                    <div className={style.organizarSelecionarCategoria}>
                        <select className={style.selecionarCategoria}>
                            <option>Selecione a categoria da sua loja</option>
                            <option>cama</option>
                            <option>sofa</option>
                            <option>geladeira</option>
                        </select>
                    </div>

                    <div className={style.botaoArrumar}>
                        <input type="button" value="Avançar" className={style.botaoAvancar}/>
                    </div>
                    
                </div>

                <div className={style.margem}></div>

            </div>
        </div>
    )
}