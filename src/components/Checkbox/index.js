import React, { Component } from 'react';

class Checkbox extends Component {
	constructor (props) {
		super (props);
	}

	render () {
		return (
			<div className="checkbox">
	          <label>
	            <input type="checkbox" id={`${this.props.tipo}-${this.props.id}`} value="${this.props.id}" />
	            { this.props.nombre }
	          </label>
	        </div>
		);
	}	
}

export default Checkbox;