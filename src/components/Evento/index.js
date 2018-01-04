import React, { Component } from 'react';
import Comentario from '../Comentario'

class Evento extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meGusta: this.props.meGusta,
      asistencia: this.props.asistencia
    }
    this.handleContarAsistencia = this.handleContarAsistencia.bind(this)
    this.handleContarMeGusta = this.handleContarMeGusta.bind(this)
  }

  handleContarAsistencia() {
    if(this.state.asistencia + 1 <= this.props.meta) {
      this.setState({
        asistencia: this.state.asistencia + 1
      })
    }
    else  
      if (this.state.asistencia + 1 === this.props.meta) {
        this.setState({
          asistencia: this.state.asistencia + 1
        })
        document.getElementById("btn-asistir").disabled = true
      } 
  }

  handleContarMeGusta() {
    this.setState({
      meGusta: this.state.meGusta + 1
    })
  }

  componentDidUpdate () {
  }

  render() {
    let porc = (this.state.asistencia * 100 / this.props.meta).toFixed(0)
    return (
      <div className="panel panel-default post">
      <div className="panel-body">
        <div className="col-xs-12">
          <div className="row header-post"> 
            <div className="col-xs-4 col-sm-offset-1 col-sm-2">
            <a  className="post-avatar">
              <img className="img img-responsive img-circle" width="100" height="100" src={this.props.usuario.img} alt="avatar"/>
            </a>
            </div>
            <div className="col-xs-8">
              <div className="row">
                <div className="text-left">
                  <a className="post-avatar">{this.props.usuario.nombre}</a> Ha creado un Evento.
                </div>
              </div>
              <div className="row">
                <div className="text-left">
                  <p>{this.props.publicacion.fecha} a las {this.props.publicacion.hora}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row content-post">
            <div className="col-xs-12">
              <div className="pointer">
                <h3 className="text-center">{this.props.titulo}</h3>
                <p>{this.props.descripcion}</p>
                <p className="text-left">Fecha: {this.props.fecha}</p>
                <p className="text-left">Hora: {this.props.hora}</p>
                <p className="text-left">Direccion: {this.props.direccion}</p>
                <p className="text-left">Ciudad: {this.props.ciudad}</p>
                <p className="text-left">Estado: {this.props.estado}</p>
                <p>
                  { this.props.img && <img className="img img-responsive center-block" src={this.props.img} alt="post-image" /> }
                </p>
                <p>Meta de asistencia: {this.props.meta}</p>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped active bg-info" role="progressbar" 
                       style={{width: `${porc}%`}} aria-valuenow={porc} aria-valuemin={0} aria-valuemax={100}>
                    {porc}%
                  </div>
                </div>
              </div>
              <div className="pointer-border" />
            </div>
          </div>
          <div className="row"> 
            <div className="post-actions">
              <a className="fa fa-lg fa-share" />
              <span className="text-left">Compartir</span>
              <div className="pull-right">
                <span id="like-counter">{this.state.meGusta} Me gusta </span>  
                <a className=" fa fa-lg fa-thumbs-up" onClick={this.handleContarMeGusta} />
              </div>
              <div className="content-action pull-right" >
                <span id="like-counter">{this.state.asistencia} Asistir </span>
                <a id="btn-asistir" className="fa fa-lg fa-calendar" onClick={this.handleContarAsistencia} />
              </div>
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
            </div> 
            <div className="clearfix" />
          </div> 
          </div> 
        </div> 
      </div> 
    );
  
  }
}

export default Evento;