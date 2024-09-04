import "../../globals.css"
import Image from "next/image"
import style from "./conclusao.module.css"
import Cabeca from "../../cabeca"
import RodapePagamento from "../carrinho/rodapePagamento"

export default function Conclusao(){
    return(
        <div className={style.pagina}>
            
            <Cabeca/>
            
            <div className={style.organizar_finalizacao}>
                
                <div className={style.organizar_pagamento}>
                    
                    <div className={style.organizar_pedido_concluido}>
                        <p className={style.pedido_concluido_titulo}>PEDIDO CONCLUÍDO COM SUCESSO!</p>
                        <p className={style.pedido_concluido_descricao}>Obrigado pela compra, faça o pagamento copiando e colando o código gerado no aplicativo do seu banco de preferência ou aponte a câmera para o QR CODE gerado a baixo</p>
                    </div>

                    <div className={style.organizar_imagem_qrcode}>
                        <Image className={style.imagem_qrcode} height={181} width={181} src="/Image/qrcode.png" alt=""/>
                    </div>

                    <input className={style.botao_copiar} type="button" value="Copiar código Pix"/>

                    <p className={style.descricao_1}>Você vai receber a confirmação do pagamento no seu e-mail e através dos nossos canais. E pronto!</p>

                    <div className={style.organizar_informacoes_pedido}>
                        <p className={style.numero_pedido}>Número do pedido: 98253575</p>
                        <p className={style.explicacao_pedido}>Esse QR code expira em 30 minutos.</p>
                    </div>

                </div>
                
                <div className={style.organizar_instrucoes}>

                    <p className={style.instrucoes_titulo}>Siga as instruções a baixo para efetuar o pagamento:</p>

                    <div className={style.organizar_instrucoes_descricao}>
                        <p className={style.instrucoes_descricao}>1. Abra o app ou banco de sua preferência. Escolha a opção pagar com código Pix “copia e cola”, ou código QR.</p>
                        <p className={style.instrucoes_descricao}>2. Copie e cole o código, ou escaneie o código QR com a câmera do seu celular. Confira todas as informações e autorize o pagamento.</p>
                        <p className={style.instrucoes_descricao}>3. Você vai receber a confirmação do pagamento no seu e-mail e através dos nossos canais. E pronto!</p>
                    </div>

                    <p className={style.descricao_2}>Se o pagamento não for confirmado, não se preocupe. O pedido será cancelado automaticamente.</p>

                </div>

                <p className={style.descricao_3}>O prazo de entrega será contado após 1º dia útil da aprovação do pedido. Este procedimento costuma ocorrer em até 24 horas, mas tem período máximo para acontecer de até 48 horas (pagamento no cartão). Se o pagamento for realizado por boleto bancário, o banco tem o prazo de até três dias úteis para confirmar</p>

                <div className={style.organizar_botoes_chamada_acao}>
                    <div className={style.organizar_informacoes_whatsapp}>
                        <div className={style.informacoes_whatsapp}>
                            <p className={style.informacoes_whatsapp_nome}>Ficou com alguma dúvida? fale com a gente através do</p>
                        </div>

                        <input className={style.botao_whatsapp} type="button" value="Whatsapp"/>
                    </div>

                    <div className={style.organizar_botoes_continuar_compras}>
                        <input className={style.botao_meus_pedidos} type="button" value="Ver Meus Pedidos"/>
                        <input className={style.botao_continuar_navegando} type="button" value="Continuar Navegando"/>
                    </div>
                </div>

                <Image className={style.banner_promocao} height={168} width={1066} src="/Image/banenr_pormocao_3.png" alt=""/>
            </div>

            <RodapePagamento/>
        </div>
    )
}