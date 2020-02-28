import React from 'react';
import { Link } from 'gatsby'
import './style.scss'
import logo from '../../assets/img/whappt-logo.svg'

export default () => (
 <header>
   <div className="container">
      <nav className="header-nav">
        <Link to="/">
          <img className="logo-nav" src={logo} alt="logo wappt"/>
        </Link>
        <ul>
          <Link className="nav-link" to="/">PLANOS</Link>
          <Link className="nav-link" to="/">PORTFÓLIO</Link>
          <Link className="nav-link" to="/">SOBRE</Link>
          <Link to="/"><button className="nav-button">FALE CONOSCO</button></Link>
        </ul>
      </nav>
    </div>
 </header>
)