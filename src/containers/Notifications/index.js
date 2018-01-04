// Dependencies
import React, { Component } from 'react';
import Notificacion from '../../components/Notificacion';
import notificaciones from '../../API/notificaciones.js';

class Notifications extends Component {
	render() {
		return (
			<div className="notifications">
        <section className="bajar">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                  <h3 className="page-header">Notificaciones</h3>               
                  <ul class="list-group">
                  	{
          						notificaciones.filter((notifi, index) => { if(notifi.tipo !== 3) return true })
          						              .map((notifi, index) =>
          									          <Notificacion key={index} {...notifi} /> 
          						              )
                  	}
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </div> 
		);
	}
}
export default Notifications;