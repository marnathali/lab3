import React from 'react';
import swal from 'sweetalert2';


class RecuperarContrasena extends React.Component{

  constructor(){
  	super()
    this.handleEnviar = this.handleEnviar.bind(this)
  }

  handleEnviar() {
    swal({
      title: 'Se Envio un Mensaje a su Correo para que pueda Recuperar su Contraseña',
      type: 'success',
      confirmButtonText: 'Continuar',
      onClose: () => {}
    })
  }

render() {
	return (
      <div className="modal fade" id="modalRecuperarContrasena" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{overflowY: 'scroll'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="myModalLabel">Recuperar Contraseña</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor>Correo:</label>
                  <input type="email" className="form-control" id placeholder="Introduzca correo" />
                </div>
              </form></div>
            <div className="modal-footer">
              <button type="button" id="botonRC" className="btn btn-success" onClick={this.handleEnviar}>
                Enviar<span className /><span className="hidden-xs" />
              </button>
              <button type="button" id="botonRC2" className="btn btn-success" data-dismiss="modal">
                Cancelar<span className /><span className="hidden-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

    ); 
  }
} 
export default RecuperarContrasena;