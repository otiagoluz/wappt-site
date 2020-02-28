import React from "react"
import { Link } from "gatsby"
import "./style.scss"
import logo from "../../assets/img/whappt-logo.svg"
import BtnContact from '../BtnContact'

class Header extends React.Component {
  state = { className: "" }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset > 5000) {
      if (!this.state.className) {
        this.setState({ className: "header-block" })
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" })
      }
    }
  }
  
  render() {
    return (
      <main>
        <header className={this.state.className}>
          <div className="container">
            <nav className="header-nav">
              <Link to="/"><img className="logo-nav" src={logo} alt="logo wappt"/></Link>
              <ul>
                <Link className="nav-link" to="/">PLANOS</Link>
                <Link className="nav-link" to="/">PORTFÓLIO</Link>
                <Link className="nav-link" to="/">SOBRE</Link>
                <BtnContact>FALE CONOSCO</BtnContact>            
              </ul>
            </nav>
          </div>
        </header>
      </main>
    );
  }
}

export default Header
