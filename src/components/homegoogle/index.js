import React from 'react';
import './style.scss'
import google from '../../assets/img/img-home-google.png'

export default () => (
    <section className="home-google">
        <div className="texto">
            <h3>Buscas ágeis<br/>no Google</h3>
            <p>Nossos sites possuem ótimas técnicas de programação de SEO para que você consiga atrair mais usuários e conquiste um posicionamento satisfatório e desejado para a sua marca ou empresa.</p>
        </div>
        <img src={google} alt="google"/>
    </section>
)