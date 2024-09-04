"use client"
import style from "./teste.module.css"
import "../../globals.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { esconderBotaoPesquisa, valorCampoInput } from "@/app/GlobalRedux/reducers/reducers"
import { dadosRecomendados } from "@/app/page"
import { RootState } from "@/app/GlobalRedux/store"
import { useRouter } from 'next/navigation';

export default function BarraPesquisa(){

    let [produtosPesquisaRecomendados, setProdutosPesquisaRecomendados] = useState<Omit<dadosRecomendados, "tempo" | "quantidade">[]>([])

    let dispatch = useDispatch()

    let [novosDados, setNovosDados] = useState<string | null>(null);

    const router = useRouter();

    let dadosReco = useSelector((state: RootState) => state.counter.produtosPesquisaRecomendados)
    let valorCampoInpu = useSelector((state: RootState) => state.counter.valorCampoInput)

    let count = useSelector((state: RootState) => state.counter.values)

    useEffect(() => {
        function retornoDadosRecomendados() {
            const novosRecomendados: Omit<dadosRecomendados, "tempo" | "quantidade">[] = [];

            dadosReco.forEach((item) => {
                const id = item.id;
                const produtos = item.produto;
                if (!novosRecomendados.includes({ id: id, produto: produtos })) {
                    novosRecomendados.push({ id: id, produto: produtos });
                }
            });

            setProdutosPesquisaRecomendados(novosRecomendados);
        }

        retornoDadosRecomendados();
    }, [dadosReco]);

    function pesquisar(){
        let valorEnviar = valorCampoInpu.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        router.push(`/pesquisa/${valorEnviar}`);   
    }

    function setarValorCampoInput(valor: string){
        dispatch(valorCampoInput(valor))
        dispatch(esconderBotaoPesquisa())

        setNovosDados(valorCampoInpu)
    }

    useEffect(() => {
        if (novosDados !== null) {
            pesquisar();
            dispatch(valorCampoInput(""))
        }
    }, [novosDados]);

    function bloquearClick(e: React.MouseEvent<HTMLDivElement>){
        e.stopPropagation();
    }  

    return(
        <div style={{display: count?"block":"none"}} className={style.pagina}>
            <div onClick={bloquearClick} className={style.recomendacoes}>
                {produtosPesquisaRecomendados.map((v, i)=>{
                    return(
                        <>    
                            <p style={{cursor: "pointer"}} onClick={() => setarValorCampoInput(v.produto)}>{v.produto}</p>
                            <bdo></bdo>
                        </>
                    )
                })}
            </div>
        </div>
    )
}