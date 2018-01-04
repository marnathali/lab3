import React, { Component } from 'react';

class Comentario extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (  
    		<div className="comment">
          <a className="comment-avatar pull-left">
            <img className="img img-responsive img-circle" src={this.props.usuario.img} alt="image-profile" />
          </a>
          <div className="col-xs-offset-2 comment-text">
            <p><span className="comment-user">{this.props.usuario.nombre} </span></p> 
            <p>{this.props.descripcion}</p>
            <p className="text-right">{this.props.fecha} {this.props.hora}</p>
          </div>
        </div>    
    	);
  
  }
}

export default Comentario;