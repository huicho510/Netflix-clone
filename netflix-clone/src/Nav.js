import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <img
            className= "nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
            alt="Netflix Logo"
            />
            <img 
            className= "nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
            />


        </div>
    )
}

export default Nav
