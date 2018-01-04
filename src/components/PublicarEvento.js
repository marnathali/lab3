   import React, { Component } from 'react';

class PublicarEvento extends Component {
  render() {
    return ( 
        
          <div className="bajar"> 
           <div className="container">
             <div className="panel-heading">
            <h3 className="panel-title">Nuevo Evento</h3>
          </div>
          <div className="panel-body">
            <form>
              <button type="button" className="btn btn-default btn-md" data-toggle="modal" data-target="#myModal">Agregar un nuevo evento</button>
              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">×</button>
                      <h4 className="modal-title">Publicar Evento</h4>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <p className="panel-title">Nombre del Evento</p>
                        <textarea className="form-control" style={{resize: 'none'}} placeholder="Escribir nombre del evento" defaultValue={""} />
                        
                        <p className="panel-title">Descripción</p>
                        <textarea className="form-control" style={{resize: 'none'}} placeholder="Escribir una descripcion" defaultValue={""} />
                        
                        <p className="panel-title">Fecha</p>
                        <input className="form-control" type="date" name="fecha" />

                        <p className="panel-title">Hora</p>
                        <input className="form-control" type="time" name="hora" />

                        <p className="panel-title">Meta de Asistencias</p>
                        <input className="form-control" type="number" name="meta" />
                        
                        <p className="panel-title">Dirección</p>
                        <textarea className="form-control" style={{resize: 'none'}} placeholder="Escribir direccion" defaultValue={""} />

                        <p className="panel-title">Ciudad</p>
                        <textarea className="form-control" style={{resize: 'none'}} placeholder="Escribir Ciudad" defaultValue={""} />

                        <p className="panel-title">Estado</p>
                        <select className="form-control">
                          <option>Seleccionar</option>
                          <option>Amazonas</option>
                          <option>Anzoategui</option>
                          <option>Apure</option>
                          <option>Aragua</option>
                          <option>Barinas</option>
                          <option>Bolívar</option>
                          <option>Carabobo</option>
                          <option>Cojedes</option>
                          <option>Delta Amacuro</option>
                          <option>Distrito Capital</option>
                          <option>Falcón</option>
                          <option>Guárico</option>
                          <option>Lara</option>
                          <option>Merida</option>
                          <option>Miranda</option>
                          <option>Monagas</option>
                          <option>Nueva Esparta</option>
                          <option>Portuguesa</option>
                          <option>Sucre</option>
                          <option>Táchira</option>
                          <option>Trujillo</option>
                          <option>Vargas</option>
                          <option>Yaracuy</option>
                          <option>Zulia</option>
                        </select>
                      </div>
                      <p><button type="button" className="btn btn-default"><i className="fa fa-file-image-o" /> Subir Imagen</button> </p>
                      <div className="modal-footer">
                        <button type="button" onclick="exitoevento()" className="btn btn-success btn-block" data-dismiss="modal">Publicar</button>
                        <button type="button" className="btn btn-danger btn-block" data-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            </div>
            </div>
            </div>
          

              );
  
  }
}

export default PublicarEvento;