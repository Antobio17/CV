import React, {Component} from 'react';
import '../assets/css/Conocimientos.css';

// Images import

class Conocimientos extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="Conocimientos">
                <p>Framework Django de Python</p><hr/>
                <p>Libreria Flask de Python</p><hr/>
                <p>Framework React de JavaScript</p><hr/>
                <p>Creación y manejo de APIs con FLASK</p><hr/>
                <p>Uso de Docker para proyectos</p><hr/>
                <p>Uso de GIT</p><hr/>
                <p>JQuey y Ayax para Front-End</p><hr/>
                <p>Libreria OPENGL de C++ para gráficos 3D por ordenador</p>
            </div>
        );
    }

}

export default Conocimientos;