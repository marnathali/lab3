// Dependencies
import React, { Component } from 'react';

import Miembro from '../../components/Miembro';
import MigasDePan from '../../components/MigasDePan';

import miembros from '../../API/seguidores.js';

class Photos extends Component {
	render() {
		return (
			<section>
		      <div className="container">
		        <div className="row">
		          <div className="col-md-8">
					<div className="seguidores">
						<MigasDePan vista="Seguidores" />
						<h1>Seguidores</h1>
						{ miembros.map((seguidor, index) => <Miembro key={index} {...seguidor} />) }

					</div>
			      </div>
		        </div>
		      </div>
		    </section>
		);
	}
}
export default Photos;