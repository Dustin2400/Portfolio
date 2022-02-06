import React from 'react';

function Footer() {

    return (
        <footer>
            <a href="https://github.com/Dustin2400">
                <img src={require("../../images/github-icon.png")}  alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/dustin-grijalva/">
                <img src={require("../../images/linkedin.png")}  alt="LinedIn"/>
            </a>
            <a href="mailto:dustin2400@hotmail.com">
                <img src={require("../../images/email-icon.png")}  alt="Email"/>
            </a>
        </footer>
    )
}

export default Footer