"use client"
import "./globals.css"
import style from "./Home.module.css"
import style2 from "./head.module.css"
import Image from "next/image"
import Link from "next/link"
import ProdTeste from "./(rotas)/produtos/produtoTeste"
import ProdTeste2 from "./(rotas)/produtos_2/produtoTeste2"
import BarraMenu from "./cabeca"
import { Rodape } from "./rodape"
import { RefObject, Suspense, useEffect, useRef, useState } from "react"

import { produtos, produtos2, value, catalogo2Receber, catalogoReceber, imagemBannerReceber, imagemBannerDuploReceber } from "../interfaces"

import BannerSkelleton from "../skelletons/bannerSkelleton"
import React from "react"
import { useDispatch } from "react-redux"
import { esconderBotaoPesquisa, setProdutosPesquisaRecomendados } from "./GlobalRedux/reducers/reducers"

export interface dadosRecomendados {
    id: number 
    produto: string
    quantidade: number
    tempo: number
}

export default function Home() {
    
    let containerInfos: RefObject<HTMLDivElement> = useRef(null);
    let [dado, setDado] = useState<value[]>([]);
    let [indicadoresBanner, setIndicadoresBanner] = useState<number[]>([1])
    let banner_test = ["/Image/banner_1", "/Image/banner_2"]
    let [indicadoresBanner2, setIndicadoresBanner2] = useState<Omit<imagemBannerReceber, "id">[]>([])
    let [indicadoresBannerDuplo, setIndicadoresBannerDuplo] = useState<Omit<imagemBannerDuploReceber, "id">[]>([])
    let [produtos, setProdutos] = useState<Omit<produtos, "tipo">[]>([])

    let [produtos2, setProdutos2] = useState<Omit<produtos2, "tipo">[]>([])
    let [indicadoresCatalogo, setIndicadoresCatalogo] = useState<Omit<catalogoReceber, "id">[]>([])
    let [indicadoresCatalogo2, setIndicadoresCatalogo2] = useState<Omit<catalogo2Receber, "id">[]>([])

    let dispatch = useDispatch()

    let [tamanhoContainerSlides, setTamanhoContainerSlides] = useState<number>()
    let [tamanhoSlide, setTamanhoSlide] = useState<number>()
    const slideRef: RefObject<HTMLDivElement> = useRef(null);

    const indicadoresRefs = indicadoresBanner.map(() => React.createRef<HTMLDivElement>());

    let val = 0;
    let tempo = 15000
  
    function add() {
        val = (val + tamanhoSlide!!) % ((dado.length) * tamanhoSlide!!);
    }

    function mostrar(event: React.MouseEvent<HTMLDivElement>){
        let valorNumerico;
        
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        
        var lugar = 0

        indicadoresRefs.find((ele, ind)=>{
            if(ele.current === event.target){
                lugar = ind
            }
        })

        var posi = tamanhoSlide

        val = posi!! * lugar

        if (slideRef.current) {
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        
        for(var i = 0; i < (dado.length); i++){
                if(indicadoresRefs[lugar].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == lugar){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
        }

    }

    setInterval(mover, tempo)


    function frente() {
        let valorNumerico;
        if (slideRef.current) {
            if(val<(((100/dado.length)*dado.length)-100/dado.length)){
                val += (100 / (dado.length))
            }else{
                val = 0
            }
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        var ind = 0
        var index = 0
        
        for(var i = 0; i < (dado.length); i++){
            if(index.toFixed(2) === valorNumerico?.toFixed(2)){
                if(indicadoresRefs[ind].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == ind){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
            }else{
                index += (tamanhoSlide!!)
                ind += 1
            }
        }
    }

    function voltar() {
        let valorNumerico;
        if (slideRef.current) {
            if(val>0){
                val -= (100 / (dado.length))
            }else{
                val = ((100 / (dado.length)) * (dado.length - 1))
            }
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        var ind = 0
        var index = 0
        
        for(var i = 0; i < (dado.length); i++){
            if(index.toFixed(2) === valorNumerico?.toFixed(2)){
                if(indicadoresRefs[ind].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == ind){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
            }else{
                index += (tamanhoSlide!!)
                ind += 1
            }
        }
    }


    function mover() {
        let valorNumerico;
        if (slideRef.current) {
            add()
            slideRef.current.style.marginLeft = `-${val}%` ;
        }
        if(slideRef.current){
            const valor = slideRef.current.style.marginLeft;
            valorNumerico = parseFloat(valor.replace(/[-%]/g, ''));
        }
        var ind = 0
        var index = 0
        
        for(var i = 0; i < (dado.length); i++){
            if(index.toFixed(2) === valorNumerico?.toFixed(2)){
                if(indicadoresRefs[ind].current){
                    indicadoresRefs.map((item, indice)=>{
                        if(indice == ind){
                            item.current!!.style.background = "black"
                            item.current!!.style.transition = "0.5s"
                        }else{
                            item.current!!.style.background = "rgb(167, 167, 167)"
                            item.current!!.style.transition = "0.5s"
                        }
                    })
                    break;
                }
            }else{
                index += (tamanhoSlide!!)
                ind += 1
            }
        }
    }


    async function retorno() {
        try {
            const dados = await fetch("http://localhost:3030");
            const dadosRecomendados = await fetch("http://localhost:3030/pesquisa/recomendados")
            const users = await dados.json();
            const dadosRec = await dadosRecomendados.json()
            setDado(users.banner);
            var imagesBanner: value[] = users.banner
            var imagesBanner2: imagemBannerReceber[] = users.banner2
            var imagesBannerDuplo: imagemBannerDuploReceber[] = users.bannerDuplo
            var imageCatalogo: catalogoReceber[] = users.catalogo
            var imageCatalogo2: catalogo2Receber[] = users.catalogo2
            var produtos: produtos[] = users.produto
            var produtos2: produtos2[] = users.produto2
            var recomendados: dadosRecomendados[] = dadosRec

            const novosIndicadores: number[] = []; 
            const novasImagensBanner2: Omit<imagemBannerReceber, "id">[] = []; 
            const novasImagensBannerDuplo: Omit<imagemBannerDuploReceber, "id">[] = []; 
            const novosIndicadoresCatalogo: Omit<catalogoReceber, "id">[] = []; 
            const novosIndicadoresCatalogo2: Omit<catalogo2Receber, "id">[] = []; 
            const novosProdutos: Omit<produtos, "tipo">[] = []; 
            const novosProdutos2: Omit<produtos2, "tipo">[] = []; 

            imagesBanner.forEach((item) => {
                const numero = Number(item.id);
                if (!novosIndicadores.includes(numero)) {
                    novosIndicadores.push(numero);
                }
            });


            imagesBanner2.forEach((item) => {
                const numero = item.imagem;
                if (!novasImagensBanner2.includes({imagem: numero})) {
                    novasImagensBanner2.push({imagem: numero});
                }
            });

            imagesBannerDuplo.forEach((item) => {
                const imagem1 = item.imagem1;
                const imagem2 = item.imagem2;
                if (!novasImagensBannerDuplo.includes({imagem1: imagem1, imagem2: imagem2})) {
                    novasImagensBannerDuplo.push({imagem1: imagem1, imagem2: imagem2});
                }
            });

            imageCatalogo.forEach((item) => {
                const numeroCatalogo = item.imagem
                const nomeCatalogo = item.nome
                novosIndicadoresCatalogo.push({imagem: numeroCatalogo, nome: nomeCatalogo});
            });

            imageCatalogo2.forEach((item) => {
                const numeroCatalogo2 = item.imagem
                const nomeCatalogo2 = item.nome
                novosIndicadoresCatalogo2.push({imagem: numeroCatalogo2, nome: nomeCatalogo2});
            });

            produtos.forEach((item) => {
                const idProd = item.id
                const descontoProd = item.desconto
                const nomeProd = item.nome;
                const avaliacoesProd = item.avaliacoes
                const estrelasQuantProd = Number(item.estrelasQuantidade)
                const precoProd = Number(item.preco)
                const urlProd = item.url
                const formaDePagamentoProd = item.formaDePagamento 
                const sobreProd = item.sobre
                novosProdutos.push({id: idProd, url: urlProd, desconto: descontoProd, nome: nomeProd, avaliacoes: avaliacoesProd, estrelasQuantidade: estrelasQuantProd, preco: precoProd, formaDePagamento: formaDePagamentoProd, sobre: sobreProd});
            });

            produtos2.forEach((item) => {
                const idProd2 = item.id
                const descontoProd2 = item.desconto
                const nomeProd2 = item.nome;
                const avaliacoesProd2 = item.avaliacoes
                const estrelasQuantProd2 = Number(item.estrelasQuantidade)
                const precoProd2 = Number(item.preco)
                const urlProd2 = item.url
                const formaDePagamentoProd2 = item.formaDePagamento
                const sobreProd2 = item.sobre 
                novosProdutos2.push({id: idProd2, url: urlProd2, desconto: descontoProd2, nome: nomeProd2, avaliacoes: avaliacoesProd2, estrelasQuantidade: estrelasQuantProd2, preco: precoProd2, formaDePagamento: formaDePagamentoProd2, sobre: sobreProd2});
            });

            setIndicadoresCatalogo(novosIndicadoresCatalogo)
            setIndicadoresCatalogo2(novosIndicadoresCatalogo2)
            setIndicadoresBanner(novosIndicadores);
            setIndicadoresBanner2(novasImagensBanner2);
            setIndicadoresBannerDuplo(novasImagensBannerDuplo);
            setProdutos(novosProdutos)
            setProdutos2(novosProdutos2)
            console.log(recomendados)
            dispatch(setProdutosPesquisaRecomendados(recomendados))

        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    function setarDisplay(){
        dispatch(esconderBotaoPesquisa())
    }
    
    useEffect(() => {
        if(indicadoresRefs[0].current != null){
            indicadoresRefs[0].current.style.background = "black"
        }
    },[indicadoresRefs])

    useEffect(() => {
        retorno();
    }, []);

    useEffect(() => {
        if(dado.length > 0){
            setTamanhoContainerSlides((dado.length) * 100)
            setTamanhoSlide(tamanhoSlide = 100/(dado.length))
        }
    }, [dado]);


  return (
    <div onClick={setarDisplay} className={style.pagina}>
        
        <div className={style2.barra_informacoes}>
            <div className={style2.containerDoContainer}>
                <div ref={containerInfos} className={style2.containerInfos}>
                    <p className={style2.info}>Frete grátis para todo o país</p>
                    <p className={style2.info}>Baixe já o nosso aplicativo a ganhe 5% de desconto na primera compra</p>
                    <p className={style2.info}>Produtos personalizaveis de qualidade e preço baixo é só aqui!!</p>
                    <p className={style2.info}>Novas ofertas todos os dias</p>
                    <p className={style2.info}>Frete grátis para todo o país</p>
                    <p className={style2.info}>TunnyBrasil melhor loja da america latina</p>
                    <p className={style2.info}>Preço baixo e qualidade é só aqui na TunnyBrasil!!</p>
                    <p className={style2.info}>Novas ofertas todos os dias</p>
                </div>
            </div>
        </div>

        <BarraMenu/>


        <Suspense fallback={<><BannerSkelleton/></>}>
            <div className={style.container}>

                <div className={style.ir} onClick={frente}>
                    <Image src="/Image/seta_produtos.png" width={35} height={42} alt="" className={style.seta}/>
                </div>
                <div className={style.voltar} onClick={voltar}>
                    <Image src="/Image/seta_produtos.png" width={15} height={22} alt="" className={style.seta_2}/>
                </div>

                <div style={{height: "100%", width: `${tamanhoContainerSlides}%`, display: "flex"}}>
                    
                    {dado.map((item, index)=>{
                        if(index === 0){
                            return(
                                <div style={{width: `${tamanhoSlide}%`, height: "90%", transition: "1s", marginLeft: "0%"}} ref={slideRef} id="slide1">
                                    <Image className={style.imagem} src={`${item.image}`} alt="" height={200} width={500}/>
                                </div>            
                            )
                        }else{
                            return(
                                <div style={{width: `${tamanhoSlide                  }%`, height: "100%", transition: "1s"}} key={index}>
                                    <Image className={style.imagem} src={`${item.image}`} alt="" height={200} width={1200}/>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className={style.indicadores}>
                    {indicadoresBanner.map((item, index) => {
                        const id = `bola${item}`;
                        return (
                            <div key={id}>
                                <div ref={indicadoresRefs[index]} onClick={(event)=>mostrar(event)} id={id} className={style.bola}>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Suspense>

        {/* <div className={style.barraCatalogo}>
            <p className={style.alinhamento}>Roupas</p>
            <p className={style.alinhamento}>Acessórios</p>
            <p className={style.alinhamento}>Eletônicos</p>
            <p className={style.alinhamento}>Decoração</p>
            <p className={style.alinhamento}>Beleza</p>
            <p className={style.alinhamento}>Brinquedos</p>
            <div className={style.alinhamentoMais}>
                <p className={style.arrumar_mais}>Mais</p>
                <Image src="/Image/paraFrente.png" width={15} height={22} alt="" className={style.seta}/>
            </div>
        </div> */}
        <div className={style.alinhar_resto}>
            <div className={style.centroProdCustom}>

                <div className={style.organizar_nome_top_10}>

                    <div className={style.nome_categoria}>
                        <div style={{display:"flex"}}>
                            <Image src="/Image/sacola_loja.png" width={18} height={20} className={style.icone_sacola} alt=""/>
                            <p className={style.nome_fonte_categoria}>TOP 10 MAIS VENDIDOS</p>
                        </div>
                        <p className={style.nome_vejamais_categoria}>VEJA MAIS</p>
                    </div>

                    <div className={style.botao_parafuso}></div>
                    <div className={style.botao_parafuso_2}></div>
                </div>

                <div className={style.organizar_produtos}>
                    <div className={style.ir_produto} onClick={frente}>
                        <Image src="/Image/seta_produtos.png" width={35} height={65} alt="" className={style.seta}/>
                    </div>
                    <div className={style.voltar_produto} onClick={voltar}>
                        <Image src="/Image/seta_produtos.png" width={15} height={27} alt="" className={style.seta_2}/>
                    </div>
                    {produtos.map((item, index)=>{
                        return(
                                <Link className={style.produtosAuto} href={`/produtos/${item.id}`}>
                                    <ProdTeste sobre={item.sobre} id={item.id} url={item.url} desconto={item.desconto} nome={item.nome} avaliacoes={item.avaliacoes} estrelasQuantidade={item.estrelasQuantidade} preco={item.preco} formaDePagamento={item.formaDePagamento}/>
                                </Link>
                        )})
                    }
                    <div style={{width: "10px"}}></div>
                </div>
            </div>

            <div className={style.sessao_aqui_tem_tudo}>

                <div className={style.catalogo_3}>
                    <div className={style.organizar_catalogo_3_nome}>
                        <Image src="/Image/icone_aqui_tem.png" width={18} height={22} alt="" className={style.icone_aqui_tem}/>
                        <p className={style.catalogo_nome_2}>TEMOS DE TUDO</p>
                    </div>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <p className={style.catalogo_sessoes_4}>FILMES</p>
                        <p className={style.catalogo_sessoes_3}>SERIES</p>
                        <p className={style.catalogo_sessoes_3}>ANIMES</p>
                        <p className={style.catalogo_sessoes_3}>SERIADOS</p>
                        <p className={style.catalogo_sessoes_3}>PARA BOMBAR</p>
                        <p className={style.catalogo_sessoes_3}>NOVOS</p>
                    </div>
                </div>
                <div className={style.ir__aqui_tem_tudo} onClick={frente}>
                    <Image src="/Image/seta_produtos.png" width={35} height={65} alt="" className={style.seta}/>
                </div>
                <div className={style.voltar_aqui_tem_tudo} onClick={voltar}>
                    <Image src="/Image/seta_produtos.png" width={15} height={27} alt="" className={style.seta_2}/>
                </div>
                <div className={style.organizar_produtos_2}>
                    {produtos.map((item, index)=>{
                        return(
                                <Link className={style.produtosAuto} href={`/produtos/${item.id}`}>
                                    <ProdTeste sobre={item.sobre} id={item.id} url={item.url} desconto={item.desconto} nome={item.nome} avaliacoes={item.avaliacoes} estrelasQuantidade={item.estrelasQuantidade} preco={item.preco} formaDePagamento={item.formaDePagamento}/>
                                </Link>
                        )})
                    }
                </div>

            </div>

            <Image className={style.outras_propaganda} height={200} width={1420} src="/Image/banner_promocao_2.jpg" alt=""/>

            {/* <div className={style.juntar}>
                {indicadoresCatalogo2.map((item, index)=>{
                    return(
                        <div className={style.organizar}>
                            <Image src={`${item.imagem}`} width={150} height={120} className={style.produtos2} alt=""/>
                            <p className={style.nomeCatalogo2}>{item.nome}</p>
                        </div>
                    )})
                }

            </div> */}

            {/* <div className={style.centralizarBanner}>
                {indicadoresBanner2.map((item, index)=>{
                    return(
                        <div >
                            <Image className={style.banner3} src={`${item.imagem}`} width={150} height={120} alt=""/>
                        </div>
                    )})
                }
            </div> */}

            {/* <div>
                {indicadoresBannerDuplo.map((item, index)=>{
                    return(
                        <div className={style.juncaoBanners}>
                            <Image className={style.baner4} src={`${item.imagem1}`} width={150} height={120} alt=""/>
                            <Image className={style.baner5} src={`${item.imagem2}`} width={150} height={120} alt=""/>
                        </div>
                    )})
                }
            </div> */}

            <div className={style.centroProdCustom_3}>
                <div className={style.ir_produto} onClick={frente}>
                    <Image src="/Image/seta_produtos.png" width={35} height={65} alt="" className={style.seta}/>
                </div>
                <div className={style.voltar_produto} onClick={voltar}>
                    <Image src="/Image/seta_produtos.png" width={15} height={27} alt="" className={style.seta_2}/>
                </div>
                <div className={style.barra_produtos_2}>
                    <Image src="/Image/mega_promocao.png" width={20} height={25} alt="" className={style.mega_promocao}/>
                    <p>MEGA PROMOÇÕES</p>
                    <Image src="/Image/mega_promocao.png" width={20} height={25} alt="" className={style.mega_promocao}/>
                </div>
                <div style={{display:"flex", overflow:"hidden"}}>
                    {produtos2.map((item, index)=>{
                        return(
                                <Link className={style.produtosAuto} href={"/produtos"}>
                                    <ProdTeste2 sobre={item.sobre} id={item.id} url={item.url} desconto={item.desconto} nome={item.nome} avaliacoes={item.avaliacoes} estrelasQuantidade={item.estrelasQuantidade} preco={item.preco} formaDePagamento={item.formaDePagamento}/>
                                </Link>
                        )})
                    }
                </div>
            </div>

            <div className={style.centroCatalogo}>
                {/* {indicadoresCatalogo.map((item, index) => {
                    return (
                        <>
                            <div className={style.organizar}>
                                <Image className={style.catalogo} alt="" width={50} height={50} src={`${item.imagem}`}/>
                                <p className={style.catalogo_nome}>{item.nome}</p>
                            </div>
                        </>
                    )
                })} */}
                <div className={style.arrumar_promoções}>
                    <div className={style.banner_promocoes_1}></div>
                    <div className={style.banner_promocoes_2}></div>
                </div>
            </div>

            <div className={style.catalogo_2}>
                <div className={style.organizar_catalogo_nome_2}>
                    <p className={style.catalogo_nome_2}>AQUI TEM</p>
                    <Image src="/Image/seta_aqui_tem_3.png" width={25} height={25} alt="" className={style.seta_aqui_tem}/>
                </div>
                <div style={{display:"flex"}}>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                    <div className={style.catalogo_sessao}>
                        <div className={style.organizar_imagem_catalogo_2}>    
                            <Image src="/Image/casaco.png" layout="responsive"
                            width={15} height={22} alt="" className={style.imagem_catalogo_2}/>
                        </div>
                        <p className={style.catalogo_sessao_nome}>CATALOGO</p>
                    </div>
                </div>

                <div className={style.produtos_da_moda}>
                    <div className={style.alinhar_blocoProd}>
                        <div className={style.blocoProd}></div>
                    </div>
                    <div className={style.nome_sessao_produto_2}>
                        <Image src="/Image/icone_da_moda.png" width={20} height={26} className={style.icone_sacola} alt=""/>
                        <p className={style.nome_fonte_categoria_produto_2}>ESSES ESTÃO NA MODA</p>
                        <p className={style.nome_vejamais_categoria_1}>VEJA MAIS</p>
                    </div>
                    <div className={style.ir_produto_2} onClick={frente}>
                        <Image src="/Image/seta_produtos.png" width={35} height={65} alt="" className={style.seta}/>
                    </div>
                    <div className={style.voltar_produto_2} onClick={voltar}>
                        <Image src="/Image/seta_produtos.png" width={15} height={27} alt="" className={style.seta_2}/>
                    </div>
                    <div className={style.organizar_produtos_2}>
                        {produtos.map((item, index)=>{
                            return(
                                    <Link className={style.produtosAuto} href={`/produtos/${item.id}`}>
                                        <ProdTeste sobre={item.sobre} id={item.id} url={item.url} desconto={item.desconto} nome={item.nome} avaliacoes={item.avaliacoes} estrelasQuantidade={item.estrelasQuantidade} preco={item.preco} formaDePagamento={item.formaDePagamento}/>
                                    </Link>
                            )})
                        }
                    </div>
                </div>
                <div className={style.centroCatalogo_2}>
                    <div className={style.arrumar_promoções}>
                        <div className={style.banner_promocoes_baixo_1}>
                            <div className={style.imagem_banner_promocoes_organizar}>
                                <Image src="/Image/casaco.png" layout="responsive" width={15} height={22} alt="" className={style.imagem_banner_promocoes_1}/>
                            </div>
                            <div className={style.banner_promocoes_nome}>CONFERIR OFERTA</div>
                        </div>
                        <div className={style.banner_promocoes_baixo_2}>
                            <div className={style.imagem_banner_promocoes_organizar}>
                                <Image src="/Image/casaco.png" layout="responsive" width={15} height={22} alt="" className={style.imagem_banner_promocoes_1}/>
                            </div>
                            <div className={style.banner_promocoes_nome}>CONFERIR OFERTA</div>
                        </div>
                        <div className={style.banner_promocoes_baixo_3}>
                            <div className={style.imagem_banner_promocoes_organizar}>
                                <Image src="/Image/casaco.png" layout="responsive" width={15} height={22} alt="" className={style.imagem_banner_promocoes_1}/>
                            </div>
                            <div className={style.banner_promocoes_nome}>CONFERIR OFERTA</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.organizar_todos_links_relacionados}>
                <div className={style.organizar_nome_links_relacionados}>
                    <Image src="/Image/links_relacionados.png" width={20} height={20} alt="" className={style.links_relacionados_icone}/>
                    <div className={style.links_relacionados}>Links relacionados</div>
                </div>
                <div className={style.links_relacionados_varios}>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                </div>
                <div className={style.links_relacionados_varios}>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                    <p>roupas</p>
                </div>

            </div>
        </div>

        <Rodape/>
    </div>
  )
}
