import React from 'react';
import swal from 'sweetalert2';

class RegistroUsuario extends React.Component{
  constructor() {
    	super()
      this.handleGuardar = this.handleGuardar.bind(this)
  }

  handleGuardar() {
    swal({
      title: 'Operación Realizada con Exito',
      type: 'success',
      confirmButtonText: 'Continuar',
      onClose: () => {}
    })
  }

  render() {
	  return ( 
      <div className="modal fade" id="modalRegistroUsuario" tabIndex={-1} role="dialog" aria-labelledby="modalTituloUsuario" aria-hidden="true" style={{overflowY: 'scroll'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="modalTituloUsuario">Modificar Información Usuario</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <div className="col-sm-4">
                    <a className="post-avatar thumbnail"><img src="img/user.png" alt /><div className="text-center">Cambiar Imagen</div></a>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor>Nombre:</label>
                  <input type="text" className="form-control" id="NombreU" placeholder="Introduzca Nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor>Apellido:</label>
                  <input type="text" className="form-control" id="NombreU" placeholder="Introduzca Apellido" />
                </div>
                <div className="form-group">
                  <label htmlFor>Fecha de Nacimiento:</label>
                  <input className="form-control" type="date" id="fecha" name="fecha" step={1} min="1910-01-01" max="2017-12-31" defaultValue="2017-11-15" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor>Lugar de Nacimiento</label>
                  <input type="text" className="form-control" id placeholder="Introduzca Lugar de Nacimiento" />
                </div>
                <div className="form-group">
                  <label>Residencia</label>
                  <input type="text" className="form-control" id placeholder="Introduzca Residencia" />
                </div>
                <div className="form-group">
                  <label>Genero:</label>
                  <select className="form-control">
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otros</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor>Telefono</label>
                  <input type="text" className="form-control" id placeholder="Introduzca Telefono" />
                </div>
              </form></div>
            <div className="modal-footer">
              <button type="button" id="botonU" className="btn btn-success" onClick={this.handleGuardar} data-dismiss="modal">
                Guardar<span className /><span className="hidden-xs" />
              </button>
              <button type="button" id="botonU2" className="btn btn-success" data-dismiss="modal" >
                Cancelar<span className /><span className="hidden-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

    ); 
  }
} 
export default RegistroUsuario;