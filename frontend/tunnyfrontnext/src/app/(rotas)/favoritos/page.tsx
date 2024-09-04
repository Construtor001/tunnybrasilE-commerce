import "../../globals.css"
import style from "./favoritos.module.css"
import Image from "next/image"

export default function Favoritos(){
    return(
        <div>
            <div className={style.barraMenu}>

                <p className={style.nomefavoritos}>Favoritos</p>
                <p className={style.nomeVisto}>Vistos Recentemente</p>

                <Image className={style.barraimgf} width={36} height={27} src="/Image/barra.png" alt=""/>
                <div className={style.organizar}>
                    <div className={style.barraFavEVist}>
                        <div className={style.barraselecionada}></div>
                    </div>
                </div>
                <Image className={style.logoimg} width={135} height={60} src="/Image/logo.png" alt=""/>
                <Image className={style.barraimgf} width={32} height={25} src="/Image/cestaBranca.png" alt=""/>
            </div>

            <div className={style.bannerf}>
                <Image className={style.estrelaFav} alt="" src="/Image/estrelaFav.png" width={300} height={270}/>
                <p className={style.nomeFav}>
                    Você ainda não tem produtos favoritos
                    <Image className={style.carinha} alt="" src="/Image/carinhaTriste.png" width={35} height={20}/>
                </p>
            </div>

            <div className={style.nomeProdutos}>Confira esses produtos</div>

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
    )
}