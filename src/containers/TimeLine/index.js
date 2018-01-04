// Dependencies
import React, { Component } from 'react';

import Publicacion from '../../components/Publicacion';
import Evento from '../../components/Evento';
import RealizarPublicacion from '../../components/RealizarPublicacion';
import PublicarEvento from '../../components/PublicarEvento';

import timeline from '../../API/timeline.js';

class TimeLine extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			descripcion: "",
			publicaciones: timeline
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
				"img": "img/user1.jpg"
			},
			"tipo": 1,
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
			<div className="timeline">
				<section className="bajar">
				  <div className="container">
				    <div className="row">
				      <div className="col-xs-12">
						<RealizarPublicacion onCrearPublicacion={this.handleCrearPublicacion} descripcion={this.state.descripcion} />
						{
							this.state.publicaciones.map((publi, index) => {
								if(publi.tipo === 1) return <Publicacion key={index} {...publi} />
								if(publi.tipo === 2) return <Evento key={index} {...publi} />
							})
						}
					  </div>
					</div>
				  </div>
				</section>
			</div>
		);
	}
}
export default TimeLine;