import style from "./produtoAmostra.module.css"
import Image from "next/image"

export default function ProdutoAmostra(){
    return(
        <div className={style.corpo_prod}>
            <div className={style.organizar_imagem}>
                <Image className={style.imagem_prod} src="/Image/casaco.png" height={70} width={70} alt=""/>
                <Image className={style.imagem_estrela} src="/Image/estrela.png" height={16} width={15} alt=""/>
            </div>
            <div className={style.organizar_textos}>
                <p className={style.organizar_texto_1}>Moletom masculino causal forro quente anime macaco d luffy preto</p>
                <p className={style.organizar_texto_2}>R$ 169,70 no Pix</p>
            </div>

            <input className={style.botao_adicionar} value="Adicionar ao carrinho"/>
        </div>
    )
}