import "../../globals.css"
import style from "./sugestoes.module.css"
import Image from "next/image"

export default function Sugestoes(){
    return(
        <div>
            <div className={style.barramenu}>
                <div className={style.juncao}>
                    <Image width={32} height={30} src="/Image/voltar.png" alt="logo" className={style.barraimg}/>
                </div>
                <div className={style.englob}>
                    <p className={style.nomeSugestoes}>Sugestões</p>
                </div>
                <Image src="/Image/logo.png" alt="logo" width={130} height={64} className={style.logoimg}/>
            </div>

            <div className={style.organizar2}>
                <div className={style.filtro}>Últimos 2 dias</div>
                <div className={style.filtro}>Últimos 7 dias</div>
                <div className={style.filtro}>Últimos 14 dias</div>
                <div className={style.filtro}>Últimos 1 mês</div>
            </div>

            <Image className={style.imgfiltro} alt="" height={30} width={30} src="/Image/filtroimg.png"/>
            <p className={style.filtronome}>Mais Filtros</p>

            <Image className={style.imglupa} alt="" height={30} width={30} src="/Image/lupaRoxa.png"/>
            <p className={style.lupanome}>Procurar sugestões</p>

            <div className={style.barrarodape}>
                <p className={style.nomeRodape}>Deixe aqui uma sugestão para que possamos melhorar cada vez mais a sua experiência conosco
                </p>
            </div>

            <p className={style.nomecurtidas}>Mais Curtidas</p>

            <div className={style.bolaaddsugemaior}></div>
            <div className={style.bolaaddsugemenor}></div>

        </div>
    )
}