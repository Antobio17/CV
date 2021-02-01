import React, {Component} from 'react';
import '../assets/css/Tecnologias.css';

// Images import

class Tecnologias extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="Tecnologias">
                <p>Uso habitual de C++</p><hr/>
                <p>Uso habitual de Python</p><hr/>
                <p>Uso habitual de HTML</p><hr/>
                <p>Uso habitual de CSS</p><hr/>
                <p>Uso habitual de JavaScript</p><hr/>
                <p>Uso habitual de sistemas Linux</p><hr/>
                <p>Uso ocasional de PHP</p>
            </div>
        );
    }

}

export default Tecnologias;