import React from 'react'


class Foto extends React.Component {

    render(){
    	return(
            <li>
              <a href={this.props.url} data-hover="tooltip" data-placement="top" title="Foto" 
                                        data-gallery="mygallery" data-parent=".gallery-parent" data-title={this.props.url.substr(4,7)} 
                                        data-footer="" data-toggle="lightbox">
                <img src={this.props.url} className="img-thumbnail" alt="" />
              </a>
            </li>
    	);
    }
} 
export default Foto