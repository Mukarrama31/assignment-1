import React from 'react';
import '../styles/styles.css'; 

function Header() {
    return (
        <header>
            <h1><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Bacchs.</a></h1>  
            <nav>
                <ul>
                    <li><a href="#popular-picks">Popular Picks</a></li>  
                    <li><a href="#whats-new">What's New?</a></li>
                    <li><a href="#login-register">Login/Register</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
