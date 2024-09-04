import "../../globals.css"
import style from "./conversa.module.css"
import Image from "next/image"

export default function Conversa(){
    return(
        <div>
            <div className={style.barraMenu}>

                <p className={style.nomefavoritos}>Amigos</p>
                <p className={style.nomeVisto}>Lojas</p>

                <Image className={style.barraimgf} width={28} height={27} src="/Image/lupa.png" alt=""/>
                <div className={style.organizar}>
                <div className={style.barraFavEVist}>
                    <div className={style.barraselecionada}></div>
                </div>
                </div>
                <Image className={style.logoimg} width={135} height={60} src="/Image/logo.png" alt=""/>
                <Image className={style.barraimgf} width={29} height={29} src="/Image/adicionar.png" alt=""/>
            </div>
            <div className={style.pessoas}>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
                <div className={style.pessoa}>
                    <div className={style.fotoPerfil}></div>
                    <div className={style.conversaPessoa}></div>
                </div>
            </div>
        </div>
    )
}