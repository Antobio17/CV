import React, {Component} from 'react';
import '../assets/css/Card.css';

// Images import

class Card extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="flip-container">
                <div className="Card">
                    <div className="Front">
                        <p>{this.props.title}</p>
                    </div>
                    <div className="Back">
                        <p>Usuario habitual de HTML</p>
                        <p>Usuario habitual de CSS</p>
                        <p>Usuario habitual de JAVASCRIPT</p>
                        <p>Usuario habitual de PYTHON</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;

// return (
//     <div className="flip-container">
//         <div className="Card">
//             <div className="Front">
//                 <p>{this.props.title}</p>
//             </div>
//             <div className="Back">
//                 <p>Usuario habitual de HTML</p>
//                 <p>Usuario habitual de CSS</p>
//                 <p>Usuario habitual de JAVASCRIPT</p>
//                 <p>Usuario habitual de PYTHON</p>
//             </div>
//         </div>
//     </div>
// );