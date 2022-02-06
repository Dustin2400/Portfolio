import React from 'react';
import Nav from '../Navigation'

function Header ({ selection, currentSelection, setCurrentSelection }) {
    return (
        <header>
            <h1 className="intro">Hey, I'm Dustin</h1>
            <h1 className="neon">Innovative<br/>Intuitive<br/>Inspirational</h1>
            <Nav selection={selection} currentSelection={currentSelection} setCurrentSelection={setCurrentSelection}></Nav>
        </header>
    )
}

export default Header;