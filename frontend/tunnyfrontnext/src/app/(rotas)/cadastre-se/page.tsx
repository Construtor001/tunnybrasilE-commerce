"use client"

import "../../globals.css"
import style from "./cadastre-se.module.css"
import BarraMenuCadastrese from "./cabecaCadastrese"
import Image from "next/image"
import { RefObject, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMostraEscondCadast } from "@/app/GlobalRedux/reducers/reducers"
import { RootState } from "@/app/GlobalRedux/store"

export default function Cadastrese(){

    let dispatch = useDispatch()
    let etapa2: RefObject<HTMLDivElement> = useRef(null)
    let etapa1: RefObject<HTMLDivElement> = useRef(null)
    let mostraEscondCadast = useSelector((state: RootState)=>state.counter.mostraEscondCadast)

    function borda(){
        if(etapa2){
            etapa2.current!!.style.border = "2px solid rgb(238,0,255)"
            etapa1.current!!.style.border = "none"
        }
        dispatch(setMostraEscondCadast(0))
    }

    return(
        <>
            <BarraMenuCadastrese/>
            <div className={style.centralizar}>
                <div className={style.cadastro}>

                    <div className={style.organizarEtapas}>
                        
                        <div>
                            <p className={style.etapa}>Etapa 1</p>
                            <div ref={etapa1} className={style.confirmado}>
                                <Image src="/Image/sinalDeConfirmado.svg" height={15} width={15} alt="" />
                            </div>
                        </div>

                        <div className={style.barraProgresso}></div>
                
                        <div>
                            <p className={style.etapa}>Etapa 2</p>
                            <div ref={etapa2} className={style.naoConfirmado}>
                                <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                            </div>
                        </div>

                    </div>

                    <p className={style.informacoesNome}>Informações Pessoais</p>

                    <input style={{display:mostraEscondCadast?"block":"none"}} className={style.campoInput} placeholder="Digite seu email pessoal"/>
                    <input style={{display:mostraEscondCadast?"block":"none"}} className={style.campoInput} placeholder="Nome completo"/>
    
                    <input style={{display:mostraEscondCadast?"block":"none"}} className={style.campoInput} placeholder="Digite uma senha forte"/>
                    <div style={{display:mostraEscondCadast?"flex":"none", justifyContent:"center", width:"100%"}}>
                        <p style={{display:mostraEscondCadast?"block":"none"}} className={style.barraSenha}></p>
                        <p style={{display:mostraEscondCadast?"block":"none"}} className={style.barraSenha}></p>
                        <p style={{display:mostraEscondCadast?"block":"none"}} className={style.barraSenha}></p>
                        <p style={{display:mostraEscondCadast?"block":"none"}} className={style.barraSenha}></p>
                    </div>

                    <input style={{display:mostraEscondCadast?"block":"none"}} className={style.campoInput} placeholder="Data de Nascimento"/>
                    <input style={{display:mostraEscondCadast?"block":"none"}} className={style.campoInput} placeholder="Insira o seu CPF"/>
                    <input style={{display:mostraEscondCadast?"block":"none"}} className={style.campoInput} placeholder="Digite um telefone para contato"/>

                    <input style={{display:mostraEscondCadast?"none":"block"}} className={style.campoInput} placeholder="Digite seu email Digite seu Cep"/>
                    <div style={{display:mostraEscondCadast?"none":"flex",marginLeft:"100px",marginRight:"100px", width:"85%", justifyContent:"center"}}>
                        <input style={{display:mostraEscondCadast?"none":"block", width:"250px"}} className={style.campoInputEndereco} placeholder="Endereço"/>
                        <input style={{display:mostraEscondCadast?"none":"flex", marginLeft:"20px", width:"150px"}} className={style.campoInputEndereco} placeholder="Número"/>
                    </div>
                    <input style={{display:mostraEscondCadast?"none":"block"}} className={style.campoInput} placeholder="Bairro"/>
                    <input style={{display:mostraEscondCadast?"none":"block"}} className={style.campoInput} placeholder="Cidade"/>
                    <input style={{display:mostraEscondCadast?"none":"block"}} className={style.campoInput} placeholder="Estado"/>

                    <input onClick={borda} className={style.botaoAvancar} type="button" value="Avançar"/>

                </div>
            </div>
        </>
    )
}