import React from 'react'


class ResumenPerfilFundacion extends React.Component
 {

  constructor (props) {
    super(props)
}

  onClick(){
        document.getElementsByTagName("fieldset")[0].disabled=false;
        document.getElementById("oculto").style.display = "block";
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
                 <div className="col-md-8">
          
                   <div className="profile">

                    <div className="panel">
                      <div className="panel-heading">
                         <h1 href="profile.html" className="panel-title">Resumen de Perfil Fundacion</h1>
                      </div>


                       <div className="row">
                         <div className="col-md-4">
                            <a href="profile.html" className="thumbnail"><img src="img/fundacion1.jpg" className=" imgVistaPerfil img-thumbnail" alt="Perfil"></img></a>
                         </div>
                       
                       <div className="col-md-8">
                         <ul>
                            <li><strong><h3>{this.props.name}</h3></strong></li> 
                   
                            <li><strong>Residencia:</strong>{this.props.residencia}</li>
                            <li><strong>Correo:</strong>{this.props.correo}</li>
                            
                            <div className="center-block">
                       <a className="btn btn-link" href="seguidos.html"> <span className="glyphicon glyphicon-user"></span>Seguidos: {seguidos.length} </a>
                              <a className="btn btn-link" href="seguidores.html"> <span className="glyphicon glyphicon-user"></span>Seguidores: {this.props.seguidores}</a>
                              <a  className="btn btn-link" href="eventosA.html"><span className="glyphicon glyphicon-tag"></span>Mis Eventos: {this.props.eventos}</a>

                              <a  className="btn btn-link" href="eventosA.html"><span className="glyphicon glyphicon-tag"></span>Eventos: 2</a>
                           </div>
                         </ul>
                       </div>

                       <div className="center-block" id="espacio">
                         <a className="btn btn-link" data-toggle="modal" data-target="#Info"> <span className="glyphicon glyphicon-user"></span>Mas info.</a>
                         <a href="profile.html" className="btn btn-link"><span className="glyphicon glyphicon-picture"></span>Editar foto.</a> 
                         <a href="photos.html" className="btn btn-link"><span className="glyphicon glyphicon-picture"></span>Fotos.</a> 
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
                                <input type="text" className="form-control" id="nombres" placeholder="Amigos de niños con Cancer"></input>
                             </div>

                             

                              <label for="nacimiento" className="col-lg-2 control-label">Fecha de Fundacion: </label>
                              <div className="col-sm-4">
                                <input type="text" className="form-control" id="fecha"  placeholder="19/04/2005"></input>
                             </div>

                              

                              <label for="residencia" className="col-lg-2 control-label">Direccion: </label>
                             <div className="col-sm-4">
                                <input type="text" className="form-control" id="residencia" placeholder="Oficina 04 sector centro Barquismeto Vzla"></input>
                             </div>

                              <label for="tlfn" className="col-lg-2 control-label">Telefono: </label>   
                                <div className="col-sm-4">
                                  <input type="text" className="form-control" id="tlfn" value="+58159158472"></input>
                                </div>

                              <label for="correo" className="col-lg-2 control-label">correo: </label>
                                    <div className="col-md-4">
                                      <input type="text" className="form-control" id="correo" placeholder="amigosconcancer@gmail.com"></input>
                                   </div>
                                   

                              <label for="alcance" className="col-lg-2 control-label">Alcance: </label>
                                   <div className="col-md-4">
                                     <input type="text" className="form-control" id="alcance" placeholder="Nacional"></input>
                                  </div>

                              
                              <label for="representante" className="col-lg-2 control-label">Representante: </label>
                                    <div className="col-md-4">
                                      <input type="text" className="form-control" id="representante" placeholder="Tony Stark"></input>
                                     </div>
                              

                                  <label for="mision" className="col-lg-2 control-label">Mision: </label>
                                    <div className="col-md-4">
                                      <textarea className="form-control" rows="5" id="comment" placeholder="Reducir las muerte infantil por causa del cancer"></textarea>
                                    </div>


                              <label for="vision" className="col-lg-2 control-label">Vision: </label>
                                    <div className="col-md-4">
                                      <textarea className="form-control" rows="5" id="comment" placeholder="Reducir las muerte infantil por causa del cancer"></textarea>
                                    </div>


                              <label for="objetivos" className="col-lg-2 control-label">Objetivos: </label>
                                    <div className="col-md-4">
                                    <textarea className="form-control" rows="5" id="comment" placeholder="Reducir las muerte infantil por causa del cancer"></textarea>
                                  </div>

                            </fieldset>
                     
                         </div>
                       </form>
                    </div>
                         <div className="modal-footer">
                             
                             <div className="row">
                                 <button  id="oculto" onClick="habilitar()" type="button" className="btn btn-primary btn-inline pull-left">Guardar</button>
                              
                              <div className="boton pull-right">                       
                                 <button onClick="habilitar()" type="button" className="btn btn-primary btn-inline">Editar</button>
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
export default ResumenPerfilFundacion
