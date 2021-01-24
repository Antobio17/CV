import React, {Component} from 'react';
// Images import
import insta from '/app/src/assets/images/instagram.png';
import github from '/app/src/assets/images/github.png';
import location from '/app/src/assets/images/location.png';
import tlf from '/app/src/assets/images/tlf.png';
import mail from '/app/src/assets/images/mail.png';
import logo from '/app/src/assets/images/logo.svg';


class Footer extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <footer className="Footer">
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
                        <img src={location} alt="Lugar" width="21" height="21"/>
                        <p>Granada, España</p>
                    </div>
                    <div className="Footer-contact-info">
                        <img src={mail} alt="Email" width="21" height="21"/>
                        <p>antoniojr997@gmail.com</p>
                    </div>
                    <div className="Footer-contact-info">
                        <img src={tlf} alt="Tlf" width="21" height="21"/>
                        <p>684144382</p>
                    </div>
                </div>
                <div className="Footer-social">
                    <h3>SIGUEME EN</h3>
                    <div className="Footer-social-info">
                        <img src={insta} alt="Instagram" width="23" height="23"/>
                        <a href="https://www.instagram.com/antobio17/">Instagram</a>
                    </div>
                    <div className="Footer-social-info Footer-social-github">
                        <img src={github} alt="Github" width="20" height="20"/>
                        <a href="https://github.com/Antobio17">Github</a>
                    </div>
                </div>
                <div className="Footer-message">
                    <h3>GRACIAS</h3>
                    <h3>POR SU</h3>
                    <h3>VISITA</h3>
                    <h3>¡HASTA PRONTO!</h3>
                </div>
            </footer>
        );
    }

}

export default Footer;