import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

// Components
import Login from './components/Login'
import Administrador from './containers/Administrador'

// Routes
import AppRoutes from './routes';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      logueado: false,
      administrador: false,
      cerrar: false
    }
    this.handleIniciarSesion = this.handleIniciarSesion.bind(this)
    this.handleIniciarAdmin = this.handleIniciarAdmin.bind(this)
    this.handleCerrarSesion = this.handleCerrarSesion.bind(this)
  }

  handleIniciarSesion () {
    this.setState({
      logueado: true
    }) 
  }

  handleIniciarAdmin () {
    this.setState({
      administrador: true
    }) 
  }

  handleCerrarSesion () {
    this.setState({
      logueado: false,
      administrador: false,
      cerrar: true
    }) 
  }

  componentDidUpdate() {
    if(this.state.cerrar)
      window.location.reload(true)
  }

  render() {
    let componente = null
    if(this.state.administrador) {
      componente = <Administrador onCerrarSesion={this.handleCerrarSesion}/>
    } else {
      if(this.state.logueado) {
        componente = (
          <Router>
            <AppRoutes onCerrarSesion={this.handleCerrarSesion} />
          </Router>
        );
      }
      else {
         componente = <Login onIniciarSesion={this.handleIniciarSesion} 
                             onIniciarAdmin={this.handleIniciarAdmin} />
      }
    }
    return ( 
      <div>
        { componente } 
      </div>
    );
  }
}
export default Main;