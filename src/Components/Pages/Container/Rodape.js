import React from 'react';
import './Rodape.css';
import Botton from './Botton';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


function Rodape(){

    const handleClick = () => {
    };
    return (
        <div className="rodape">
                <div className="mensagem"> 
                    <p className='men'> Meu intuito é trazer felicidade em cada risada; agende sua limpeza dental e mantenha seu sorriso saudável e radiante!" </p>
                    <div className='botton'>
                    <Link to='/Agendamento'>
                        <Botton text={'Agende sua Consulta Agora'} onClick={handleClick} />
                    </Link>
                </div>
                </div>
                <div className="contato"> 
            <p className='duv'>Tem alguma dúvida? Entre em contato comigo</p>
            <ul className='meioscontato'>

                <li> <a href="https://wa.me/626998247974" target="_blank" rel="noopener noreferrer"> <FaWhatsapp style={{ fontSize: '20px', marginRight: '10px', verticalAlign: 'middle' }} /> (62) 9.9824-7974 </a> </li>

                <li> <a href="mailto:alinerezende598@gmail.com"><MdEmail style={{ fontSize: '20px', marginRight: '10px', verticalAlign: 'middle' }} /> alinerezende598@gmail.com </a> </li>

                <li> <a href="https://instagram.com/alinerezende25" target="_blank" rel="noopener noreferrer"><IoLogoInstagram style={{ fontSize: '20px', marginRight: '10px', verticalAlign: 'middle' }} />@alinerezende25</a></li>

                <li><a href="https://www.google.com/maps/search/?api=1&query=Rua+Bernado+N+206,+Centro+-+Goianesia-GO,+Brasil" target="_blank" rel="noopener noreferrer"> <FaLocationDot style={{ fontSize: '20px', marginRight: '10px', verticalAlign: 'middle' }} /> Rua Bernado N 206, Centro - Goianesia-GO, Brasil</a></li>
            </ul>
        </div>
            </div>
    );
}

export default Rodape;