import React, {Component} from 'react';
import '../assets/css/Tecnologias.css';

// Images import
import img_tecnologias from '../assets/images/img_tecnologias.png';

class Tecnologias extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="Tecnologias">
                <p>Uso habitual de C++</p>
                <p>Uso habitual de Python</p>
                <p>Uso habitual de HTML</p>
                <p>Uso habitual de CSS</p>
                <p>Uso habitual de JavaScript</p>
                <p>Uso habitual de sistemas Linux</p>
                <p>Uso ocasional de PHP</p>
            </div>
        );
    }

}

export default Tecnologias;