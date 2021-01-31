import React, {Component} from 'react';
import '../assets/css/DarkMode.css';

// Images import

class DarkMode extends Component {

    // The method responsible for displaying the view of the component
    render(){
        return (
            <div className="DarkMode">
                <label className="switch">
                <input type="checkbox" onClick={e => switchTheme(e)}/>
                <span className="slider round"></span>
                </label>
                <p id="Modo-text"><strong>DARKMODE</strong></p>
            </div>
        );
    }

}

function switchTheme(e) {
    document.querySelector('.App').classList.toggle("Dark-Mode-Activated");
    document.querySelectorAll('.CardContainer').forEach(cardContainer => {
        cardContainer.classList.toggle("Dark-Mode-CardContainer-Activated");
    });
}

export default DarkMode;