import React from 'react';
import {Link} from 'react-router-dom';

class MigasDePan extends React.Component{


   render(){
   	return(
           <ol className="breadcrumb">
               <li><Link to="/perfil">Perfil</Link></li>
               <li className="active">{this.props.vista}</li>
            </ol>
   		);
   }

}
 export default MigasDePan;