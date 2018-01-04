import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Content from './containers/Global/Content';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Menu onCerrarSesion={this.props.onCerrarSesion} />

        <Content body={ children } />
      </div>
    );
  }
}

export default App;
