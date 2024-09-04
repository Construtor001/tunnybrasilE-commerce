import Image from "next/image"
import style from "./produtosCarrinho.module.css"

export default function produtosCarrinho(){
    return(
        <div className={style.corpo}>
            <div className={style.foto}>
                <p className={style.nome_codigo}>Código do produto: <bdo className={style.codigo}>L27-0508-QXV-39</bdo></p>
                <Image className={style.imagem_prod} src="/Image/casaco.png" height={116} width={117} alt=""/>
                <p className={style.preco_desconto}>R$ 59,80</p>
                <p className={style.preco}>R$ 199,89 à vista</p>
            </div>

            <div className={style.nome}>
                <p className={style.nome_literal}>Moletom masculino casual forro quente anime macaco d luffy hoodies dos homens velo uma peça moletom jaqueta de alta qualidade</p>

                <div className={style.propriedades}>
                    <p className={style.propriedades_cada}>Qualidade: 1</p>
                    <p className={style.propriedades_cada}>Cor: Preto</p>
                    <p className={style.propriedades_cada}>Tamanho: M</p>
                </div>
            </div>

            <div className={style.manipular}>
                <p className={style.Excluir}>Excluir</p>
                <div className={style.quantidade_favoritar}>
                    <div className={style.organizar_quantidade}>
                        <Image className={style.imagem_prod_2} src="/Image/seta_2.png" height={13} width={8} alt=""/>
                        <p className={style.numero_quantidade}>1</p>
                        <Image className={style.imagem_seta_ir} src="/Image/seta_2.png" height={13} width={8} alt=""/>
                    </div>
                    <Image className={style.imagem_coracao} src="/Image/coracao.png" height={15} width={17} alt=""/>
                </div>
            </div>
        </div>
    )
}