import React from 'react';

function Nav ({ selection, currentSelection, setCurrentSelection }) {
    return (
        <nav>
            <ul>
                {selection.map((option) => (
                    <li 
                        className={currentSelection === option && 'selected'}
                        onClick={() => {setCurrentSelection(option)}}
                    >{option}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;