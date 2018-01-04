// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Home from './containers/Home';
import Registrer from './containers/Registrer';
import TimeLine from './containers/TimeLine';
import Profile from './containers/Profile';
import Photos from './containers/Photos';
import Members from './containers/Members';
import Notifications from './containers/Notifications';
import Events from './containers/Events';
import EventosAsistencia from './containers/EventosAsistencia';
import Seguidos from './containers/Seguidos';
import Seguidores from './containers/Seguidores';
import Page404 from './containers/Page404';

class AppRoutes extends React.Component {
	render () {
		return (
			<App onCerrarSesion={this.props.onCerrarSesion}>
				<Switch>
					<Route exact path="/timeline" component={TimeLine} />
					<Route exact path="/registrar" component={Registrer} />
					<Route exact path="/perfil" component={Profile} />
					<Route exact path="/fotos" component={Photos} />
					<Route exact path="/miembros" component={Members} />
					<Route exact path="/notificaciones" component={Notifications} />
					<Route exact path="/eventos" component={Events} />
					<Route exact path="/eventosAsistir" component={EventosAsistencia} />
					<Route exact path="/seguidos" component={Seguidos} />
					<Route exact path="/seguidores" component={Seguidores} />
					<Route exact path="/" component={TimeLine} />
					<Route component={TimeLine} />
				</Switch>
			</App>
		);
	}
}
export default AppRoutes;