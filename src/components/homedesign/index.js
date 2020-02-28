import React from 'react';
import './style.scss'
import design from '../../assets/img/img-home-design.png'

export default () => (
    <section className="home-design">
        <img src={design} alt="imac"/>
        <div className="texto">
        <h3>Design <br/>exclusivo</h3>
        <p>Tenha seu próprio site de alta qualidade, criando do zero ou remodelando o seu já existente.</p>
        <p>Seja para promover o seu negócio, mostrar seu trabalho ou um blog, você pode ter tudo isso com a Wappt.</p>
        </div>
    </section>
)