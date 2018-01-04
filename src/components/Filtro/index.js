import React, { Component } from 'react';
import Checkbox from '../Checkbox';

class Filtro extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
			<div className="panel panel-default">
        <div className="panel-heading" role="tab" id={`heading${this.props.id}`}>
          <h4 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${this.props.id}`} aria-expanded="true" aria-controls={`collapse${this.props.id}`}>
              { this.props.titulo }
            </a>
          </h4>
        </div>
        <div id={`collapse${this.props.id}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${this.props.id}`}>
          <div className="panel-body">
            { 
               this.props.items
            	.map((item, index) => <Checkbox key={index} id={item.key} nombre={item.nombre} tipo={item.tipo} />) 
            }
          </div>
        </div>
    </div>
    </div>
		);
	}
}

export default Filtro;