import React, {Component} from 'react';
import '../assets/css/Card.css';

// Images import

class Card extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="Card">
                <p><strong>{this.props.title}</strong></p>
            </div>
        );
    }

}

export default Card;