import React from 'react';

class Notificacion extends React.Component {

    render(){
    	let li = null;
    	if(this.props.tipo === 1)
    		li = <li  className="list-group-item"><strong>{this.props.usuario.nombre} </strong>Le dio me gusta a tu publicación</li>
    	if(this.props.tipo === 2)
    		li = <li  className="list-group-item"><strong>{this.props.usuario.nombre} </strong>ha comentado tu publicación</li>
    	if(this.props.tipo === 3)
    		li = <li  className="list-group-item"><strong>{this.props.usuario.nombre} </strong>ha comenzado a seguirte</li>
    	if(this.props.tipo === 4)
    		li = <li  className="list-group-item"><strong>{this.props.usuario.nombre} </strong>ha indicado que asistira a tu evento</li>

    	return (
             <div className="alert alert-info alert-dismissable">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">&times;</button>
                { li }
             </div>
   		);
    }
} 
export default Notificacion;

