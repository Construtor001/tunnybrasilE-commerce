"use client"

import "../../../globals.css"
import style from "../produto.module.css"
import style2 from "../../../Home.module.css"
import Image from "next/image"
import Prod from "../produto"
import BarraMenu from "../../../cabeca"
import { Rodape } from "@/app/rodape"
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import ProdTeste2 from "../../produtos_2/produtoTeste2"
import { produtos } from "@/interfaces"
import { produtos2, value, } from "../../../../interfaces"

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
    let [produtos2, setProdutos2] = useState<Omit<produtos2, "tipo">[]>([])
    let [dado, setDado] = useState<value[]>([]);
    
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
        retorno();
    }, [])

    async function retorno() {
        try {
            const dados = await fetch("http://localhost:3030");
            const dadosRecomendados = await fetch("http://localhost:3030/pesquisa/recomendados")
            const users = await dados.json();
            const dadosRec = await dadosRecomendados.json()
            setDado(users.banner);

            var produtos2: produtos2[] = users.produto2

            const novosProdutos2: Omit<produtos2, "tipo">[] = []; 

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

            setProdutos2(novosProdutos2)

        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    return(
        <div className={style.paginaProd}>
            <BarraMenu/>
            <div className={style.pagina}>
                <div className={style.alinharos2}>
                    <div className={style.banner_produto}>
                        <p className={style.nome_produto}>Casaco masculino one piece</p>
                        <div className={style.ajuste_fpequena}>
                            <div className={style.foto_prodP} style={{border:"1px solid black"}}></div>
                            <div className={style.foto_prodP}></div>
                            <div className={style.foto_prodP}></div>
                        </div>

                        <div className={style.ajustar_prod_bolinha}>
                            <div className={style.foto_prod}>
                                <div>
                                    <Image alt="" className={style.foto} src={`${url}`} width={18} height={50} layout="responsive"/>
                                </div>
                            </div>

                        </div>

                        <Image className={style.retornar} alt="" src="/Image/retornar.png" width={28} height={60}/>

                        <Image className={style.frente} alt="" src="/Image/frente.png" width={28} height={60}/>
                        
                        {/* <Link href={"/customizar"}>
                            <div className={style.ajustar_pincel_frente}>
                                <div className={style.nome_personalizar}>Personalizar
                                    <Image className={style.pincel} alt=""  height={40} width={60} src="/Image/pincel.svg"/>
                                </div>
                            </div>
                        </Link> */}

                    </div>

                    <div className={style.banner_prod_info}>

                        <div className={style.arrumar_nomeinfo}>
                            {/* <div style={{display:"flex"}}>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"35px", marginLeft:"45px", marginRight:"-45px"}}>
                                    <Image className={style.menu_prod} alt="" src="/Image/compartilhar.svg" width={32} height={35}/>
                                    <p className={style.compartilhar_nome}>compartilhar</p>
                                </div>
                            </div> */}

                            <div className={style.organizar_classificacao}>
                                <div className={style.arrumar_classifica}>
                                    <Image className={style.estrelas_class} alt="" src="/Image/estrelas.png" width={80} height={15}/>
                                    <p className={style.classificacao}>({avaliacoes}) Avaliações </p>
                                </div>
                                
                                <div className={style.tunny_indica}>
                                    <p className={style.tunny_indica_nome}>TunnyBrasil <bdo className={style.tunny_indica_nome_2}>Indica</bdo></p>
                                    <Image alt="" src="/Image/tunny_indica_3.png" width={13} height={12}/>
                                </div>
                            </div>


                        </div>

                        <div style={{display:"flex"}}>
                            <div className={style.valor_desconto}>
                                <p className={style.valor_antes}> R$ 59,90</p>
                                <div className={style.alinhar_desconto}>
                                    <div className={style.nome_desconto}>
                                        <p className={style.numero_desconto}>- 5%</p> 
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={style.valor_dinheiro}>
                            <p className={style.valor_total}>R$ 199,90</p>
                            <p className={style.valor_total_pix}>Á vista no pix</p>
                        </div>
                        <p className={style.valor_total_cartao}>ou 12x de <bdo style={{fontWeight:"bold", color:"rgb(90,90,90)"}}>5,90</bdo> no cartão de crédito</p>
                        


                        <div className={style.linha_divisoria_info}></div>
                
                        <div className={style.prod_ajuste_baixo}>
                            <div className={style.ajustar_tamanho}>
                                <p className={style.nome_tamanho}>Tamanhos:</p>
                                <div className={style.tamanhos}>
                                    <p className={style.t1} style={{border:"1px solid rgb(219, 219, 219)", outline:"1px solid rgb(52, 52, 52)"}}>42</p>
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
                                    <p style={{border:"1px solid rgb(52, 52, 52)", outline:"1px solid rgb(219, 219, 219)"}} className={style.c1}>Preto</p>
                                    <p className={style.c1}>Marrom</p>
                                    <p className={style.c1}>Azul</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.organizar_data_de_entrega}>
                            <div style={{display:"flex"}}>
                                <Image className={style.caminhao} alt="" width={25} height={18} src="/Image/carro_entrega_roxo.png"/>
                                <p className={style.data_entrega}>Entrega até dia 29 de setembro</p>
                            </div>
                            <div>
                                <p className={style.frete_gratis}>Frete Grátis</p>
                            </div>
                        </div>


                        {/* <div className={style.arrumar_prodinfo1}>
                            <div className={style.add_cesta}>Adicionar á cesta</div>
                            <div className={style.arrumar_estrela}>
                                <Image className={style.estrela_fav_ns} alt="" src="/Image/estrela_ns.png" width={40} height={40}/>
                                <p className={style.add_favoritos}>Adicionar aos favoritos</p>
                            </div>
                        </div> */}

                        <div className={style.botoes_de_compra}>
                            <Link className={style.produtosAuto} href={"/pagamento"}>
                                <p className={style.botao_comprar_agora}>Comprar agora</p>
                            </Link>
                            <div className={style.botao_adicionar_ao_carrinho}>
                                <Image alt="" width={28} height={30} src="/Image/adicionar_ao_carrinho_2.png"/>
                            </div>
                        </div>

                        <div className={style.devolucao}>
                            <div className={style.devolucao_nome_imagem}>
                                <Image className={style.icone_devolucao} alt="" width={25} height={25} src="/Image/icone_devolucao.png"/>
                                <p className={style.devolucao_nome}>Devolução gratuita</p>
                            </div>
                            <p className={style.devolucao_descricao_1}>Estorno de 100% do seu dinheiro</p>
                            <p className={style.devolucao_descricao_1}>7 dias após o recebimento da mercadoria.</p>
                        </div>

                        <div className={style.sobre_o_produto}>
                            <div className={style.alinha_topo_sobre}>
                                <p className={style.nome_sobre_produto}>Sobre o produto</p>
                            </div>

                            <div className={style.alinhar_descricao}>

                                <div className={style.alinhar_descricao_item_organizar}>

                                    <div className={style.alinhar_descricao_bloco}>
                                        <div className={style.alinhar_descricao_bloco_separado}>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Cor:</bdo> Verde Escuro</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Estilo:</bdo> Fofo</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Estampa:</bdo> Bloco de cores</p>
                                        </div>
                                        <div className={style.alinhar_descricao_bloco_separado}>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Tipo:</bdo> Macacão de Pijama</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Gola:</bdo> Com capuz</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Comprimento da Manga:</bdo> Manga Comprida</p>
                                        </div>
                                    </div>

                                    <div className={style.alinhar_descricao_bloco}>
                                        <div className={style.alinhar_descricao_bloco_separado}>    
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Tipo de manga:</bdo> Manga Regular</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Detalhes:</bdo> Retalho, Zíper</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Comprimento:</bdo> Longo</p>
                                        </div>
                                        <div className={style.alinhar_descricao_bloco_separado}>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Cor:</bdo>Tecido: Elasticidade Baixa</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Material:</bdo> Tecido de malha</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Composição:</bdo> 100% Poliéster</p>
                                        </div>
                                    </div>

                                    <div className={style.alinhar_descricao_bloco}>
                                        <div className={style.alinhar_descricao_bloco_separado}>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Cor:</bdo> Verde Escuro</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Estilo:</bdo> Fofo</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Estampa:</bdo> Bloco de cores</p>
                                        </div>
                                        <div className={style.alinhar_descricao_bloco_separado}>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Tipo:</bdo> Macacão de Pijama</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Gola:</bdo> Com capuz</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Comprimento da Manga:</bdo> Manga Comprida</p>
                                        </div>
                                    </div>

                                    <div className={style.alinhar_descricao_bloco}>
                                        <div className={style.alinhar_descricao_bloco_separado}>    
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Tipo de manga:</bdo> Manga Regular</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Detalhes:</bdo> Retalho, Zíper</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Comprimento:</bdo> Longo</p>
                                        </div>
                                        <div className={style.alinhar_descricao_bloco_separado}>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Cor:</bdo>Tecido: Elasticidade Baixa</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Material:</bdo> Tecido de malha</p>
                                            <p className={style.descricao_nome_total}><bdo className={style.descricao_nome_item}>Composição:</bdo> 100% Poliéster</p>
                                        </div>
                                    </div>

                                    {/* <div>
                                        <p>Temperatura: Final de Outono (10-17 ℃/50-63 ℉)</p>
                                        <p>Instruções de manutenção: Lavagem de máquina ou lavagem profissional a seco</p>
                                        <p>Translúcido: Não</p>
                                    </div> */}
                                </div>
                                

                            </div>

                            <p className={style.linha_divisoria_medidas}></p>

                            <p className={style.nome_medidas}>Medidas</p>

                            <div className={style.alinhar_descricao_valor_organizar}>
                                <div className={style.organizar_medidas_tamanhos}>
                                    <p className={style.organizar_medidas_tamanhos_numeros}>P</p>
                                    <p className={style.organizar_medidas_tamanhos_numeros}>M</p>
                                    <p className={style.organizar_medidas_tamanhos_numeros}>G</p>
                                    <p className={style.organizar_medidas_tamanhos_numeros}>GG</p>
                                </div>
                                <div className={style.organizar_medidas_total}>
                                    <p className={style.organizar_medidas_titulo}>Comprimento</p>
                                    <p className={style.organizar_medidas_numeros}>62</p>
                                    <p className={style.organizar_medidas_numeros}>65</p>
                                    <p className={style.organizar_medidas_numeros}>68</p>
                                    <p className={style.organizar_medidas_numeros}>70</p>
                                </div>
                                <div className={style.organizar_medidas_total}>
                                    <p className={style.organizar_medidas_titulo}>Largura</p>
                                    <p className={style.organizar_medidas_numeros}>44</p>
                                    <p className={style.organizar_medidas_numeros}>46</p>
                                    <p className={style.organizar_medidas_numeros}>48</p>
                                    <p className={style.organizar_medidas_numeros}>50</p>
                                </div>
                                <div className={style.organizar_medidas_total}>
                                    <p className={style.organizar_medidas_titulo}>Manga</p>
                                    <p className={style.organizar_medidas_numeros}>58</p>
                                    <p className={style.organizar_medidas_numeros}>60</p>
                                    <p className={style.organizar_medidas_numeros}>62</p>
                                    <p className={style.organizar_medidas_numeros}>63</p>
                                </div>
                                <div className={style.organizar_medidas_total}>
                                    <p className={style.organizar_medidas_titulo}>Recomendado</p>
                                    <p className={style.organizar_medidas_numeros}>40 a 55kg</p>
                                    <p className={style.organizar_medidas_numeros}>55 a 70kg</p>
                                    <p className={style.organizar_medidas_numeros}>70 a 85kg</p>
                                    <p className={style.organizar_medidas_numeros}>85 a 105kg</p>
                                </div>
                                <div></div>
                            </div>

                            <p className={style.linha_divisoria_medidas}></p>

                            {/* <div className={style.organizar_descricao_2}>
                                <p className={style.descricao_2}>Confeccionada de material leve, e de alta qualidade, a camiseta proporciona conforto e bloqueio contra raios solares UV-A e UV-B.</p>
                                <p className={style.descricao_2}>Perfeito para: Ciclismo, corrida, academia, atividades ao ar livre, praia, etc.</p>
                                <p className={style.descricao_2}>Elas se ajustam bem ao corpo, então se quiser um pouco mais largo pegue um tamanho um pouco maior.</p>
                            </div> */}

                            <div className={style.organizar_botao_medida_total}>
                                <div className={style.organizar_botao_medida_nomes}>
                                    <p className={style.organizar_botao_medida_nome_1}>Não achou sua medida?</p>
                                    <p className={style.organizar_botao_medida_nome_2}>entre em contato conosco clicando no botão ao lado</p>
                                </div>
                                <input className={style.organizar_botao_medida} type="button" value="Fale Conosco"/>
                            </div>

                        </div>
                    </div>


                </div>

                <div className={style.avaliacoes}>
                    <div className={style.alinha_topo}>
                        
                        <div>
                            <p className={style.nome_avaliacoes}>4.2</p>
                            <Image className={style.icone_avaliacoes} alt="" height={73} width={73} src="/Image/5estrelas.svg"/>
                            <p className={style.comentarios_nome_avaliacao}>465 comentários</p>
                        </div>

                        <div className={style.classifica_organiza}>
                            <div className={style.alinhar_estrelas}>
                                <p className={style.nome_estrelas}>5</p>
                                <div className={style.barra_estrelas}>
                                    <p className={style.nivel_barra5}></p>
                                </div>
                            </div>
                            <div className={style.alinhar_estrelas}>
                                <p className={style.nome_estrelas}>4</p>
                                <div className={style.barra_estrelas}>
                                    <p className={style.nivel_barra4}></p>
                                </div>
                            </div>
                            <div className={style.alinhar_estrelas}>
                                <p className={style.nome_estrelas}>3</p>
                                <div className={style.barra_estrelas}>
                                    <p className={style.nivel_barra3}></p>
                                </div>
                            </div>
                            <div className={style.alinhar_estrelas}>
                                <p className={style.nome_estrelas}>2</p>
                                <div className={style.barra_estrelas}>
                                    <p className={style.nivel_barra2}></p>
                                </div>
                            </div>
                            <div className={style.alinhar_estrelas}>
                                <p className={style.nome_estrelas}>1</p>
                                <div className={style.barra_estrelas}>
                                    <p className={style.nivel_barra1}></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className={style.organizar2}>
                            <div className={style.filtro}>Mais recentes</div>
                            <div className={style.filtro}>Mais antigos</div>
                            <div className={style.filtro}>5 estrelas</div>
                            <div className={style.filtro}>4 estrelas</div>
                            <div className={style.filtro}>3 estrelas</div>
                            <div className={style.filtro}>2 estrelas</div>
                            <div className={style.icone_filtro}>
                                <Image alt="" width={25} height={21} src="/Image/icone_filtro_1.png"/>
                                <p className={style.nome_filtro}>Mais filtros</p>
                            </div>
                        </div>

                        <div className={style.nome_comentarios}>
                            <p style={{marginLeft:"10px", marginBottom:"-5px"}}>Comentários e avaliações</p>
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div className={style.comentario}>
                                <Image className={style.comentario_foto} alt="" width={35} height={35} src="/Image/perfil.png"/>
                                <div style={{display: "flex", flexDirection: "column", marginTop:"-10px"}}>
                                    <Image className={style.cometario_estrelas} alt="" width={63} height={18} src="/Image/5estrelas.svg"/>
                                    <p className={style.comentario_nome}>Ana Cláudia</p>
                                    <p className={style.comentario_data_envio}>17/08/2023</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"end"}}>
                                    {/* <p className={style.comentario_denunciar}>Denunciar</p> */}
                                    <p className={style.comentario_descricao}>Amei esse produto, ótima qualidade e meu filho amou recomendo a compra para os demais clientes,pois ele é um belo produto custo benefício</p>
                                </div>
                                <div className={style.comentario_fotos}>
                                    <Image className={style.imagem_comentario_1} alt="" layout="responsive" width={63} height={18} src="/Image/imagem_comentario_1.webp"/>
                                    <div>
                                        <p className={style.imagem_contnuacao_tres_pontos}>...</p>
                                        <p className={style.imagem_contnuacao_nome}>Ver todas as imagens</p>
                                        <Image className={style.imagem_contnuacao} alt="" width={63} height={63} src="/Image/imagem_continuacao.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.comentario}>
                                <Image className={style.comentario_foto} alt="" width={35} height={35} src="/Image/foto_perfil.svg"/>
                                <div style={{display: "flex", flexDirection: "column", marginTop:"-10px"}}>
                                    <Image className={style.cometario_estrelas} alt="" width={63} height={18} src="/Image/5estrelas.svg"/>
                                    <p className={style.comentario_nome}>Ana Cláudia</p>
                                    <p className={style.comentario_data_envio}>17/08/2023</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"end"}}>
                                    {/* <p className={style.comentario_denunciar}>Denunciar</p> */}
                                    <p className={style.comentario_descricao}>Amei esse produto, ótima qualidade e meu filho amou recomendo a compra para os demais clientes,pois ele é um belo produto custo benefício</p>
                                </div>
                                <div className={style.comentario_fotos}>
                                    <Image className={style.imagem_comentario_1} alt="" layout="responsive" width={63} height={18} src="/Image/imagem_comentario_1.webp"/>
                                    <div>
                                        <p className={style.imagem_contnuacao_tres_pontos}>...</p>
                                        <p className={style.imagem_contnuacao_nome}>Ver todas as imagens</p>
                                        <Image className={style.imagem_contnuacao} alt="" width={63} height={63} src="/Image/imagem_continuacao.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.comentario}>
                                <Image className={style.comentario_foto} alt="" width={35} height={35} src="/Image/foto_perfil.svg"/>
                                <div style={{display: "flex", flexDirection: "column", marginTop:"-10px"}}>
                                    <Image className={style.cometario_estrelas} alt="" width={63} height={18} src="/Image/5estrelas.svg"/>
                                    <p className={style.comentario_nome}>Ana Cláudia</p>
                                    <p className={style.comentario_data_envio}>17/08/2023</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", alignItems:"end"}}>
                                    {/* <p className={style.comentario_denunciar}>Denunciar</p> */}
                                    <p className={style.comentario_descricao}>Amei esse produto, ótima qualidade e meu filho amou recomendo a compra para os demais clientes,pois ele é um belo produto custo benefício</p>
                                </div>
                                <div className={style.comentario_fotos}>
                                    <Image className={style.imagem_comentario_1} alt="" layout="responsive" width={63} height={18} src="/Image/imagem_comentario_1.webp"/>
                                    <div>
                                        <p className={style.imagem_contnuacao_tres_pontos}>...</p>
                                        <p className={style.imagem_contnuacao_nome}>Ver todas as imagens</p>
                                        <Image className={style.imagem_contnuacao} alt="" width={63} height={63} src="/Image/imagem_continuacao.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.mais_comentarios}>
                                <p className={style.mais_comentarios_nome}>Mais comentários</p>
                                <Image className={style.mais_comentarios_imagem} alt="" height={10} width={20} src="/Image/seta_abrir.svg"/>            
                            </div>
                            
                        </div>

                    </div>
                    
                </div>

                {/* <div style={{display:"flex", flexDirection:"column", alignItems:"start", marginLeft:"-25px"}}>
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
                </div> */}

                <p className={style.produtos_relacionados}>Produtos Relacionados</p>

                <div className={style.centroProdCustom_3}>
                    
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

                <div className={style.centroProdCustom_3}>
                    
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
                
                <div className={style.centroProdCustom_3}>
                    
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

                <p className={style.ver_mais_produtos}>Veja Mais</p>

                <div style={{marginBottom:"60px"}} className={style2.centroCatalogo_2}>
                    <div className={style2.arrumar_promoções}>
                        <div className={style2.banner_promocoes_baixo_1}>
                            <div className={style2.imagem_banner_promocoes_organizar}>
                                <Image src="/Image/casaco.png" layout="responsive" width={15} height={22} alt="" className={style2.imagem_banner_promocoes_1}/>
                            </div>
                            <div className={style2.banner_promocoes_nome}>CONFERIR OFERTA</div>
                        </div>
                        <div className={style2.banner_promocoes_baixo_2}>
                            <div className={style2.imagem_banner_promocoes_organizar}>
                                <Image src="/Image/casaco.png" layout="responsive" width={15} height={22} alt="" className={style2.imagem_banner_promocoes_1}/>
                            </div>
                            <div className={style2.banner_promocoes_nome}>CONFERIR OFERTA</div>
                        </div>
                        <div className={style2.banner_promocoes_baixo_3}>
                            <div className={style2.imagem_banner_promocoes_organizar}>
                                <Image src="/Image/casaco.png" layout="responsive" width={15} height={22} alt="" className={style2.imagem_banner_promocoes_1}/>
                            </div>
                            <div className={style2.banner_promocoes_nome}>CONFERIR OFERTA</div>
                        </div>
                    </div>
                </div>

                <Rodape/>
            </div>
        </div>
    )
}