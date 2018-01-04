import React from 'react'


class LoginAdmin extends React.Component {

constructor(){
	super()
}

render() {

	return (
    <div className="loginAdmin" >
        <div className="modal fade" id="modalAdministrador" tabIndex={-1} role="dialog" aria-labelledby="modalTituloAdministrador" aria-hidden="true" style={{overflowY: 'scroll'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 className="modal-title" id="modalTituloAdministrador">Login Administrador</h4>
              </div>
              <div className="modal-body">
                <form>
                  <input type="text" placeholder="Usuario" className="form-control" />
                  <input type="password" placeholder="Contraseña" className="form-control" />
                  <button type="button" className="btn btn-success" onClick={this.props.onIniciarAdmin} id="botonI">Iniciar Sesión</button><br /><br />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" id="botonRC2" className="btn btn-danger" data-dismiss="modal">
                  Cerrar<span className /><span className="hidden-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    ); 
  }
} 
export default LoginAdmin;