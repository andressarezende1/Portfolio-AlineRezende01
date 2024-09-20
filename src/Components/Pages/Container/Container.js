// Container.js
import React from 'react';
import '../Container/Container.css';
import Inicial from '../Container/Inicial';
import Textservices from '../Container/Textservice';
import Services from '../Container/Services';
import Rodape from '../Container/Rodape';

function Container() {
    return (
        <div className="Container">
            <Inicial />
            <Textservices />
            <Services />
            <Rodape />
        </div>
    );
}

export default Container;
