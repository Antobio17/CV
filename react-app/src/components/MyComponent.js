import React, {Component} from 'react';

class MyComponent extends Component {

    // The method responsible for displaying the view of the component
    render(){
        let lenguajes = {
            nombre: 'Lenguajes',
            habituales: ['C++', 'Python', 'HTML', 'CSS'],
            ocasionales: ['PHP'],
        }
        // Return can only return one label
        return (
            // Empty label for groupings: <React.Fragment>
            <div className="lenguajes">
                <h3>{lenguajes.nombre}</h3>
                <ul>
                    {
                        lenguajes.habituales.map((habitual, i) => {
                            return (
                                <li>Usuario habitual de {habitual}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default MyComponent;