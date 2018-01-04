import React from 'react';
import Opciones from './Opciones.js';
import globalGoals from '../../API/globalGoals.js';
import { render } from 'react-dom';


class GlobalGoals extends React.Component {

  constructor() {
    super()
  }

  render(){
  	return(
      <div className = "GlobalGoals"> 
        <Opciones/>
        <br/>
        
        <div className="row"> 
            <div className="col-md-12">
              <ol className="breadcrumb">
                <li><a>Tablero de Administrador</a></li>
                <li className="active">Metas Globales</li>
              </ol>
                <table className="table table-striped">
                  <tr>
                    <th>Id</th>
                    <th>Meta</th>
                  </tr>
                  <tbody>
                    {
                      globalGoals.map((meta,index) => {
                        return (
                          <tr>
                            <td>{index}</td>
                            <td>{meta.nombre}</td>
                          </tr>
                        )
                      })
                    }
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
export default GlobalGoals;