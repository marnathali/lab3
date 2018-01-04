// Dependencies
import React, { Component } from 'react';
import Miembro from '../../components/Miembro';
import Filtro from '../../components/Filtro';

// API
import filtros from '../../API/filtros.js';
import miembros from '../../API/miembros.js';

class Members extends Component {
	render() {
		return (
			<section>
		      <div className="container">
		        <div className="row">
		          <div className="col-md-8">
					<div className="members">
						<h1>Miembros</h1>
						{ 
							filtros.filtrosMiembros.map((filtro, index) => <Filtro key={index} id={filtro.key} titulo={filtro.titulo} items={filtro.items} /> )
						}
						{
							miembros.map((miembro, index) => <Miembro key={index} {...miembro} button="Seguir"/>)
						}
					</div>
			      </div>
		        </div>
		      </div>
		    </section>
		);
	}
}
export default Members;