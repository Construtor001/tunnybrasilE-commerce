"use client"

import { dadosRecomendados } from "@/app/page"
import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    values: number
    valorBotaoPesquisa: number
    valorCampoInput: string
    produtosPesquisaRecomendados: dadosRecomendados[]
    mostraEscondCadast: number
}

const initialState: CounterState = {
    values: 0,
    valorBotaoPesquisa: 0,
    valorCampoInput: "",
    produtosPesquisaRecomendados: [{id: 0, produto: "", quantidade: 0, tempo: 0}],
    mostraEscondCadast: 1
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment: (state) => {state.values = 1},
        decrement: (state) => {state.values = 0},
        mostrarBotaoPesquisa: (state) => {state.valorBotaoPesquisa = 1},
        esconderBotaoPesquisa: (state) => {state.valorBotaoPesquisa = 0},
        valorCampoInput: (state, action) => {state.valorCampoInput = action.payload},
        setProdutosPesquisaRecomendados: (state, action) => {state.produtosPesquisaRecomendados = action.payload},
        setMostraEscondCadast: (state, action) => {state.mostraEscondCadast = action.payload}
    }
})

export const { increment, setMostraEscondCadast, decrement, mostrarBotaoPesquisa, esconderBotaoPesquisa, valorCampoInput, setProdutosPesquisaRecomendados } = CounterSlice.actions;

export default CounterSlice.reducer;