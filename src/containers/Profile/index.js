// Dependencies
import React, { Component } from 'react';

//Component
import ResumenPerfil from '../../components/ResumenPerfil/ResumenPerfil.js';
import RealizarPublicacion from '../../components/RealizarPublicacion';
import FotosContenedor from '../../components/FotosContenedor';
import Publicacion from '../../components/Publicacion';

// API
import perfil from '../../API/perfilUsuario.js';
import publicaciones from '../../API/publicaciones.js';

class Profile extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			descripcion: "",
			publicaciones: [publicaciones[0]]
		}

		this.handleCrearPublicacion = this.handleCrearPublicacion.bind(this);
	}

	handleCrearPublicacion(event) {
		event.preventDefault()
		const fechaHora = new Date(); 
		const fecha = fechaHora.getDate() + "/"
                    + (fechaHora.getMonth()+1)  + "/" 
                    + fechaHora.getFullYear();
        const hora  = (fechaHora.getHours() > 12 ? "0" + (fechaHora.getHours() - 12) : fechaHora.getHours()) + ":"  
                    + (fechaHora.getMinutes() < 10 ? "0" + fechaHora.getMinutes() : fechaHora.getMinutes());

		const publicacion = {
			"usuario": {
				"nombre": "Walter White",
				"img": perfil.url
			},
			"fecha": fecha, 
			"hora": hora,
			"descripcion": event.target.descripcion.value,
			"img": null,
			"meGusta": 0,
			"comentarios":[]
		}

		this.setState({
			descripcion: "",
			publicaciones: [publicacion].concat(this.state.publicaciones)
		})

	}

	render() {
		return (
			<div className="profile">
				<section className="bajar">
				  <div className="container">
				    <div className="row">
				      <div className="col-xs-12">
				      	<ResumenPerfil {...perfil} />
						<FotosContenedor />
						<RealizarPublicacion onCrearPublicacion={this.handleCrearPublicacion} descripcion={this.state.descripcion} />
						{
							this.state.publicaciones.map((publi, i) => <Publicacion key={i} {...publi} />)
						}
					  </div>
					</div>
				  </div>
				</section>
			</div>
		);
	}
}
export default Profile;