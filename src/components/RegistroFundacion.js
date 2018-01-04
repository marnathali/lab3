import React from 'react';
import swal from 'sweetalert2';

class RegistroFundacion extends React.Component{
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
      <div className="modal fade" id="modalRegistroFundacion" tabIndex={-1} role="dialog" aria-labelledby="modalTituloFundacion" aria-hidden="true" style={{overflowY: 'scroll'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="modalTituloFundacion">Modificar Información Fundación</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <div className="col-sm-4">
                    <a href="#" className="post-avatar thumbnail"><img src="img/group.png" alt /><div className="text-center">Cambiar Imagen</div></a>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor>Alcance:</label>
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label htmlFor>Representante:</label>
                  <input type="text" className="form-control" id placeholder="Introduzca Representante" />
                </div>
                <div className="form-group">
                  <label htmlFor>Telefono</label>
                  <input type="text" className="form-control" id placeholder="Introduzca Telefono" />
                </div>
                <div className="form-group">
                  <label htmlFor>Misión:</label>
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label htmlFor>Visión:</label>
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label htmlFor>Objetivos:</label>
                  <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                </div>
              </form></div>
            <div className="modal-footer">
              <button type="button" id="botonF" className="btn btn-success" onClick={this.handleGuardar} data-dismiss="modal">
                Guardar<span className /><span className="hidden-xs" />
              </button>
              <button type="button" id="botonF2" className="btn btn-success" data-dismiss="modal">
                Cancelar<span className /><span className="hidden-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

    ); 
  }
} 
export default RegistroFundacion;