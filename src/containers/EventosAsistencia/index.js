// Dependencies
import React, { Component } from 'react';
import TablaEventos from '../../components/TablaEventos';
import Filtro from '../../components/Filtro';
import MigasDePan from '../../components/MigasDePan';
// API
import eventos from '../../API/eventos.js';

class EventosAsistencia extends Component {
	render() {
		return (
			<div className="EventosAsistencia">
				<MigasDePan vista="Eventos a Asistir" />
				<TablaEventos nombre="Walter" apellido="White" />
			</div>
		);
	}
}
export default EventosAsistencia;