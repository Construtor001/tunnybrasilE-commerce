export interface promocoes {
    tabela: string | undefined,
    data: {
        nome: string | undefined
    }
}

export interface banner {
    tabela: string | undefined,
    data: {
        image: string | undefined
    }
}

export interface catalogo {
    tabela: string | undefined,
    data: {
        imagem: string | undefined
        nome: string | undefined
    }
}

export interface produto {
    tabela: string | undefined,
    data: {
        url: string | undefined
        desconto: string | undefined
        nome: string | undefined
        avaliacoes: string | undefined
        estrelasQuantidade: number | undefined
        preco: number | undefined
        formaDePagamento: string | undefined
        tipo: string | undefined
    }
}

export interface catalogo2 {
    tabela: string | undefined,
    data: {
        imagem: string | undefined
    }
}

export interface banner2 {
    tabela: string | undefined,
    data: {
        imagem: string | undefined
    }
}

export interface bannerDuplo {
    tabela: string | undefined,
    data: {
        imagem1: string | undefined
        imagem2: string | undefined
    }
}

export interface produto2 {
    tabela: string | undefined,
    data: {
        url: string | undefined
        desconto: string | undefined
        nome: string | undefined
        avaliacoes: string | undefined
        estrelasQuantidade: number | undefined
        preco: number | undefined
        formaDePagamento: string | undefined
        tipo: string | undefined
    }
}

export interface imagens {
    tabela: string | undefined
    data:{
        imagem1: string | undefined
        imagem2?: string | undefined
        imagem3?: string | undefined
        imagem4?: string | undefined
        idProduto: string | undefined 
    }
}

export interface comentario {
    tabela: string | undefined
    data:{
        nome: string | undefined
        comentario: string | undefined
        estrelas: string | undefined
        data: string | undefined
        idProduto: string | undefined 
    }
}

export interface inserirDados {
    banner?: banner
    banner2?: banner2
    bannerDuplo?: bannerDuplo
    catalogo?: catalogo
    catalogo2?: catalogo2
    produto?: produto
    produto2?: produto2
    promocoes?: promocoes
    imagens?: imagens
    comentario?: comentario
}


export interface value {
    id: number
    image: string
}

export interface imagemBannerReceber {
    id: number
    imagem: string
}

export interface imagemBannerDuploReceber {
    id: number
    imagem1: string
    imagem2: string
}

export interface catalogoReceber {
    id: number
    imagem: string
    nome: string
}

export interface catalogo2Receber {
    id: number
    imagem: string
    nome: string
}

export interface produtos {
    id: number
    url: string
    desconto: string
    nome: string
    sobre: string
    avaliacoes: string
    estrelasQuantidade: number
    preco: number
    formaDePagamento: string
    tipo: string
}

export interface produtos2 {
    id: number
    url: string
    desconto: string
    nome: string
    avaliacoes: string
    sobre: string
    estrelasQuantidade: number
    preco: number
    formaDePagamento: string
    tipo: string
}

