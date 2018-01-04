import React from 'react'

import Registro from './Registro';
import LoginAdmin from './LoginAdmin';
import RecuperarContrasena from './RecuperarContrasena';

class Acceso extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
  	return(
       <section className="bajarlogin">
              <div className="row">
                <div className="col-md-12">
                  <div className="panel-transparent">
                    <div className="panel-transparent">
                    <div>
                      <h1 style={{color: '#fff'}}>Bienvenidos</h1>
                    </div>
                    
                    <form className="form">
                      <input type="email" placeholder="Correo" className="email" />
                      <input type="password" placeholder="Contraseña" className="pass" />
                      <button type="button" onClick={this.props.onIniciarSesion} id="botonI">Iniciar Sesión</button><br /><br />
                      <p className="message" style={{color: '#FFF'}}>¿Aun No tienes cuenta? <a style={{color: '#FFF'}} data-toggle="modal" data-target="#modalRegistro">Registrate</a></p>
                      <p className="message" style={{color: '#FFF'}}> <a style={{color: '#FFF'}} data-toggle="modal" data-target="#modalRecuperarContrasena">¿Olvidaste tu contraseña?</a></p>
                    </form>
                    
                    <Registro />
                    <RecuperarContrasena />
                    <br />
                    <br />
                    
                    <p className="message" style={{color: '#FFF'}}> <a style={{color: '#FFF'}} data-toggle="modal" data-target="#modalAdministrador">Administrador</a></p>
                    <LoginAdmin onIniciarAdmin={this.props.onIniciarAdmin}/>
                    </div>
                  </div>
                </div>
              </div>
        </section>      
  	);
  }
}
export default Acceso;

