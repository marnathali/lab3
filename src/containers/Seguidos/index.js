// Dependencies
import React, { Component } from 'react';
import Miembro from '../../components/Miembro';
import MigasDePan from '../../components/MigasDePan';

import miembros from '../../API/seguidos.js';

class Photos extends Component {
	render() {
		return (
			<section>
		      <div className="container">
		        <div className="row">
		          <div className="col-md-8">
					<div className="seguidos">
						<MigasDePan vista="Seguidos" />
						<h1>Seguidos</h1>
							{ miembros.map((seguido, index) => <Miembro key={index} {...seguido} button="Dejar de Seguir" />) }
					</div>
			      </div>
		        </div>
		      </div>
		    </section>
		);
	}
}
export default Photos;