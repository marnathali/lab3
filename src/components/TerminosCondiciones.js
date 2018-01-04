import React from 'react'


class TerminosCondiciones extends React.Component{

    constructor(){
    	super()

     
      this.handleAceptarClick = this.handleAceptarClick.bind(this);
    }


handleAceptarClick(e) {

  if (e.target.id==='terminosC') {
     this.setState({terminos: true});
     document.getElementById(e.target.id='terminos').checked=true;
     console.log('ejecutar check')
  } 
}


render() {

	return ( 
     
     <div className="modal fade" id="modalTerminosCondiciones" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{overflowY: 'scroll'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h3 className="modal-title text-center" id="myModalLabel">Terminos y Condiciones</h3>
            </div>
            <div className="modal-body">
              <form>
                <h4 className="modal-title text-center" id="myModalLabel">Nuestras Políticas </h4><br />
                <label>Naturaleza y contenido de la licencia del usuario. </label>
                <p className="message text-justify">Se reconoce que el contenido es propiedad del usuario que lo provee, quien además puede pedir su eliminación en cualquier momento, salvo que ya se haya compartido con tercero. El usuario, al darse de alta, conviene expresamente en otorgar una licencia (autorización) no exclusiva y transferible para la utilización de los contenidos, básicamente bajo las modalidades de comunicación, reproducción, y distribución. </p><br />
                <label>La licencia es gratuita. </label>
                <p className="message text-justify"> Los contenidos que proveen los usuarios, en el caso de CrowdHelping el licenciamiento son gratuitos. Esto quiere decir que no se pagará al usuario o a un tercero por la utilización que haga de su contenido.</p><br />
                <label>Ámbito territorial de la licencia. </label>
                <p className="message text-justify"> La licencia tiene un alcance global o mundial. Por su naturaleza, no se concibe el licenciamiento territorial de los contenidos. </p><br />
                <h3 className="modal-title text-center" id="myModalLabel">Términos de Servicio y Condiciones</h3>
                <p className="message text-justify"> Las condiciones del servicio (términos) regulan la utilización de los servicios prestados por CrowdHelping (el sitio), y están sujetos a un conjunto de reglas y pautas. El aprovechamiento que un individuo haga de los servicios incluidos en el Sitio, sólo se considerará lícito y autorizado cuando lo sea en cumplimiento de las obligaciones impuestas, con los límites y alcances aquí delineados, así como los que surjan de disposiciones complementarias o accesorias, y/o de las diferentes normativas legales de orden nacional e internacional cuya aplicación corresponda. </p><br />
                <p className="message text-justify"> CrowdHelping podrá en cualquier momento y sin necesidad de previo aviso modificar estas Condiciones Generales. Tales modificaciones serán operativas a partir de su fijación en el Sitio. Los usuarios deberán mantenerse actualizados en cuanto al los términos aquí incluidos ingresando en forma periódica al apartado.</p><br />
                <label>Condiciones básicas </label>
                <p className="message text-justify">• CrowdHelping es una red social creada para promover causas sociales, no admitimos contenido fuera de esto tema, todo contenido sexual o violento conllevará a la expulsión del usuario.</p><br />
                <p className="message text-justify">•  CrowdHelping es una red social que solo admite usuario mayor de 18 años, al registrarse el usuario indica que es mayor de edad.</p><br />
                <p className="message text-justify">•  CrowdHelping es una red social sin fines de lucro.</p><br />
                <p className="message text-justify">•  CrowdHelping es una red social sin fines políticos, no se aceptan publicaciones, comentarios, causas o eventos de fines políticos. </p><br />
                <label>Suspensión y cancelación </label>
                <p className="message text-justify">CrowdHelping se reserva el derecho a bloquear o suprimir cuentas que infrinjan la ley, derechos de terceros, las Condiciones de la red social CrowdHelping o en el caso de que utilices la red social CrowdHelping para infringir o eludir las condiciones o políticas de otros productos o servicios. Las infracciones reiteradas de las Condiciones de la red social CrowdHelping pueden causar la suspensión de tu cuenta, dependiendo de la gravedad de la infracción CrowdHelping puede suprimir, sin previo aviso, la cuenta de CrowdHelping si están inactivas durante más de nueve meses</p><br />
                <p className="message text-justify">Estas condiciones de la red social CrowdHelping, regirán el uso de las páginas de CrowdHelping ("Condiciones de las páginas de CrowdHelping "). Consulta la página de vez en cuando en busca de actualizaciones. El uso de las páginas de CrowdHelping implica que has aceptado las Condiciones de páginas de CrowdHelping y su uso continuado implica que aceptas las actualizaciones. Si no deseas aceptar las Condiciones de las páginas de CrowdHelping, no utilices páginas de CrowdHelping. </p><br />
              </form></div> 
            <div className="modal-footer">
              <button type="button" id="terminosC" className="btn btn-success" onClick={this.handleAceptarClick} data-dismiss="modal">
                Acepto<span className /><span className="hidden-xs" />
              </button>
              <button type="button" id="cancelart" className="btn btn-success" data-dismiss="modal">
                Cancelar<span className /><span className="hidden-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

    );

	 
}
} 
export default TerminosCondiciones;