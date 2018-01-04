import React from 'react';
import swal from 'sweetalert2';

import RegistroFundacion from './RegistroFundacion';
import RegistroUsuario from './RegistroUsuario';
import TerminosCondiciones from './TerminosCondiciones';

class Registro extends React.Component{

  constructor(props){
    super(props);
 
    this.state = { checked: true, checked2: false};
    this.handleChanged = this.handleChanged.bind(this);
    this.handleRegistrar = this.handleRegistrar.bind(this);
    this.state =({
      nombre:'#modalRegistroUsuario'
    });
  }

  handleChanged(e) {
    if(e.target.id==='contact1') {
      this.setState({
        nombre:e.target.value
      })    
    }

    if (e.target.id==='contact2') {
      this.setState({
        nombre:e.target.value
      })
        
    } 
  }
 
  handleRegistrar() {
    swal({
      title: 'Se envio una verificacion a su correo',
      type: 'success',
      confirmButtonText: 'Continuar'
    })
  }

  render() {

  	return ( 
       <div>
          <div className="modal fade" id="modalRegistro" tabIndex={-1} role="dialog" aria-labelledby="modalTitulo" aria-hidden="true" style={{overflowY: 'scroll'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  <h4 className="modal-title" id="modalTitulo">Registrate es Gratis...</h4>
                </div>
                <div className="modal-body">
                    <div className="group-item">
                      <div className="form-group ">
                        <label className htmlFor="exampleInputEmail3">Con tu red social</label>   
                        <div className="container">
                          <button type="button" className="btn btn-danger" onclick="gr.google.connect();"><span> <i className="fa fa-google" aria-hidden="true" /> Google</span></button>
                          <button type="button" className="btn botonface" onclick="gr.facebook.connect();"><i className="fa fa-facebook" aria-hidden="true" /><span> Facebook</span></button>
                          <button type="button" className="btn btn-info" onclick="gr.twitter.connect();"><i className="fa fa-twitter" aria-hidden="true" /><span> Twitter</span> </button>
                        </div>
                      </div>
                    </div>
             
                    <div>
                    
                      <input type="radio" id="contact1" value="#modalRegistroFundacion" name="contact" defaultValue="F"  onChange={ this.handleChanged } />
                      <label>Fundación</label>  
                      <input type="radio" id="contact2" value="#modalRegistroUsuario" name="contact" defaultValue="U"  onChange={ this.handleChanged } defaultChecked />
                      <label>Usuario</label>
                    </div>
                    <br/>

                    <div className="form-group">
                      <label>Nombre:</label>
                      <input type="text" className="form-control" id="NombreU" placeholder="Introduzca Nombre" />
                    </div>
                    <div className="form-group">
                      <label >Correo:</label>
                      <input type="email" className="form-control" id placeholder="Introduzca correo" />
                    </div>
                    <div className="form-group">
                      <label >Contraseña</label>
                      <input type="password" className="form-control" id placeholder="Introduzca Contraseña" />
                    </div>
                    <div className="form-group">
                      <label >Confirmar Contraseña</label>
                      <input type="password" className="form-control" id placeholder="Introduzca Contraseña" />
                    </div>
                </div>

                <div className="checkbox container-2">
                  <label>
                    <input type="checkbox" defaultValue id="terminos" />
                    <a href="#" style={{color: ''}} data-toggle="modal" data-target="#modalTerminosCondiciones">Acepto Terminos y Condiciones</a>
                  </label>
                </div>
                <div className="modal-footer">
                  <button type="button" id="botonR" className="btn btn-success" onClick={this.handleRegistrar} data-dismiss="modal" data-toggle="modal" data-target={this.state.nombre} >
                    Registrarte<span className /><span className="hidden-xs" />
                  </button>
                  <button type="button" id="botonR1" className="btn btn-success" data-dismiss="modal">
                    Cancelar<span className /><span className="hidden-xs" />
                  </button>
              
                </div>
              </div>
            </div>
          </div>
          <RegistroUsuario />
          <RegistroFundacion />
          <TerminosCondiciones />
        </div>

      );
  }

} 
export default Registro;