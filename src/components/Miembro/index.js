// Dependencies
import React, { Component } from 'react';
import swal from 'sweetalert2';

class Miembro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: this.props.button
		}
		this.handleSeguimiento = this.handleSeguimiento.bind(this)
	}
	
	handleSeguimiento() {
		if(this.state.button && this.state.button == "Dejar de Seguir") {
			swal({
		      title: `Se ha dejado de seguir a ${this.props.nombre}`,
		      type: 'success',
		      confirmButtonText: 'Continuar',
		      onClose: () => { 
		      	this.setState({
		      		button: "Seguir"
		      	})
		      }
		    })
		}
		if(this.state.button && this.state.button == "Seguir") {
			swal({
		      title: `Has comenzado seguir a ${this.props.nombre}`,
		      type: 'success',
		      confirmButtonText: 'Continuar',
		      onClose: () => { 
		      	this.setState({
		      		button: "Dejar de Seguir"
		      	})
		      }
		    })
		}
	}

	render () {
		return (
	        <div id="member"> 
	          <div className="row member-row">
	            <div className="col-xs-6">
	              <img src={this.props.url} className="img-thumbnail" alt="" />
	              <div className="text-center">
	                <strong>{this.props.nombre}</strong>
	              </div>
	            </div>
	              
	            <div className="col-xs-6">
	              <p>{ this.props.tipo === 1 ? this.props.descripcion : "" }</p>
	              <p><a href="#" className="btn btn-primary btn-block"><i className="fa fa-edit"></i> Ver Perfil</a></p>  
	              {
	              	this.props.button && <button id="" type="button" onClick={this.handleSeguimiento} className="btn btn-default btn-block"><i className="fa fa-edit"></i> {this.state.button}</button>	
	              }
	              
	            </div>
	          </div>
	          <hr />
	        </div>

		);
	}
}

export default Miembro;