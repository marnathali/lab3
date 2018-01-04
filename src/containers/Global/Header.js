// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	static propTypes = {
		body: PropTypes.object.isRequired
	};

	render () {
		const { body } = this.props;

		return (
			<div className="Header">
				{ body }
			</div>
		);
	}
}

export default Header;