import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component{

    constructor(){
    	super()
    }
render() {
   
    return (

      <header>
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
            <div className="container">
              <div className="col-xs-12 col-lg-6">
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Buscar</button>
                  </span>
                </div>
              </div>
            </div>
            <div id="navbar" className="collapse navbar-collapse menu2 navigation2-bar">
              <ul className="nav navbar-nav top-menu2">
                <li><Link to="/timeline" className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="glyphicon glyphicon-home" /> Inicio </Link></li>
                <li className="divider" />
                <li><Link to="/perfil" className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="glyphicon glyphicon-user" /> Perfil</Link></li>
                <li className="divider" />
                <li><Link to="/miembros" className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="glyphicon glyphicon-user" /> Miembros</Link></li>
                <li className="divider" />
                <li><Link to="/eventos" className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="glyphicon glyphicon-bullhorn" /> Eventos</Link></li>
                <li className="divider" />
                <li><Link to="/notificaciones" className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="glyphicon glyphicon-bell" /> Notificaciones <span className="badge">3</span></Link></li>
                <li><a onClick={this.props.onCerrarSesion} className="text-left" data-toggle="collapse" data-target=".navbar-collapse" style={{color: '#FFF'}}><i className="fa fa-sign-out" /> Cerrar Sesión</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

} export default Menu