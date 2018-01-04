import React from 'react'
import { render } from 'react-dom';


class Opciones extends React.Component {

  constructor() {
    super()
  }

  render(){
    return (
      <div className="row">
        <br/>
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
              <div className="btn-group actions" role="group">
                <a  className="btn btn-default"><i className="glyphicon glyphicon-plus"></i> Nuevo</a>
                <a  className="btn btn-default"><i className="glyphicon glyphicon-pencil"></i> Editar</a>
                <a  className="btn btn-default"><i className="glyphicon glyphicon-remove"></i> Eliminar</a>
              </div>
            </div>
        <br/>
          </div>
    );
  }
}
export default Opciones;
 