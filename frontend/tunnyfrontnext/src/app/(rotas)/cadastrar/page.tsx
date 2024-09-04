"use client"
import axios from "axios"
import style from "./cadastrar.module.css"
import { useState } from "react";
import { inserirDados } from "@/interfaces";

export default function Cadastrar(){
    
  const [tabelaBanner] = useState('banner');
  const [imageBanner, setImageBanner] = useState('');

  const [tabelaImagens] = useState('imagens')
  const [imagemImagens1, setImagemImagens1] = useState('')
  const [imagemImagens2, setImagemImagens2] = useState('')
  const [imagemImagens3, setImagemImagens3] = useState('')
  const [imagemImagens4, setImagemImagens4] = useState('')
  const [idProdutoImagem, setIdProdutoImagem] = useState('')


  const [tabelaComentario] = useState('comentario')
  const [nomeComentario, setNomeComentario] = useState('')
  const [comentarioComentario, setComentarioComentario] = useState('')
  const [estrelasComentario, setEstrelasComentario] = useState('')
  const [dataComentario, setDataComentario] = useState('')
  const [idProdutoComentario, setIdProdutoComentario] = useState('')

  const [tabelaPromocoes] = useState('promocoes');
  const [nomePromocoes, setNomePromocoes] = useState('');

  const [tabelaCatalogo] = useState('catalogo');
  const [imageCatalogo, setImageCatalogo] = useState('');
  const [nomeCatalogo, setNomeCatalogo] = useState('');

  const [tabelaProduto] = useState('produto');
  const [descontoProduto, setDescontoProduto] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [avaliacoesProduto, setAvaliacoesProduto] = useState('');
  const [estrelasQuantidadeProduto, setEstrelasQuantidadeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [formaDePagamentoProduto, setFormaDePagamentoProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [urlProduto, setUrlProduto] = useState('');
  const [descricaoDoProduto, setDescricaoDoProduto] = useState('');

  const [tabelaCatalogo2] = useState('catalogo2');
  const [imageCatalogo2, setImageCatalogo2] = useState('');
  const [nomeCatalogo2, setNomeCatalogo2] = useState('');

  const [tabelaBanner2] = useState('banner2');
  const [imageBanner2, setImageBanner2] = useState('');

  const [tabelaBannerDuplo] = useState('bannerDuplo');
  const [image1BannerDuplo, setImageBanner1Duplo] = useState('');
  const [image2BannerDuplo, setImageBanner2Duplo] = useState('');

  const [tabelaProduto2] = useState('produto2');
  const [descontoProduto2, setDescontoProduto2] = useState('');
  const [nomeProduto2, setNomeProduto2] = useState('');
  const [avaliacoesProduto2, setAvaliacoesProduto2] = useState('');
  const [estrelasQuantidadeProduto2, setEstrelasQuantidadeProduto2] = useState('');
  const [precoProduto2, setPrecoProduto2] = useState('');
  const [formaDePagamentoProduto2, setFormaDePagamentoProduto2] = useState('');
  const [tipoProduto2, setTipoProduto2] = useState('');
  const [urlProduto2, setUrlProduto2] = useState('');

    function enviar(dados: inserirDados) {
        axios.post("http://localhost:3030", dados).then((res) => console.log(res.data));
    }

    class dados{
      
      banner = () => {
        const banner = {
          banner: {
            tabela: tabelaBanner,
            data: {
              image: imageBanner,
            },
          },
        }
        enviar(banner)
      }

      banner2 = () => {
        const banner2 = {
          banner2: {
            tabela: tabelaBanner2,
            data: {
              imagem: imageBanner2,
            },
          },
        }
        enviar(banner2)
      }
      
      bannerDuplo = () => {
        const bannerDuplo = {
          bannerDuplo: {
            tabela: tabelaBannerDuplo,
            data: {
              imagem1: image1BannerDuplo,
              imagem2: image2BannerDuplo
            },
          },
        }
        enviar(bannerDuplo)
      }

      catalogo = () => {
        const catalogo = {
          catalogo: {
            tabela: tabelaCatalogo,
            data: {
              imagem: imageCatalogo,
              nome: nomeCatalogo,
            },
          }
        }
        enviar(catalogo)
      }

      catalogo2 = () => {
        const catalogo2 = {
          catalogo2: {
            tabela: tabelaCatalogo2,
            data: {
              imagem: imageCatalogo2,
              nome: nomeCatalogo2,
            },
          },
        }
        enviar(catalogo2)
      }

      imagens = () => {
        const imagens = {
          imagens: {
            tabela: tabelaImagens,
            data: {
              imagem1: imagemImagens1,
              imagem2: imagemImagens2,
              imagem3: imagemImagens3,
              imagem4: imagemImagens4,
              idProduto: idProdutoImagem
            },
          },
        }
        enviar(imagens)
      }


      comentario = () => {
        const comentario = {
          comentario: {
            tabela: tabelaComentario,
            data: {
              nome: nomeComentario,
              comentario: comentarioComentario,
              estrelas: estrelasComentario,
              data: dataComentario,
              idProduto: idProdutoComentario
            },
          },
        }
        enviar(comentario)
      }

      
      produto = () => {
        var estrela = Number(estrelasQuantidadeProduto)
        var valor = Number(precoProduto)
        const produto = {
          produto: {
            tabela: tabelaProduto,
            data: {
              url: urlProduto,
              desconto: descontoProduto,
              sobre: descricaoDoProduto,
              nome: nomeProduto,
              avaliacoes: avaliacoesProduto,
              estrelasQuantidade: estrela,
              preco: valor,
              formaDePagamento: formaDePagamentoProduto,
              tipo: tipoProduto,
            },
          },
        }
        enviar(produto)
      }

      produto2 = () => {
        var estrela = Number(estrelasQuantidadeProduto2)
        var valor = Number(precoProduto2)
        const produto2 = {
          produto2: {
            tabela: tabelaProduto2,
            data: {
              url: urlProduto2,
              desconto: descontoProduto2,
              nome: nomeProduto2,
              avaliacoes: avaliacoesProduto2,
              estrelasQuantidade: estrela,
              preco: valor,
              formaDePagamento: formaDePagamentoProduto2,
              tipo: tipoProduto2,
            },
          },
        }
        enviar(produto2)
      }

      promocoes = () => {
        const promocoes = {
          promocoes: {
            tabela: tabelaPromocoes,
            data: {
              nome: nomePromocoes,
            },
          },
        }
        enviar(promocoes)
      }
    }

    const valores = new dados()
    
    return (
      <div className={style.fundo}>

        <div className={style.tabelaBanner}>
          <input
            type="text"
            value="banner"
            disabled
          />
          <input
            type="text"
            value={imageBanner}
            onChange={(e) => setImageBanner(e.target.value)}
            placeholder="adicione uma url"
          />
          <input type="button" onClick={valores.banner} value="enviar" />
        </div>

        <div className={style.tabelaPromocoes}>
          <input
            type="text"
            value="promocoes"
            disabled
          />
          <input
            type="text"
            value={nomePromocoes}
            onChange={(e) => setNomePromocoes(e.target.value)}
            placeholder="adicione uma promocao"
          />
          <input type="button" onClick={valores.promocoes} value="enviar" />
        </div>

        <div className={style.tabelaCatalogo}>
          <input
            type="text"
            value="catalogo"
            disabled
          />
          <input
            type="text"
            value={imageCatalogo}
            onChange={(e) => setImageCatalogo(e.target.value)}
            placeholder="adicione uma imagem"
          />
          <input
            type="text"
            value={nomeCatalogo}
            onChange={(e) => setNomeCatalogo(e.target.value)}
            placeholder="adicione um nome"
          />
          <input type="button" onClick={valores.catalogo} value="enviar" />
        </div>

        <div className={style.tabelaProduto}>
          <input
            type="text"
            value="produto"
            disabled
          />
          <input
            type="text"
            value={descontoProduto}
            onChange={(e) => setDescontoProduto(e.target.value)}
            placeholder="adicione um desconto"
          />
          <input
            type="text"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            placeholder="adicione um nome"
          />
          <input
            type="text"
            value={urlProduto}
            onChange={(e) => setUrlProduto(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="text"
            value={descricaoDoProduto}
            onChange={(e) => setDescricaoDoProduto(e.target.value)}
            placeholder="adicione a descrição do produto"
          />
          <input
            type="number"
            value={avaliacoesProduto}
            onChange={(e) => setAvaliacoesProduto(e.target.value)}
            placeholder="adicione as avaliações"
          />
          <input
            type="number"
            value={estrelasQuantidadeProduto}
            onChange={(e) => setEstrelasQuantidadeProduto(e.target.value)}
            style={{ width: "150px" }}
            placeholder="adicione estrelas 1 a 5"
            max={5}
            min="1"
          />
          <input
            type="number"
            value={precoProduto}
            onChange={(e) => setPrecoProduto(e.target.value)}
            placeholder="adicione o preço"
            min="1"
          />
          <input
            type="text"
            value={formaDePagamentoProduto}
            onChange={(e) => setFormaDePagamentoProduto(e.target.value)}
            placeholder="adicione forma de pagamento"
          />
          <input
            type="text"
            value={tipoProduto}
            onChange={(e) => setTipoProduto(e.target.value)}
            placeholder="adicione a categoria"
          />
          <input type="button" onClick={valores.produto} value="enviar" />
        </div>
        
        <div className={style.tabelaProduto2}>
          <input
            type="text"
            value="produto2"
            disabled
          />
          <input
            type="text"
            value={descontoProduto2}
            onChange={(e) => setDescontoProduto2(e.target.value)}
            placeholder="adicione um desconto"
          />
          <input
            type="text"
            value={nomeProduto2}
            onChange={(e) => setNomeProduto2(e.target.value)}
            placeholder="adicione um nome"
          />
          <input
            type="text"
            value={urlProduto2}
            onChange={(e) => setUrlProduto2(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="number"
            value={avaliacoesProduto2}
            onChange={(e) => setAvaliacoesProduto2(e.target.value)}
            placeholder="adicione as avaliações"
          />
          <input
            type="number"
            value={estrelasQuantidadeProduto2}
            onChange={(e) => setEstrelasQuantidadeProduto2(e.target.value)}
            style={{ width: "150px" }}
            placeholder="adicione estrelas 1 a 5"
            max={5}
            min="1"
          />
          <input
            type="number"
            value={precoProduto2}
            onChange={(e) => setPrecoProduto2(e.target.value)}
            placeholder="adicione o preço"
            min="1"
          />
          <input
            type="text"
            value={formaDePagamentoProduto2}
            onChange={(e) => setFormaDePagamentoProduto2(e.target.value)}
            placeholder="adicione forma de pagamento"
          />
          <input
            type="text"
            value={tipoProduto2}
            onChange={(e) => setTipoProduto2(e.target.value)}
            placeholder="adicione a categoria"
          />
          <input type="button" onClick={valores.produto2} value="enviar" />
        </div>

        <div className={style.tabelaCatalogo2}>
          <input
            type="text"
            value="catalogo2"
            disabled
          />
          <input
            type="text"
            value={imageCatalogo2}
            onChange={(e) => setImageCatalogo2(e.target.value)}
            placeholder="adicione uma imagem"
          />
          <input
            type="text"
            value={nomeCatalogo2}
            onChange={(e) => setNomeCatalogo2(e.target.value)}
            placeholder="adicione um nome"
          />
          <input type="button" onClick={valores.catalogo2} value="enviar" />
        </div>

        <div className={style.tabelaBanner2}>
          <input
            type="text"
            value="banner2"
            disabled
          />
          <input
            type="text"
            value={imageBanner2}
            onChange={(e) => setImageBanner2(e.target.value)}
            placeholder="adicione uma url"
          />
          <input type="button" onClick={valores.banner2} value="enviar" />
        </div>

        <div className={style.tabelaBannerDuplo}>
          <input
            type="text"
            value="bannerDuplo"
            disabled
          />
          <input
            type="text"
            value={image1BannerDuplo}
            onChange={(e) => setImageBanner1Duplo(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="text"
            value={image2BannerDuplo}
            onChange={(e) => setImageBanner2Duplo(e.target.value)}
            placeholder="adicione uma url"
          />
          <input type="button" onClick={valores.bannerDuplo} value="enviar" />
        </div>

        <div className={style.imagens}>
          <input
            type="text"
            value="imagens"
            disabled
          />
          <input
            type="text"
            value={imagemImagens1}
            onChange={(e) => setImagemImagens1(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="text"
            value={imagemImagens2}
            onChange={(e) => setImagemImagens2(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="text"
            value={imagemImagens3}
            onChange={(e) => setImagemImagens3(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="text"
            value={imagemImagens4}
            onChange={(e) => setImagemImagens4(e.target.value)}
            placeholder="adicione uma url"
          />
          <input
            type="number"
            value={idProdutoImagem}
            onChange={(e) => setIdProdutoImagem(e.target.value)}
            placeholder="adicione o id do produto"
          />
          <input type="button" onClick={valores.imagens} value="enviar" />
        </div>


        <div className={style.imagens}>
          <input
            type="text"
            value="comentario"
            disabled
          />
          <input
            type="text"
            value={nomeComentario}
            onChange={(e) => setNomeComentario(e.target.value)}
            placeholder="adicione seu nome"
          />
          <input
            type="text"
            value={comentarioComentario}
            onChange={(e) => setComentarioComentario(e.target.value)}
            placeholder="adicione um comentario"
          />
          <input
            type="date"
            value={dataComentario}
            onChange={(e) => setDataComentario(e.target.value)}
            placeholder="adicione uma data"
          />
          <input
          style={{width:"120px"}}
            type="number"
            max={5}
            min={1}
            value={estrelasComentario}
            onChange={(e) => setEstrelasComentario(e.target.value)}
            placeholder="adicione estrelas"
          />
          <input
            type="number"
            value={idProdutoComentario}
            onChange={(e) => setIdProdutoComentario(e.target.value)}
            placeholder="adicione o id do produto"
          />
          <input type="button" onClick={valores.comentario} value="enviar" />
        </div>
      </div>
    );
}