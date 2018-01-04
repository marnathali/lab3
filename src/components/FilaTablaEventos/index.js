import React, { Component } from 'react';
import Evento from '../Evento'

class FilaTablaEventos extends Component {
  render() {
    return (
    	<tr>
        <td>{this.props.evento.titulo}</td>
    	 	<td> <button type="button" className="btn btn-default btn-md" data-toggle="modal" data-target="#myModal"> Ver detalles </button>
    	 		<div id="myModal" className="modal fade" role="dialog">
          	<div className="modal-dialog">
              	<div className="modal-content">
                 		<div className="modal-header">
                    		<button type="button" className="close" data-dismiss="modal">×</button>
                    		<h4 className="modal-title"> Detalles</h4>
                  	</div>
                		<div className="modal-body">
                  			<div className="form-group">
		                      <Evento {...this.props.evento }/>
                  			</div>
                				<div className="modal-footer">
                  				<button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                				</div>
              			</div>
          		</div>
   					</div>
   				</div>
        </td>
    	</tr>

    );
  
  }
}

export default FilaTablaEventos;