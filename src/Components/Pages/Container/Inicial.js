// Inicial.js
import React from 'react';
import './Inicial.css';
import Botton from './Botton'; // Certifique-se de que o nome do arquivo está correto
import { Link } from 'react-router-dom';

function Inicial() {
    const handleClick = () => {
    };

    return (
        <div className="apresentar">
            <div className="texto">
                <h1 className='titulo'>Transforme seu sorriso hoje!</h1>
                <p>Você sabia que é possível integrar saúde bucal e estética? Agende sua consulta e descubra os resultados!</p> 
                <div className='botton'>
                    <Link to='/Agendamento'>
                        <Botton text={'Agende sua Consulta Agora'} onClick={handleClick} />
                    </Link>
                </div>
            </div>
            <div className="imagem"></div>
        </div>
    );
}

export default Inicial;
