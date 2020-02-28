import React from 'react';
import Btncontrate from '../btncontrate/index'
import './style.scss'
import imac from '../../assets/img/img-imac.png'

export default () => (
    <section className="container-banner">
        <div className="slogan">
        <h2>Websites customizados para empresas</h2>
        <p>Temos o site que a sua empresa precisa para ser encontrada no Google.<br/>
        O mundo quer lhe conhecer.</p>
        <Btncontrate></Btncontrate>
        </div>
        <img src={imac} alt="imac"/>
            
    </section>
)