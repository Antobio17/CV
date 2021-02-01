import React, {Component} from 'react';
import '../assets/css/Header.css';

// Images import

class Header extends Component {
    // The method responsible for displaying the view of the component
    render(){
        const { img_profile, name, intro, goal } = this.props
        return (
            <div className="Header">
                <img src={img_profile} width="300" height="300" alt="Profile"/>
                <div className="Header-text">
                    <h1><strong>Hola, soy {name}</strong></h1>
                    <h5>{intro}</h5>
                    <h5><strong>Objetivo profesional: {goal}</strong></h5>
                </div>
            </div>
        );
    }

}

export default Header;