import React, { Component } from 'react';

import FilaTablaEventos from '../FilaTablaEventos'

import eventos from '../../API/eventosAsistir.js'

class TablaEventos extends Component {
  render() {
    return (
      <section className="bajar">
        <div className="container">
        	<div className="row">
          	<div className="col-md-8">
          			<h3 className="page-header"> Eventos a Asistir de {`${this.props.nombre} ${this.props.apellido}`}</h3>
        				<div className="col-md-6">
        				
       						  <table className="table table-striped">
       							  <tbody>
       								  <tr>
           							  <th colspan="2">Evento</th>
           						  </tr>
           							{ eventos.map((event, index) => <FilaTablaEventos evento={event} />)} 
           						</tbody>
           					</table>
            		</div>
      			</div>
      		</div>
      	</div>		                	
      </section>
    );
  }
}

export default TablaEventos;