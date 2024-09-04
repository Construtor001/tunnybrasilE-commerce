"use client"

import "../../../globals.css"
import style from "./pesquisa.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import { Rodape } from "@/app/rodape"

interface slug {
    slug: string[]
}

export interface produtos {
    id: number
    url: string
    desconto: string
    nome: string
    avaliacoes: string
    estrelasQuantidade: number
    preco: number
    formaDePagamento: string
    tipo: string
}

export default function Pesquisa({params}: {params: slug}){
    
    let valorParam = params.slug[0].replace(/%20/gi," ")
    let [produtos, setProdutos] = useState<Omit<produtos, "tipo">[]>([])

    let valorTratado = valorParam.replace(/\s+/gi," ").trim()

    async function retorno() {
        try {
            const dados = await axios.post("http://localhost:3030/pesquisa", {
                produto: valorTratado
            })

            const novosProdutos: Omit<produtos, "tipo">[] = [];  

            var produtos: produtos[] = dados.data

            produtos.forEach((item) => {
                const idProd = item.id
                const descontoProd = item.desconto
                const nomeProd = item.nome;
                const avaliacoesProd = item.avaliacoes
                const estrelasQuantProd = Number(item.estrelasQuantidade)
                const precoProd = Number(item.preco)
                const urlProd = item.url
                const formaDePagamentoProd = item.formaDePagamento 
                novosProdutos.push({id: idProd, url: urlProd, desconto: descontoProd, nome: nomeProd, avaliacoes: avaliacoesProd, estrelasQuantidade: estrelasQuantProd, preco: precoProd, formaDePagamento: formaDePagamentoProd});
            });
            
            setProdutos(novosProdutos)

        }catch(erro){

        }
    }

    useEffect(() => {
        retorno();
    }, []);

    return(
        <div className={style.centralizar}>
            <div className={style.barramenu}>
                <div className={style.juncao}>
                    <Image width={36} height={50} src="/Image/barra.png" alt="logo" className={style.barraimg}/>
                    <p className={style.nomeBarraCatalogo}>Catálogo de Produtos</p>
                </div>
                <div className={style.englob}>
                    <div className={style.fundoBarraPesquisa}>
                        <p className={style.textobarrapesquisa}>Pesquise algum produto</p>
                    </div>
                </div>
                    <Image src="/Image/logo.png" alt="logo" width={108} height={49} className={style.logoimg}/>
                <div className={style.juntar2}>
                    <Image src="/Image/perfil.png" alt="pefil" width={35} height={35} className={style.perfilimg}/>
                    <Image src="/Image/cadastrar.png" alt="cadstro" className={style.cadastroimg} width={80} height={35}/>
                </div>
            </div>

            <div className={style.barraconteudo}>
                <p className={style.conteudos}>
                    <Image src="/Image/cupom.png" alt="" width={27} height={17} className={style.tamanhoCupo}/>Cupons
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/suporte.png" alt="" className={style.tamanhoSupo} width={32} height={25}/>Suporte ao cliente
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/pedidos.png" alt="" width={27} height={22} className={style.tamanhoPedi}/>Meus Pedidos
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/cadastrese.png" alt="" width={24} height={24} className={style.tamanhoCada}/>Venda Conosco
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/sugestao.png" alt="" width={24} height={22} className={style.tamanhoSuge}/>Sugestões
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/conversa.png" alt="" className={style.tamanhoConv} width={24} height={22}/>Conversa
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/favorito.png" alt="" width={32} height={29} className={style.tamanhoFavo}/>Favoritos
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/cesta.png" alt="" width={25} height={20} className={style.tamanhoCest}/>Cesta
                </p>
                <p className={style.conteudos}>
                    <Image src="/Image/notificacoes.png" width={27} height={22} alt="" className={style.tamanhoNoti}/>Notificações
                </p>
            </div>

            <div className={style.organizar2}>
                <div className={style.filtro}>Frete Grátis</div>
                <div className={style.filtro}>Entre R$50 - R$299</div>
                <div className={style.filtro}>Entre R$300 - R$700</div>
                <div className={style.filtro}>Entre R$700 - R$1000</div>
                <div className={style.filtro}>Acima de R$1000</div>
                <div className={style.filtro}>Prazo Curto</div>
            </div>
            <div className={style.ajustar3}>
                <Image alt="" height={30} width={30} src="/Image/filtroimg.png"/>
                <p className={style.filtronome}>Mais Filtros</p>
            </div>

            <div className={style.centroProdCustom}>
                {produtos.map((v,i)=>{
                    return(
                        <>
                            <div className={style.produtos}>
                                <div style={{width:"150px", height:"100px", marginLeft:"120px"}}>
                                    <Image src={v.url} width={27} layout="responsive" height={22} alt="" className={style.produtoImagem}/>
                                </div>
                                <p className={style.produtoNome}>{v.nome}</p>
                                <div className={style.organizarDadosProduto}>
                                    <p className={style.produtoAvaliacoes}>{v.avaliacoes}</p>
                                    <p className={style.produtoPreco}>{v.preco}</p>
                                </div>
                                <p className={style.produtoPagamento}>{v.formaDePagamento}</p>
                            </div>
                        </>
                    )
                })
                }
            </div>
            <Rodape/>
        </div>
    )
}
