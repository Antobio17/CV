import React, {Component} from 'react';
import '../assets/css/CardContainer.css';

// Images import

class CardContainer extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="CardContainer">
                <div className="CardContainer-header">
                    <img src={this.props.img} alt={this.props.alt} width="60" height="60"/>
                    <p><strong>{this.props.title}</strong></p>
                </div>
                <div className="CardContainer-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default CardContainer;