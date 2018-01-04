import React from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';
import seguidos from '../../API/seguidos.js';


class ResumenPerfil extends React.Component
{

  constructor (props) {
    super(props)
    this.handleHabilitarFormulario = this.handleHabilitarFormulario.bind(this);
  }

  handleHabilitarFormulario(){
        document.getElementsByTagName("fieldset")[0].disabled=false;
        document.getElementById("oculto").style.display = "block";
  }

  handleGuardar () {
    swal({
      title: 'Operación Realizada con Exito',
      type: 'success',
      confirmButtonText: 'Continuar',
      onClose: () => { 
        document.getElementsByTagName("fieldset")[0].disabled=true 
        document.getElementById("oculto").style.display = 'none';
      }
    })
  } 

  componentDidMount() {
      document.getElementById("nombres").value = this.props.name;
      document.getElementById("apellidos").value=this.props.apellido;
      document.getElementById("fecha").value=this.props.fecha;
      document.getElementById("lugar").value=this.props.lugar;
      document.getElementById("residencia").value=this.props.residencia;
      document.getElementById("tlfn").value=this.props.telefono;
      document.getElementById("correo").value=this.props.correo;

  }
  render() {
	    return(
             
               <div className="row">
                 <div className="col-xs-12">
          
                   <div className="profile">

                    <div className="panel">
                      <div className="panel-heading">
                         <h1 href="profile.html" className="panel-title">Resumen de Perfil</h1>
                      </div>


                       <div className="row">
                         <div className="col-xs-12">
                            <a className="thumbnail"><img src={this.props.url} className=" imgVistaPerfil img-thumbnail" alt="Perfil"></img></a>
                         </div>
                       
                       <div className="col-xs-12">
                         <ul>
                            <li><strong><h3> {this.props.name} {this.props.apellido} </h3></strong></li> 
                   
                            <li><strong>Residencia: </strong>{this.props.residencia}</li>
                            <li><strong>Correo: </strong>{this.props.correo}</li>
                            
                            <div className="center-block">
                              <Link to="/seguidos"><span className="glyphicon glyphicon-user"></span>Seguidos: {this.props.seguidos} </Link>
                              <Link to="/seguidores"><span className="glyphicon glyphicon-user"></span>Seguidores: {this.props.seguidores} </Link>
                              <Link to="/eventosAsistir"><span className="glyphicon glyphicon-tag"></span>Eventos: {this.props.eventos} </Link>
                           </div>
                         </ul>
                       </div>

                       <div className="center-block" id="espacio">
                         <a className="btn btn-link" data-toggle="modal" data-target="#Info"> <span className="glyphicon glyphicon-user"></span>Mas info.</a>
                         <a href="profile.html" className="btn btn-link"><span className="glyphicon glyphicon-picture"></span>Editar foto.</a> 
                       </div>


                           
                            
                           <div className="modal fade" id="Info" role="dialog">
                            <div className="modal-dialog">
    
                    
                        <div className="modal-content">
                        <div className="modal-header">
                           <button type="button" className="close" data-dismiss="modal">&times;</button>
                           <h4 className="modal-title">Más Información</h4>
                         </div>
                          <div className="modal-body">
                            <form className="form-horizontal">

                              
                              <div className="form-group">
                               <fieldset disabled>
                              
                              <label for="nombre" className="col-sm-2 control-label">Nombres: </label>

                              <div className="col-sm-4">
                                <input type="text" className="form-control" id="nombres" ></input>
                             </div>

                              <label for="apellidos" className="col-sm-2 control-label">Apellidos: </label>

                              <div className="col-sm-4">
                                <input type="text" className="form-control" id="apellidos" ></input>
                             </div>

                              <label for="nacimiento" className="col-lg-2 control-label">Fecha de Nacimiento: </label>

                              <div className="col-sm-4">
                                <input type="text" className="form-control" id="fecha"  ></input>
                             </div>

                              <label for="lugar" className="col-lg-2 control-label">Lugar de nacimiento: </label>
                                
                                <div className="col-sm-4">
                                <input type="text" className="form-control" id="lugar" ></input>
                             </div>

                              <label for="residencia" className="col-lg-2 control-label">Residencia: </label>

                             <div className="col-sm-4">
                                <input type="text" className="form-control" id="residencia" ></input>
                             </div>

                              <label for="tlfn" className="col-lg-2 control-label">Telefono: </label>
                                
                                <div className="col-sm-4">
                                <input type="text" className="form-control" id="tlfn" ></input>
                             </div>

                              <label for="correo" className="col-lg-2 control-label">correo: </label>

                                    <div className="col-md-4">
                                <input type="text" className="form-control" id="correo" ></input>
                             </div>
                            </fieldset>
                               </div>
                            </form>
                          </div>
                         <div className="modal-footer">
                             
                             <div className="row">
                                 <button  id="oculto" onClick={this.handleGuardar} type="button" className="btn btn-primary btn-inline pull-left">Guardar</button>
                              
                              <div className="boton pull-right">                       
                                 <button onClick={this.handleHabilitarFormulario} type="button" className="btn btn-primary btn-inline">Editar</button>
                                 <button type="button" className="btn btn-default btn-inline" data-dismiss="modal">Cerrar</button>
                              </div>

                             </div>
                           
                         </div>
                      </div>
                </div>
              </div>  
             
            </div>
         </div>
       </div>
     </div>
     </div>     
	);
            }

}

export default ResumenPerfil