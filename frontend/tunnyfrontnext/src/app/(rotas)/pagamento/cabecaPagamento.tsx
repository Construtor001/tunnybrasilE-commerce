"use client"
import "../../globals.css"
import style from "./head.module.css"
import Image from "next/image"
import Link from "next/link"
import { MouseEventHandler, RefObject, useRef, useState } from "react"
import Teste from "../../(rotas)/teste/page"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../GlobalRedux/store"
import { esconderBotaoPesquisa, increment, mostrarBotaoPesquisa, valorCampoInput } from "../../GlobalRedux/reducers/reducers"
import { useRouter } from 'next/navigation';
import Catalogo from "../../(rotas)/catalogo/page"

export default function BarraMenu(){

    let containerInfos: RefObject<HTMLDivElement> = useRef(null);
    let pos: number;
    let num: number;
    let dispatch = useDispatch()
    let count = useSelector((state: RootState) => state.counter.values)
    let escondeMostraValor = useSelector((state: RootState) => state.counter.valorBotaoPesquisa)
    let valorCampoInpu = useSelector((state: RootState) => state.counter.valorCampoInput)
    let PegarValorCampoPesquisa: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

    const router = useRouter();

    let filtro = ["banana", "maçã", "tomate", "uva", "melão", "melancia"]
    let [novoFiltro, setNovoFiltro] = useState<string[]>([])
    
    function mostrarValorCampo(){
        let valoresInput = PegarValorCampoPesquisa.current?.value
        let valores = filtro.filter(string => string.includes(valoresInput!!))
        setNovoFiltro(valores)
        dispatch(valorCampoInput(valoresInput!!))
    }


    function mostrarCatalogo():MouseEventHandler<HTMLDivElement> | any{
        dispatch(increment())
    }

    function mostrarPesquisa(){
        dispatch(mostrarBotaoPesquisa())
    }

    function bloquearClick(e: React.MouseEvent<HTMLDivElement>){
        e.stopPropagation();
    }  
    
    function pesquisar(){
        let valorEnviar = valorCampoInpu.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        router.push(`/pesquisa/${valorEnviar}`);
        dispatch(valorCampoInput(""))
        dispatch(esconderBotaoPesquisa())
    }

    function mandarParaPerfilUsuario(){
        router.push("/perfil")
    }

    function mandarParaCadastrar(){
        router.push("/cadastre-se")
    }

    function mandarParaEntrar(){
        router.push("/entrar")
    }

    return(
        <div>
            <div className={style.centro}>


                <div className={style.barramenu}>
                    <div className={style.juncao} >
                        <Image onMouseEnter={mostrarCatalogo} width={20} height={15} src="/Image/barraCatalogo.png" alt="logo" className={style.barraimg}/>
                        <p className={style.nomeBarraCatalogo}>Catálogo de Produtos</p>
                    </div>
                    <Image  src="/Image/logo_ofc_3.png" alt="pefil" width={180} height={70} className={style.logoimg}/>
                    <div onClick={bloquearClick} className={style.englob}>
                        <input value={valorCampoInpu} spellCheck="false" onChange={mostrarValorCampo} ref={PegarValorCampoPesquisa} onFocus={mostrarPesquisa} type="text" className={style.fundoBarraPesquisa} placeholder="Pesquise algum produto"/>

                        <Image src="/Image/lupa.svg" alt="logo" width={20} height={20} className={style.imagemPesquisar_1}/>

                        <div style={{display: escondeMostraValor?"block":"none"}}>
                            <input onClick={pesquisar} type="button" className={style.botaoPesquisa}/>
                            <Image onClick={pesquisar} src="/Image/lupa.svg" alt="logo" width={20} height={20} className={style.imagemPesquisar}/>
                        </div>
                    </div>


                    <div className={style.juntar2}>
                        <Image onClick={mandarParaPerfilUsuario} src="/Image/perfil_2.png" alt="pefil" width={21} height={35} className={style.perfilimg}/>
                        <div className={style.organizar}>
                            <div className={style.cadastrese_ou_entre}>Faça seu <bdo style={{fontWeight:"bold"}}>Login</bdo> ou</div>
                            <div className={style.cadastrese_ou_entre_1}>Crie seu <bdo style={{fontWeight:"bold"}}>Cadastro</bdo></div>
                        </div>
                    </div>

                    <div className={style.rastreio_organizar}>
                        <Image src="/Image/carro_entrega.png" alt="pefil" width={51} height={36} className={style.perfil_carro_entrega}/>
                        <div style={{marginLeft:"10px"}}>
                            <p className={style.rastreio_nome}>Onde está meu produto?</p>
                            <p className={style.rastreio_nome_1}>Rastrear meu <bdo style={{fontWeight:"bold"}}>Pedido</bdo></p>
                        </div>
                    </div>
                </div>

                <Teste/>
                
                <Catalogo/>

            </div>
        </div>
    )
}