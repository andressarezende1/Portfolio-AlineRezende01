// Navbar.js
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <h1 className='logo'>AR</h1>
            <div className='nav-links-container'>
                <ul className='nav-links'>
                    <li> <Link to="/">ÍNICIO</Link></li>
                    <li className='agendamento'> <Link to="/Agendamento">AGENDAMENTO</Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

