import style from './catalogo.module.css'
import "../../globals.css"
import React from 'react'

export default function Catalogo(){


    return(
        <div style={{display: 0?"block":"none"}} className={style.pagina}>
            <div className={style.container}>
                <div className={style.barrinha}></div>
                <div>
                    <p>Roupas</p>
                    <bdo></bdo>
                    <div>
                        <p>camisas</p>
                        <p>sapatos</p>
                        <p>chapeus</p>
                        <p>outros</p>
                    </div>
                </div>
                <div>
                    <p>Acessórios</p>
                    <bdo></bdo>
                    <div>
                        <p>Relógio</p>
                        <p>Corrente</p>
                        <p>Óculos</p>
                        <p>Anel</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Eletrônicos</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Decoração</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Beleza</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
                <div>
                    <p>Para seu bebê</p>
                    <bdo></bdo>
                    <div>
                        <p>Celular</p>
                        <p>Computador</p>
                        <p>Notebook</p>
                        <p>Geladeira</p>
                        <p>Microondas</p>
                        <p>Outros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}