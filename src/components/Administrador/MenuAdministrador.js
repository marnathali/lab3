import React from 'react'
import {Link} from 'react-router-dom'

class MenuAdministrador extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <img src="img/logo.png" className="logo" alt />
            </div>
            <div id="navbar" className="collapse navbar-collapse menu2 navigation2-bar">
              <ul className="nav navbar-nav top-menu2">
                <li><a onClick={this.props.onCerrarSesion} className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="fa fa-sign-out" /> Cerrar Sesión</a></li>
              </ul>
            </div>
          </div>
        </nav>

    );
  }
} 
export default MenuAdministrador;