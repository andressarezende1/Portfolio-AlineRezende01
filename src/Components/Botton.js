// Botton.js
import React from 'react';
import './Botton.css';

function Botton({ text, onClick }) {
    return (
        <button className='botton' onClick={onClick}>
            {text}
        </button>
    );
}

export default Botton;
