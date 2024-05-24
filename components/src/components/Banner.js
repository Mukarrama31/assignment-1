import React from 'react';
import '../styles/styles.css'; 
import Button from './Button';  

function Banner({ title, text, buttons }) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <p>{text}</p>
            <div className="button-container">
                {buttons.map((button, index) => (
                    <Button key={index} text={button.text} buttonStyle={button.style} />
                ))}
            </div>
        </div>
    );
}

export default Banner;

