import React from 'react'

import Acceso from '../Acceso';

class Login extends React.Component{

  constructor () {
  	super ()
  }

  render () { 
    return (
      <div className="login">
        <canvas id="background" />
          <section className="bajar">
            <div className="container  text-center">
              <div className="row">
                <div className="col-xs-12">
                  <div className="logo">
                    <img src="img/logo.png" className="logo" />
                  </div>
                  <Acceso onIniciarSesion={this.props.onIniciarSesion}  onIniciarAdmin={this.props.onIniciarAdmin}/>
                </div>
              </div>
            </div>
          </section>
      </div>
    );
  }

} 
export default Login;