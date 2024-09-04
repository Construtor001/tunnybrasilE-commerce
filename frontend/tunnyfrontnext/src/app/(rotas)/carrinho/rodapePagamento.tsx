import style from "./rodapePagamento.module.css"
import Image from "next/image"

export default function RodapePagamento(){
    return(
        <div className={style.pagina}>
            
            <div className={style.topo_termos}>
                <p className={style.termos_nome}>Termos de compra</p>
                <p className={style.termos_fale_conosco}>Fale conosco</p>
                <p className={style.termos_certificado_de_segurança}>Certificado de segurança</p>
                <Image className={style.selo_de_compras_imagem} height={31} width={62} alt="" src="/Image/selo_de_compra.png"/>
            </div>
            
            <div className={style.organizar_explicacao_termos}>
                <p className={style.explicacao_termos_nome}>Copyright ©2000 - 2024 www.netshoes.com.br, TODOS OS DIREITOS RESERVADOS. Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, dizeres, som, software, conjunto imagem, layout, trade dress, aqui veiculados são de propriedade exclusiva da NS2.COM Internet S.A. ou de seus parceiros. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei. NS2.Com Internet S/A - CNPJ: 09.339.936/0001-16 - R MARIA PRESTES MAIA nº 300 - 2º Andar CEP: 02047-901 - CARANDIRU - SAO PAULO - SP - A inclusão no carrinho não garante o preço e/ou a disponibilidade do produto. Caso os produtos apresentem divergências de valores, o preço válido é o exibido na tela de pagamento. Vendas sujeitas a análise e disponibilidade de estoque.</p>
            </div>

            <p className={style.todos_termos_reservados}>Todos os direitos reservados</p>
            
        </div>
    )
}