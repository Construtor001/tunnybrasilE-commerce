"use client"

import "../../../globals.css"
import style from "../produto.module.css"
import Image from "next/image"
import Prod from "../produto"
import BarraMenu from "../../../cabeca"
import { Rodape } from "@/app/rodape"
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import { produtos } from "@/interfaces"

interface slug {
    slug: string[]
}

export default function Produtos({params}: {params: slug}){

    let [imagem, setImagem] = useState<produtos | null>(null)
    let [url, setUrl] = useState<string>("")
    let [preco, setPreco] = useState<number>(0)
    let [avaliacoes, setAvaliacoes] = useState<string>("")
    let [nome, setNome] = useState<string>("")
    let [descricaoDoProduto, setDescricaoDoProduto] = useState('')
    
    async function buscarValores(){
        let data = {id: params.slug[0]}
        let valor = await axios.post(`http://localhost:3030/produto`, data)

        let novosValores: produtos = valor.data

        setUrl(novosValores.url);
        setNome(novosValores.nome);
        setPreco(novosValores.preco);
        setAvaliacoes(novosValores.avaliacoes);
        setDescricaoDoProduto(novosValores.sobre)

        setImagem(novosValores)
        
    }

    useEffect(()=>{
        buscarValores()
    }, [])


    return(
        <div >
            <BarraMenu/>
            <div className={style.pagina}>
                <div className={style.alinharos2}>
                    <div className={style.banner_produto}>
        
                        <div className={style.ajuste_fpequena}>
                            <div className={style.foto_prodP}></div>
                            <div className={style.foto_prodP}></div>
                            <div className={style.foto_prodP}></div>
                        </div>

                        <div className={style.ajustar_prod_bolinha}>
                            <div className={style.foto_prod}>
                                <div style={{width:"300px", height:"300px"}}>
                                    <Image alt="" src={`${url}`} width={18} height={50} layout="responsive"/>
                                </div>
                            </div>

                            <div className={style.bolinha_pass_cont}>
                                <div className={style.bolaCinza}></div>
                                <div className={style.bolaBranca1}></div>
                                <div className={style.bolaBranca2}></div>
                            </div>
                        </div>

                        <Image className={style.retornar} alt="" src="/Image/retornar.png" width={28} height={60}/>

                        <Link href={"/customizar"}>
                            <div className={style.ajustar_pincel_frente}>
                                <div className={style.nome_personalizar}>Personalizar
                                    <Image className={style.pincel} alt=""  height={40} width={60} src="/Image/pincel.svg"/>
                                </div>
                                <Image className={style.frente} alt="" src="/Image/frente.png" width={28} height={60}/>
                            </div>
                        </Link>

                        <div className={style.prod_ajuste_baixo}>
                            <div className={style.ajustar_tamanho}>
                                <p className={style.nome_tamanho}>Tamanho:</p>
                                <div className={style.tamanhos}>
                                    <p className={style.t1} style={{border:"3px solid rgb(52, 52, 52)"}}>42</p>
                                    <p className={style.t1}>43</p>
                                    <p className={style.t1}>44</p>
                                    <p className={style.t1}>45</p>
                                    <p className={style.t1}>46</p>
                                    <p className={style.t1}>47</p>
                                </div>
                            </div>

                            <div className={style.ajustar_cores}>
                                <p className={style.nome_cores}>Cores:</p>
                                <div className={style.cores}>
                                    <p className={style.c1} style={{background:"blue ", border:"3px solid rgb(17, 15, 15)"}}>42</p>
                                    <p className={style.c1} style={{background:"red"}}>43</p>
                                    <p className={style.c1} style={{background:"green"}}>44</p>
                                    <p className={style.c1} style={{background:"gray"}}>45</p>
                                    <p className={style.c1} style={{background:"pink"}}>46</p>
                                    <p className={style.c1} style={{background:"yellow"}}>47</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={style.banner_prod_info}>

                        <div className={style.arrumar_nomeinfo}>
                            <div style={{display:"flex"}}>
                                <p className={style.nome_produto}>{nome}</p>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"35px", marginLeft:"45px", marginRight:"-45px"}}>
                                    <Image className={style.menu_prod} alt="" src="/Image/compartilhar.svg" width={32} height={35}/>
                                    <p className={style.compartilhar_nome}>compartilhar</p>
                                </div>
                            </div>

                            <div className={style.arrumar_classifica}>
                                <Image className={style.estrelas_class} alt="" src="/Image/estrelas.png" width={100} height={22}/>
                                <p className={style.classificacao}>({avaliacoes}) Avaliações </p>
                            </div>

                            <div style={{display:"flex"}}>
                                <p className={style.complemento_info}>de</p>

                                <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                                    <p className={style.valor_antes}> R$ 59,90</p>
                                    <div className={style.alinhar_desconto}>
                                        <Image className={style.desconto} alt="" src="/Image/desconto.png" width={30} height={34}/>
                                        <div className={style.nome_desconto}>
                                            <p style={{color:"white", fontWeight: "bold"}}>5%</p> 
                                            <p>OFF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={style.valor_dinheiro}>
                                <p className={style.valor_total_por}>por</p>
                                <p className={style.valor_total}>R$ {preco}</p>
                                <p className={style.valor_total_pix}>no pix</p>
                            </div>
                            <p className={style.valor_total_cartao}><bdo className={style.valor_total_ou}>ou</bdo> 12x de 5,90 no <bdo className={style.cartao_efeito}>cartão de crédito</bdo></p>
                        </div>

                        <Image className={style.caminhao} alt="" width={30} height={30} src="/Image/caminhao.svg"/>
                        <p className={style.data_entrega}>Entrega até dia 29 de setembro</p>

                        <div className={style.linha_divisoria_info}></div>
                
                        <div className={style.arrumar_frete}>
                            <div className={style.arrumar_layout_frete}>
                                <p className={style.nome_frete}>Frete:</p>
                                <div className={style.editar_nome}>
                                    <p className={style.nome_cep}>CEP</p>
                                    <p className={style.numero_cep}>00000-000</p>
                                </div>
                            </div>
                            <div className={style.arrumar_valor}>
                                <p className={style.nome_valor_frete}>Valor:</p>
                                <p className={style.valor_frete}>- - -</p>
                            </div>
                        </div>

                        <div className={style.arrumar_prodinfo1}>
                            <div className={style.add_cesta}>Adicionar á cesta</div>
                            <div className={style.arrumar_estrela}>
                                <Image className={style.estrela_fav_ns} alt="" src="/Image/estrela_ns.png" width={40} height={40}/>
                                <p className={style.add_favoritos}>Adicionar aos favoritos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.sobre_o_produto}>
                    <div className={style.alinha_topo}>
                        <Image className={style.icone_sobre} alt="" height={30} width={30} src="/Image/iconesobre.svg"/>
                        <p className={style.nome_sobre_produto}>Sobre o produto</p>
                    </div>

                    <div className={style.linha_divisoria}></div>

                    <p>{descricaoDoProduto}</p>
                    <p className={style.mostrar_mais}>mostrar mais</p>
                </div>

                <div className={style.avaliacoes}>
                    <div className={style.alinha_topo}>
                        <Image className={style.icone_avaliacoes} alt="" height={30} width={30} src="/Image/estrelaMeusPedidos.png"/>
                        <p className={style.nome_avaliacoes}>Avaliações</p>
                    </div>

                    <div className={style.linha_divisoria}></div>

                    <div className={style.classifica_organiza}>
                        <p className={style.nivel_classificacao}>8,8/10</p>
                        <div className={style.alinhar_estrelas}>
                            <p className={style.nome_estrelas}>5 estrelas</p>
                            <p className={style.numero_avaliacoes}>85 avaliacões</p>
                            <div className={style.barra_estrelas}>
                                <p className={style.nivel_barra5}></p>
                            </div>
                        </div>
                        <div className={style.alinhar_estrelas}>
                            <p className={style.nome_estrelas}>4 estrelas</p>
                            <p className={style.numero_avaliacoes}>45 avaliacões</p>
                            <div className={style.barra_estrelas}>
                                <p className={style.nivel_barra4}></p>
                            </div>
                        </div>
                        <div className={style.alinhar_estrelas}>
                            <p className={style.nome_estrelas}>3 estrelas</p>
                            <p className={style.numero_avaliacoes}>35 avaliacões</p>
                            <div className={style.barra_estrelas}>
                                <p className={style.nivel_barra3}></p>
                            </div>
                        </div>
                        <div className={style.alinhar_estrelas}>
                            <p className={style.nome_estrelas}>2 estrelas</p>
                            <p className={style.numero_avaliacoes}>12 avaliacões</p>
                            <div className={style.barra_estrelas}>
                                <p className={style.nivel_barra2}></p>
                            </div>
                        </div>
                        <div className={style.alinhar_estrelas}>
                            <p className={style.nome_estrelas}>1 estrelas</p>
                            <p className={style.numero_avaliacoes}>8 avaliacões</p>
                            <div className={style.barra_estrelas}>
                                <p className={style.nivel_barra1}></p>
                            </div>
                        </div>

                        <p className={style.avaliacoes_total}>Total de avaliações (322)</p>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <div className={style.organizar2}>
                            <div className={style.filtro}>Mais recentes</div>
                            <div className={style.filtro}>Mais antigos</div>
                            <div className={style.filtro}>5 estrelas</div>
                            <div className={style.filtro}>4 estrelas</div>
                            <div className={style.filtro}>3 estrelas</div>
                            <div className={style.filtro}>2 estrelas</div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                                <Image alt="" width={35} height={35} src="/Image/filtroimg.png"/>
                                <p className={style.nome_filtro}>Mais filtros</p>
                            </div>
                        </div>

                        <p className={style.nome_comentarios}>Comentários</p>

                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop:"15px"}}>
                            <div className={style.comentario}>
                                <Image className={style.comentario_foto} alt="" width={40} height={40} src="/Image/perfil.png"/>
                                <div style={{display: "flex", flexDirection: "column", marginTop:"-10px"}}>
                                    <Image className={style.cometario_estrelas} alt="" width={100} height={30} src="/Image/5estrelas.svg"/>
                                    <p className={style.comentario_nome}>Ana Cláudia</p>
                                    <p className={style.comentario_data_envio}>17/08/2023</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"end"}}>
                                    <p className={style.comentario_denunciar}>Denunciar</p>
                                    <p className={style.comentario_descricao}>amei esse produto, ótima qualidade e meu filho amou recomendo a compra para os demais clientes,pois ele é um belo produto custo benefício</p>
                                </div>
                            </div>
                            <div className={style.comentario}>
                                <Image className={style.comentario_foto} alt="" width={40} height={40} src="/Image/foto_perfil.svg"/>
                                <div style={{display: "flex", flexDirection: "column", marginTop:"-10px"}}>
                                    <Image className={style.cometario_estrelas} alt="" width={100} height={30} src="/Image/4estrelas.svg"/>
                                    <p className={style.comentario_nome}>Lúcia Almeida</p>
                                    <p className={style.comentario_data_envio}>23/11/2023</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"end"}}>
                                    <p className={style.comentario_denunciar}>Denunciar</p>
                                    <p className={style.comentario_descricao}>amei esse produto, ótima qualidade e meu filho amou recomendo a compra para os demais clientes,pois ele é um belo produto custo benefício</p>
                                </div>
                            </div>
                            <div style={{display: "flex"}}>
                                <p style={{marginBottom:"-14px"}} className={style.mais_comentarios}>Mais comentários</p>
                                <Image style={{marginTop:"8px", marginLeft:"8px"}}alt="" height={10} width={20} src="/Image/seta_abrir.svg"/>            
                            </div>
                            
                        </div>

                    </div>
                    
                </div>

                <div style={{display:"flex", flexDirection:"column", alignItems:"start", marginLeft:"-25px"}}>
                    <p className={style.nome_produtos_relacionados}>Produtos Relacionados</p>
                    <div className={style.produtosRelacionados}>
                        <Prod/>
                        <Prod/>
                        <Prod/>
                        <Prod/>
                    </div>
                    
                    <p className={style.nome_produtos_novidades}>Novidades</p>
                    <div className={style.produtosNovidades}>
                        <Prod/>
                        <Prod/>
                        <Prod/>
                        <Prod/>
                    </div>
                </div>

                <Rodape/>
            </div>
        </div>
    )
}