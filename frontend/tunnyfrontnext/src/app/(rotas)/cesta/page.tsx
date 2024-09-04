import "../../globals.css"
import style from "./cesta.module.css"
import Image from "next/image"

export default function Cesta(){
    return(
        <div>
            <div className={style.barraMenu}>
                <Image className={style.barraimgf} width={36} height={27} src="/Image/barra.png" alt=""/>
                <div className={style.organizar}>
                    <div className={style.barraFavEVist}>Cesta</div>
                </div>
                <Image className={style.logoimg} width={135} height={60} src="/Image/logo.png" alt=""/>
                <Image className={style.barraimgf} width={32} height={29} src="/Image/voltar.png" alt=""/>
            </div>

            <div className={style.bannerf}>
                <Image className={style.estrelaFav} alt="" src="/Image/cestaDeFundo.png" width={300} height={230}/>
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