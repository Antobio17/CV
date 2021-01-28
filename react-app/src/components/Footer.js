import React, {Component} from 'react';
import '../assets/css/Footer.css';

// Images import
import instagram_img from '../assets/images/instagram.png';
import github_img from '../assets/images/github.png';
import logo from '../assets/images/logo.svg';


class Footer extends Component {

    // The method responsible for displaying the view of the component
    render(){
        const { location, email, tlf, instagram, github } = this.props;
        return (
            <div className="Footer">
                <div className="Footer-develop">
                    <div className="Footer-develop-text">
                        <p>Web desarrollada con </p>
                        <h3>REACT</h3>
                    </div>
                    <img src={logo} className="App-logo" alt="logo" width="200" height="200"/>
                </div>
                <div className="Footer-contact">
                    <h3>CONTACTA</h3>
                    <div className="Footer-contact-info">
                        {/* <img src={location} alt="Lugar" width="21" height="21"/> */}
                        <p>{location}</p>
                    </div>
                    <div className="Footer-contact-info">
                        {/* <img src={mail} alt="Email" width="21" height="21"/> */}
                        <p>{email}</p>
                    </div>
                    <div className="Footer-contact-info">
                        {/* <img src={tlf} alt="Tlf" width="21" height="21"/> */}
                        <p>{tlf}</p>
                    </div>
                </div>
                <div className="Footer-social">
                    <h3>SIGUEME EN</h3>
                    <div className="Footer-social-info">
                        <img src={instagram_img} alt="Instagram" width="23" height="23"/>
                        <a href={instagram}>Instagram</a>
                    </div>
                    <div className="Footer-social-info Footer-social-github">
                        <img src={github_img} alt="Github" width="20" height="20"/>
                        <a href={github}>Github</a>
                    </div>
                </div>
                <div className="Footer-message">
                    <h3>GRACIAS</h3>
                    <h3>POR SU</h3>
                    <h3>VISITA</h3>
                    <h3>¡HASTA PRONTO!</h3>
                </div>
            </div>
        );
    }

}

export default Footer;