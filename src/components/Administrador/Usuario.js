import React from 'react'
import Opciones from './Opciones';
import '../../App.css';
import { render } from 'react-dom';


class Usuario extends React.Component {

  constructor() {
    super()
  }

  render(){
  	return(
      <div className="Usuario"> 
        <Opciones/>
        <br/>
        <div className="row">   
            <div className="col-md-12">
              <ol className="breadcrumb">
                <li><a>Tablero de Administrador</a></li>
                <li className="active">Usuario</li>
              </ol>
                <table className="table table-striped">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre y Apellido</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Walter White</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Thor Odinson</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Tony Stark</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Bruce Banner</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Alastor Moddy</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Nathasha Romannof</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Fundación Siembra un Arbol Yaracuy</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Fundación Niños con Cancer</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Corazón Valiente</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Fundación del niño Barquisimeto</td>
                    </tr>
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li>
                      <a aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>
                    <li><a>5</a></li>
                    <li>
                      <a aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>

    );
  }

}
export default Usuario;