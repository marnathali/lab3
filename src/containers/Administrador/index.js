// Dependencies
import React, { Component } from 'react';

// Components
import GlobalGoals from '../../components/Administrador/GlobalGoals';
import Usuario from '../../components/Administrador/Usuario';
import MenuAdministrador from '../../components/Administrador/MenuAdministrador';

class Administrador extends Component {
	render() {
		return (
			<div className="Administrador">
				<section className="bajar">
				  <div className="container">
				    <div className="row">
				      <div className="col-xs-12">
				        <MenuAdministrador onCerrarSesion={this.props.onCerrarSesion} />
				        <GlobalGoals />
				        <Usuario />
				      </div>
				    </div>
				  </div>
				</section>  
			</div>
		);
	}
}
export default Administrador;