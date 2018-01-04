import React from 'react';

import Foto from '../Foto';

import fotos from '../../API/fotos.js';

class FotosContenedor extends React.Component{

  render(){
  	return(

      <div className="panel panel-default friends">
        <div className="panel-heading">
          <h3 className="panel-title">Fotos</h3>
        </div>
        <div className="panel-body">
                 <ul className="photos gallery-parent">
                    { fotos.map( (foto,index) => <Foto url={foto.url} />) }
                 </ul>
        </div>
      </div>

  	);
  }
} 
export default FotosContenedor;