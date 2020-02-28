import React from 'react';
import './style.scss';
import Btncontrate from '../btncontrate/index'
import processo from '../../assets/img/img-processo.png'


export default () => (
    <section className="home-processo">
        <div className="processo">
            <img src={processo} alt="google"/>
        </div>
        <div className="texto">
            <h3>Processo de<br/>desenvolvimento</h3>
            <p>Nossos arquitetos de web design e desenvolvedores garantem que você tenha as melhores soluções da web, oferecendo a combinação perfeita de design e métricas de busca no google.</p>
            <Btncontrate></Btncontrate>
        </div>
        
    </section>
)