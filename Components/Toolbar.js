import React from 'react';
import MenuButton from './MenuButton.js';

const toolbar = props => (
    <header className="toolbar">
        <nav className="navigation">
            <div><MenuButton click={props.menuClickHandler} /></div>
            <div className="brand"><a href="#">Jake Vargas</a></div>
            <div className="spacer"></div>
            <div className="navigation-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;