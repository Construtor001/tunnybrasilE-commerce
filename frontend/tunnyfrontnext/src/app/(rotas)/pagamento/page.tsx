"use client"

import style from "./pagamento.module.css"
import style2 from "../carrinho/carrinho.module.css"
import Image from "next/image"
import BarraMenuPagamento from "../carrinho/cabecaCarrinho"
import Rodape from "../carrinho/rodapePagamento"
import { RefObject, SetStateAction, useRef, useState } from "react"

export default function Pagemento(){

    let etapa2: RefObject<HTMLDivElement> = useRef(null)
    let etapa1: RefObject<HTMLDivElement> = useRef(null)
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    const handleOpcaoChange = (event: { target: { value: SetStateAction<string> } }) => {
        setOpcaoSelecionada(event.target.value);
    };

    return(
        <div className={style.pagina}>
            <BarraMenuPagamento/>
            <div className={style.infos}>
                
                <div className={style.organizar_cartao_e_informacoes}>

                    <div className={style.informacoes}>

                        <p className={style.titulo_informacoes_pessoais}>INFORMAÇÕES PESSOAIS</p>

                        {/* <p className={style.linha_divisoria_1}></p> */}

                        {/* <div className={style.organizarEtapas}>
                            
                            <div>
                                <p className={style.etapa}>Etapa 1</p>
                                <div ref={etapa1} className={style.confirmado}>
                                    <Image src="/Image/sinalDeConfirmado.svg" height={15} width={15} alt="" />
                                </div>
                            </div>

                            <div>
                                <p className={style.etapa1}>Etapa 2</p>
                                <div ref={etapa1} className={style.confirmado1}>
                                    <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                                </div>
                            </div>

                            <div className={style.barraProgresso}></div>
                    
                            <div>
                                <p className={style.etapa}>Etapa 3</p>
                                <div ref={etapa2} className={style.naoConfirmado}>
                                    <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                                </div>
                            </div>

                        </div> */}

                        <div className={style.organizar}>

                            <div className={style.fundo_topo}>

                                <div className={style.organizar_topo}>
                                    
                                    <input className={style.campoInput_info} placeholder="CPF"/>
                                    <input className={style.campoInput_info} placeholder="Seu nome completo"/>
                                    <input className={style.campoInput_info} placeholder="Numero de telefone"/>

                                </div>

                                <div className={style.organizar_topo_2}>
                                    <div className={style.organizar_info_2}>
                                        <select id="dayOfBirth" className={style.estilizar_dia}>
                                            <option> Dia </option>
                                            <option value="01"> 01 </option>
                                            <option value="02"> 02 </option>
                                            <option value="03"> 03 </option>
                                            <option value="04"> 04 </option>
                                            <option value="05"> 05 </option>
                                            <option value="06"> 06 </option>
                                            <option value="07"> 07 </option>
                                            <option value="08"> 08 </option>
                                            <option value="09"> 09 </option>
                                            <option value="10"> 10 </option>
                                            <option value="11"> 11 </option>
                                            <option value="12"> 12 </option>
                                            <option value="13"> 13 </option>
                                            <option value="14"> 14 </option>
                                            <option value="15"> 15 </option>
                                            <option value="16"> 16 </option>
                                            <option value="17"> 17 </option>
                                            <option value="18"> 18 </option>
                                            <option value="19"> 19 </option>
                                            <option value="20"> 20 </option>
                                            <option value="21"> 21 </option>
                                            <option value="22"> 22 </option>
                                            <option value="23"> 23 </option>
                                            <option value="24"> 24 </option>
                                            <option value="25"> 25 </option>
                                            <option value="26"> 26 </option>
                                            <option value="27"> 27 </option>
                                            <option value="28"> 28 </option>
                                            <option value="29"> 29 </option>
                                            <option value="30"> 30 </option>
                                            <option value="31"> 31 </option>
                                        </select>
                                        
                                        <select id="dayOfBirth" className={style.estilizar_mes}>
                                            <option> Mês </option>
                                            <option value="01"> 01 </option>
                                            <option value="02"> 02 </option>
                                            <option value="03"> 03 </option>
                                            <option value="04"> 04 </option>
                                            <option value="05"> 05 </option>
                                            <option value="06"> 06 </option>
                                            <option value="07"> 07 </option>
                                            <option value="08"> 08 </option>
                                            <option value="09"> 09 </option>
                                            <option value="10"> 10 </option>
                                            <option value="11"> 11 </option>
                                            <option value="12"> 12 </option>
                                        </select>

                                        <select id="dayOfBirth" className={style.estilizar_ano}>
                                            <option> Ano </option>
                                            <option value="1901"> 1901 </option>
                                            <option value="1902"> 1902 </option>
                                            <option value="1903"> 1903 </option>
                                            <option value="1904"> 1904 </option>
                                            <option value="1905"> 1905 </option>
                                            <option value="1906"> 1906 </option>
                                            <option value="1907"> 1907 </option>
                                            <option value="1908"> 1908 </option>
                                            <option value="1909"> 1909 </option>
                                            <option value="1910"> 1910 </option>
                                            <option value="1911"> 1911 </option>
                                            <option value="1912"> 1912 </option>
                                            <option value="1913"> 1913 </option>
                                            <option value="1914"> 1914 </option>
                                            <option value="1915"> 1915 </option>
                                            <option value="1916"> 1916 </option>
                                            <option value="1917"> 1917 </option>
                                            <option value="1918"> 1918 </option>
                                            <option value="1919"> 1919 </option>
                                            <option value="1920"> 1920 </option>
                                            <option value="1921"> 1921 </option>
                                            <option value="1922"> 1922 </option>
                                            <option value="1923"> 1923 </option>
                                            <option value="1924"> 1924 </option>
                                            <option value="1925"> 1925 </option>
                                            <option value="1926"> 1926 </option>
                                            <option value="1927"> 1927 </option>
                                            <option value="1928"> 1928 </option>
                                            <option value="1929"> 1929 </option>
                                            <option value="1930"> 1930 </option>
                                            <option value="1931"> 1931 </option>
                                            <option value="1932"> 1932 </option>
                                            <option value="1933"> 1933 </option>
                                            <option value="1934"> 1934 </option>
                                            <option value="1935"> 1935 </option>
                                            <option value="1936"> 1936 </option>
                                            <option value="1937"> 1937 </option>
                                            <option value="1938"> 1938 </option>
                                            <option value="1939"> 1939 </option>
                                            <option value="1940"> 1940 </option>
                                            <option value="1941"> 1941 </option>
                                            <option value="1942"> 1942 </option>
                                            <option value="1943"> 1943 </option>
                                            <option value="1944"> 1944 </option>
                                            <option value="1945"> 1945 </option>
                                            <option value="1946"> 1946 </option>
                                            <option value="1947"> 1947 </option>
                                            <option value="1948"> 1948 </option>
                                            <option value="1949"> 1949 </option>
                                            <option value="1950"> 1950 </option>
                                            <option value="1951"> 1951 </option>
                                            <option value="1952"> 1952 </option>
                                            <option value="1953"> 1953 </option>
                                            <option value="1954"> 1954 </option>
                                            <option value="1955"> 1955 </option>
                                            <option value="1956"> 1956 </option>
                                            <option value="1957"> 1957 </option>
                                            <option value="1958"> 1958 </option>
                                            <option value="1959"> 1959 </option>
                                            <option value="1960"> 1960 </option>
                                            <option value="1961"> 1961 </option>
                                            <option value="1962"> 1962 </option>
                                            <option value="1963"> 1963 </option>
                                            <option value="1964"> 1964 </option>
                                            <option value="1965"> 1965 </option>
                                            <option value="1966"> 1966 </option>
                                            <option value="1967"> 1967 </option>
                                            <option value="1968"> 1968 </option>
                                            <option value="1969"> 1969 </option>
                                            <option value="1970"> 1970 </option>
                                            <option value="1971"> 1971 </option>
                                            <option value="1972"> 1972 </option>
                                            <option value="1973"> 1973 </option>
                                            <option value="1974"> 1974 </option>
                                            <option value="1975"> 1975 </option>
                                            <option value="1976"> 1976 </option>
                                            <option value="1977"> 1977 </option>
                                            <option value="1978"> 1978 </option>
                                            <option value="1979"> 1979 </option>
                                            <option value="1980"> 1980 </option>
                                            <option value="1981"> 1981 </option>
                                            <option value="1982"> 1982 </option>
                                            <option value="1983"> 1983 </option>
                                            <option value="1984"> 1984 </option>
                                            <option value="1985"> 1985 </option>
                                            <option value="1986"> 1986 </option>
                                            <option value="1987"> 1987 </option>
                                            <option value="1988"> 1988 </option>
                                            <option value="1989"> 1989 </option>
                                            <option value="1990"> 1990 </option>
                                            <option value="1991"> 1991 </option>
                                            <option value="1992"> 1992 </option>
                                            <option value="1993"> 1993 </option>
                                            <option value="1994"> 1994 </option>
                                            <option value="1995"> 1995 </option>
                                            <option value="1996"> 1996 </option>
                                            <option value="1997"> 1997 </option>
                                            <option value="1998"> 1998 </option>
                                            <option value="1999"> 1999 </option>
                                            <option value="2010"> 2010 </option>
                                            <option value="2011"> 2011 </option>
                                            <option value="2012"> 2012 </option>
                                            <option value="2013"> 2013 </option>
                                            <option value="2014"> 2014 </option>
                                            <option value="2015"> 2015 </option>
                                            <option value="2016"> 2016 </option>
                                            <option value="2017"> 2017 </option>
                                            <option value="2018"> 2018 </option>
                                            <option value="2019"> 2019 </option>
                                            <option value="2020"> 2020 </option>
                                            <option value="2021"> 2021 </option>
                                            <option value="2022"> 2022 </option>
                                            <option value="2023"> 2023 </option>
                                            <option value="2024"> 2024 </option>
                                        </select>
                                    </div>
                                    <div className={style.organizar_info_1}>
                                        <input name="sexo" type="radio" id="masculino" className={style.campoInput_1} placeholder="Digite seu email pessoal"/>
                                        <label htmlFor="masculino" className={style.informar_sexo}>Masculino</label>

                                        <input name="sexo" type="radio" id="feminino" className={style.campoInput_2} placeholder="Nome completo"/>
                                        <label htmlFor="feminino" className={style.informar_sexo}>Feminino</label>
                                    </div>
                                </div>
                                

                                <div className={style.organizar_meio}>
                                    <input className={style.campoInput_info_2} placeholder="Digite seu cep"/>
                                    <input className={style.campoInput_info_2} placeholder="Endereço"/>
                                    <input className={style.campoInput_info_2} placeholder="Número"/>
                                    <input className={style.campoInput_info_2} placeholder="Complemento"/>
                                </div>

                                <div className={style.organizar_final}>
                                    <input className={style.campoInput_info_2} placeholder="Estado/Província"/>
                                    <input className={style.campoInput_info_2} placeholder="Cidade"/>
                                    <input className={style.campoInput_info_2} placeholder="Bairro"/>
                                    <input className={style.campoInput_info_2} placeholder="Ponto de refência"/>
                                </div>
                                

                            </div>
                            <div className={style.organizar_botao_continuar}>
                                <input className={style.botaoAvancar_7} type="button" value="Continuar"/>
                            </div>

                        </div>

                    </div>
                

                    <div className={style.informacoes_1}>

                        <p className={style.titulo_informacoes_pessoais}>FORMA DE PAGAMENTO</p>

                        {/* <div className={style.organizarEtapas}>
                            
                            <div>
                                <p className={style.etapa}>Etapa 1</p>
                                <div ref={etapa1} className={style.confirmado}>
                                    <Image src="/Image/sinalDeConfirmado.svg" height={15} width={15} alt="" />
                                </div>
                            </div>

                            <div>
                                <p className={style.etapa1}>Etapa 2</p>
                                <div ref={etapa1} className={style.confirmado1}>
                                    <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                                </div>
                            </div>

                            <div className={style.barraProgresso}></div>
                    
                            <div>
                                <p className={style.etapa}>Etapa 3</p>
                                <div ref={etapa2} className={style.naoConfirmado}>
                                    <Image src="/Image/sinalDeNaoConfirmado.svg" height={15} width={15} alt="" />
                                </div>
                            </div>

                        </div> */}

                        {/* <div className={style.organizar}>

                            <input className={style.campoInput_formas_de_pagamento_1} value="Número do cartão"/>

                            <input className={style.campoInput_formas_de_pagamento_1} value="Nome do titular"/>

                            <select className={style.campoInput_formas_de_pagamento_mes} id="dayOfBirth">
                                <option> Mês </option>
                                <option value="01"> 01 </option>
                                <option value="02"> 02 </option>
                                <option value="03"> 03 </option>
                                <option value="04"> 04 </option>
                                <option value="05"> 05 </option>
                                <option value="06"> 06 </option>
                                <option value="07"> 07 </option>
                                <option value="08"> 08 </option>
                                <option value="09"> 09 </option>
                                <option value="10"> 10 </option>
                                <option value="11"> 11 </option>
                                <option value="12"> 12 </option>
                            </select>

                            <select id="dayOfBirth" className={style.campoInput_formas_de_pagamento_ano}>
                                <option> Ano </option>
                                <option value="12"> 2024 </option>
                                <option value="12"> 2025 </option>
                                <option value="12"> 2026 </option>
                                <option value="12"> 2027 </option>
                                <option value="12"> 2028 </option>
                                <option value="12"> 2029 </option>
                                <option value="12"> 2030 </option>
                                <option value="12"> 2031 </option>
                                <option value="12"> 2032 </option>
                                <option value="12"> 2033 </option>
                                <option value="12"> 2034 </option>
                                <option value="12"> 2034 </option>
                                <option value="12"> 2035 </option>
                                <option value="12"> 2036 </option>
                                <option value="12"> 2037 </option>
                                <option value="12"> 2038 </option>
                                <option value="12"> 2039 </option>
                                <option value="12"> 2040 </option>
                                <option value="12"> 2041 </option>
                                <option value="12"> 2042 </option>
                                <option value="12"> 2043 </option>
                                <option value="12"> 2045 </option>
                                <option value="12"> 2046 </option>
                                <option value="12"> 2047 </option>
                                <option value="12"> 2048 </option>
                                <option value="12"> 2049 </option>
                                <option value="12"> 2050 </option>
                                <option value="12"> 2051 </option>
                                <option value="12"> 2052 </option>
                                <option value="12"> 2053 </option>
                                <option value="12"> 2054 </option>
                            </select>

                            <input className={style.cv_cartao} value="CVV/CVC/CID"/>
                            
                            <select id="dayOfBirth" className={style.campoInput_formas_de_pagamento_ano}>
                                <option> Parcelar em </option>
                                <option value="12"> 2024 </option>
                                
                            </select>

                            <input className={style.botaoAvancar_7} type="button" value="Avançar"/>
                        </div> */}

                        <div className={style.organizar_pagamento_tudo}>
                            <div className={style.organizar_pagamentos}>
                                <div className={style.organizar_pix}>
                                    <input type="radio"/>
                                    <p className={style.nome_pix}>PIX</p>
                                    <p className={style.desconto_pix}>5% de desconto</p>
                                </div>
                                <div className={style.organizar_boleto}>
                                    <input type="radio"/>
                                    <p className={style.nome_boleto}>BOLETO BANCÁRIO</p>
                                </div>
                                <div className={style.organizar_credito}>
                                    <input type="radio"/>
                                    <p className={style.nome_credito}>CARTÃO DE CRÉDITO</p>
                                </div>
                                <div className={style.organizar_debito}>
                                    <input type="radio"/>
                                    <p className={style.nome_debito}>CARTÃO DE DÉBITO</p>
                                </div>
                            </div>
                            <div className={style.informacoes_pagamento}>
                                <p className={style.informacoes_pagamento_titulo}>Aceitamos todas as formas de pagamento</p>
                                <div className={style.organizar_cartoes_informacoes}>
                                    <Image className={style.cartoes} height={31} width={48} src="/Image/cartao_master_card.png" alt=""/>
                                    <Image className={style.cartoes} height={31} width={48} src="/Image/cartao_hipercard.png" alt=""/>
                                    <Image className={style.cartoes} height={31} width={48} src="/Image/cartao_visa.png" alt=""/>
                                    <Image className={style.cartoes} height={31} width={48} src="/Image/cartao_elo.png" alt=""/>
                                    <Image className={style.cartoes} height={31} width={48} src="/Image/pix.png" alt=""/>
                                    <Image className={style.cartoes} height={31} width={48} src="/Image/boleto.png" alt=""/>
                                </div>
                                
                                <div className={style.descricao_1_pagamento}>
                                    <p className={style.descricao_1_pagamento_titulo}>Segurança no pagamento</p>
                                    <p>SHEIN tem o compromisso de proteger suas informações de 
pagamento e compartilhá-las exclusivamente com os provedores de 
pagamento que mantêm essas informações em sigilo.</p>
                                </div>
                                
                                <div className={style.descricao_1_pagamento}>
                                    <p className={style.descricao_1_pagamento_titulo}>Segurança na privacidade</p>
                                    <p>
SHEIN respects the privacy of users and visitors on our site, and we are committed to protecting it through maintaining industry-standard physical, technical, and administrative measures designed to guard your personal data from unauthorized processing, use or disclosure.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className={style2.recibo}>
                    
                    <p className={style2.recibo_nome}>Resumo do pedido</p>

                    <div className={style2.organizar_valor_primeiro}>
                        <p className={style2.nome_valor_primeiro}>Valor dos produtos:</p>
                        <p className={style2.valor_primeiro}>R$ 3.111,10</p>
                    </div>

                    <div className={style2.barra_divisoria}></div>

                    <div className={style2.organizar_valor_frete}>
                        <p className={style2.valor_frete_nome}>Frete</p>
                        <p className={style2.valor_frete}>R$ 0,00</p>
                    </div>

                    <div className={style2.organizar_valor_descricao_prazo}>
                        <div className={style2.organizar_valor_prazo}>
                            <p className={style2.nome_valor_prazo}>Total á prazo:</p>
                            <p className={style2.valor_prazo}>R$ 3.111,10</p>
                        </div>
                        <p className={style2.descricao_prazo}>(em até <bdo className={style2.bold}> 10x </bdo> de <bdo className={style2.bold}> R$ 311,11 </bdo> sem juros)</p>
                    </div>

                    <div className={style2.organizar_valor_segundo}>
                        <p className={style2.valor_segundo_nome}>Valor á vista no <bdo style={{marginLeft:"0px"}} className={style2.bold}>Pix:</bdo></p>
                        <p className={style2.valor_segundo}>R$ 2.799,99</p>
                        <p className={style2.valor_segundo_economize}>(Economize: <bdo style={{marginLeft:"0px"}} className={style2.bold}>R$ 311,11)</bdo></p>
                    </div>

                    <div className={style2.organizar_botoes}>
                        <input className={style2.botoes} value="Ir para o pagamento"/>
                        <input className={style2.botoes} value="Continuar comprando"/>
                    </div>

                </div>
            </div>

            <Rodape/>

        </div>
    )    
}