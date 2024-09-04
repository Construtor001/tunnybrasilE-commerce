import "./globals.css"
import Image from "next/image"
import style from "./produtos-customizaveis.module.css"
import Topo from "./topo"

export default function ProdutosCustomizaveis(){
    return(
        <>
            <Topo/>
            <div className={style.pagina}>

                <div className={style.catalogo}>
                    <h1 className={style.letras}>
                        <span>C</span>
                        <span>u</span>
                        <span>s</span>
                        <span>t</span>
                        <span>o</span>
                        <span>m</span>
                        <Image src={"/Image/pincelDoNome.svg"} alt="" height={100} width={160}/>
                        <span>z</span>
                        <span>a</span>
                        <span>v</span>
                        <span>e</span>
                        <span>i</span>
                        <span>s</span>
                    </h1>

                    <div className={style.centroCatalogoAjuste}>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                        <div className={style.ProdutoCatalogoSelecao}></div>
                    </div>

                    <div className={style.organizarImgs}>
                        <Image src={"/Image/filtro.svg"} alt="" width={43} height={48}/>
                        <Image src={"/Image/lupa.svg"} alt="" width={41} height={41}/>
                    </div>
                </div>

                <div className={style.centroProdCustom}>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                </div>

                <div className={style.centroProdCustom}>
                <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                </div>

                <div className={style.centroProdCustom}>
                <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                    <div className={style.produtoCustom}>
                        <div className={style.customizavelNome}>
                            <p>Customizável</p>
                        </div>
                        <Image
                        className={style.pincelProd} src={"/Image/pincelProdutoCustomizavel.svg"} alt="" width={41} height={41}/>
                    </div>
                </div>

            </div>
        </>
    )
}