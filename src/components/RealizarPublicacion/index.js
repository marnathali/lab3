import React from 'react'
//import swal from 'sweetalert'
class RealizarPublicacion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      descripcion: this.props.descripcion
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({descripcion: this.props.descripcion})
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if(event.target.value === "")
      document.getElementById("publicar").disabled = true
    else
      document.getElementById("publicar").disabled = false
  }

  render(){
  	return(
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-default">
              
              <div className="panel-heading">
                <h3 className="panel-title">Perfil Walter White</h3>
              </div>
              
              <div className="panel-body">
                 <form onSubmit={this.props.onCrearPublicacion} > 
                    <div className="form-group">
                        <textarea value={this.state.descripcion} onChange={this.handleInputChange} 
                                  className="form-control" style={{resize: 'none'}} 
                                  name="descripcion" placeholder="Realiza una publicacion">
                        </textarea>
                    </div>
                    <div className="col-xs-12 col-md-12">
                      <button id="publicar" type="submit" className="btn btn-success" disabled>Publicar</button>
                      <button type="button" className="btn btn-primary"><i className="fa fa-picture-o"></i>Subir Imagen</button>
                    </div>
                 </form>
              </div>
            
            </div>
          </div>
        </div>
  		);
  }

}
export default RealizarPublicacion

