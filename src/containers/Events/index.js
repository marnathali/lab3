// Dependencies
import React, { Component } from 'react';
import Evento from '../../components/Evento';
import Filtro from '../../components/Filtro';

// API
import filtros from '../../API/filtros.js';
import eventos from '../../API/eventos.js';

class Events extends Component {
	render() {
		return (
			<div className="Events">
				<section className="bajar">
				  <div className="container">
				    <div className="row">
				      <div className="col-xs-12">
						<h1>Eventos</h1>
						{ 
							filtros.filtrosEventos.map((filtro, index) => <Filtro key={index} id={filtro.key} titulo={filtro.titulo} items={filtro.items} /> )
						}
						{
							eventos.map((evento, index) => <Evento key={index} {...evento} />)
						}
					  </div>
                    </div>
                  </div>
                </section>
            </div>
		);
	}
}
export default Events;