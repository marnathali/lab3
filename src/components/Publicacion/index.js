import React, { Component } from 'react';
import Comentario from '../Comentario';

class Publicacion extends Component {
  constructor (props) {
    super (props);
    this.state = {
      meGusta: this.props.meGusta
    }
    this.handleContarMeGusta = this.handleContarMeGusta.bind(this)
  }

  handleContarMeGusta() {
    this.setState({
      meGusta: this.state.meGusta + 1
    })
  }

  render () {
    return ( 
      <div className="panel panel-default post">
        <div className="panel-body">
          <div className="col-xs-12">
            <div className="row header-post">
              <div className="col-xs-4 col-sm-offset-1 col-sm-2">
                <a className="post-avatar">
                  <img className="img img-responsive img-circle" src={this.props.usuario.img} alt="avatar" />
                </a>
              </div>
              <div className="col-xs-8">
                <div className="row">
                  <div className="text-left">
                    <a className="post-avatar">{this.props.usuario.nombre}</a> Ha realizado una publicación.
                  </div>
                </div>
                <div className="row">
                  <div className="text-left">
                    <p>{this.props.fecha} a las {this.props.hora}</p>
                  </div>
                </div>
              </div>
            </div> 
            <div className="row content-post"> 
              <div className="col-xs-12">
                <div className="pointer">
                  <p>{this.props.descripcion}</p>
                  { this.props.img && <img className="img img-responsive center-block" src={this.props.img} alt="post-image" /> }
                </div>
                <div className="pointer-border" />
              </div>
            </div> 
            <div className="row"> 
              <div className="post-actions">
                <a className="fa fa-lg fa-share"/>
                <span className="text-left">Compartir</span>
                <a className="fa fa-lg fa-thumbs-up pull-right" onClick={this.handleContarMeGusta} />
                <span id="like-counter" className="pull-right">{this.state.meGusta} Me gusta</span>
              </div>  
            </div> 
            <div className="row"> 
              <div className="comment-form">
                <form className="form-inline">
                  <input type="text" className="form-control" placeholder="Ingresar Comentario" />
                </form>
              </div>
            </div> 
            <div className="row"> 
              <div className="comments">
                {
                  this.props.comentarios.map((comment,i) => <Comentario key={i} {...comment} />)
                }
                 
                <div className="clearfix" />
              </div> 
            </div> 
          </div> 
        </div> 
	    </div>
    	);
  
  }
}

export default Publicacion;