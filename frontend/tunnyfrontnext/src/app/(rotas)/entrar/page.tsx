import "../../globals.css"
import BarraMenuEntrar from "./cabecaEntrar"
import style from "./entrar.module.css"
import Image from "next/image"

export default function Entrar(){
    return(
        <>
            <BarraMenuEntrar/>
            <div className={style.centralizar}>
                <div className={style.cadastro}>
                    <div style={{display:"flex", alignItems:"center", width:"100%", justifyContent:"end", position:"relative"}}>
                        <Image quality={100} className={style.centrarlizar1} src="/Image/carrinhoLogin.svg" alt="" height={40} width={40}/>
                        <p className={style.customNomeLogin}>Custom</p>
                        <Image quality={100} className={style.centrarlizar2} src="/Image/XLogin.svg" alt="" height={40} width={40}/>
                    </div>
                    <p className={style.centralizarLogin}>Login</p>
                    <input placeholder="Digite seu Email" className={style.centralizarEmail}/>
                    <input placeholder="Digite sua senha" className={style.centralizarSenha}/>
                    <p className={style.centralizarNome}>Você também pode entrar com</p>
                    <div className={style.organizar}>
                        <div className={style.organizar2}>
                            <Image className={style.centralizarGmail} src="/Image/emailLogin.svg" alt="" height={30} width={30}/>
                            <p className={style.fontNome}>Gmail</p>
                        </div>
                        <div className={style.organizar2}>    
                            <Image className={style.centralizarFacebook} src="/Image/facebookLogin.svg" alt="" height={30} width={30}/>
                            <p className={style.fontNome}>Facebook</p>
                        </div>
                    </div>
                    <input className={style.botaoAvancar} type="button" value="Entrar"/>
                    <p className={style.centralizarCriarConta}>Não tem uma conta? Crie agora <bdo className={style.cliqueaqui}>clicando aqui</bdo></p>
                </div>
            </div>
        </>
    )
}