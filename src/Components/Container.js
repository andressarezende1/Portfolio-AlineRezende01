// Container.js
import React from 'react';
import './Container.css';
import Botton from './Botton';
import { Link } from 'react-router-dom';
import { IoLogoInstagram } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Navbar from './Navbar';


function Container() {

    const handleClick = () => {
    };

    return (
    <>
    <Navbar />
    <div className='Container'>
        <section id='inicio'>
        <div className="apresentar">
            <div className="texto">
                <p className='frase'>Transforme seu sorriso hoje!</p> 
                <p className='subtitulo'>Você sabia que é possível integrar saúde bucal e estética? Agende sua consulta e descubra os resultados!</p> 
                <div className='botton'>
                    <Link to='/Agendamento'>
                        <Botton text={'Agende sua Consulta Agora'} onClick={handleClick} />
                    </Link>
                </div>
            </div>
            <div className="imagem"></div>
        </div>

        <div className="apresentar_servicos">
            <div className="textos">
                <h3> Quem não deseja um sorriso radiante, saúde bucal impecável e uma estética perfeita? </h3>
                <h4>Transforme seu sorriso com serviços de qualidade.</h4>
            </div>
        </div>
        </section>

        <section id='servicos' >
        <div className="servicos">
            <p className='titulo'>LIMPEZA DENTAL</p> 
            <div className="servico1"> 
                <div className="descricao1">
                    <p className="descricao"> A limpeza dental é essencial para prevenir cáries e reduzir o risco de gengivite, removendo placas e tártaros. Ela também melhora o hálito e ajuda a manter dentes brancos, evitando doenças periodontais. Além disso, permite a detecção precoce de problemas bucais, promovendo uma saúde dental melhor. </p>
                </div>
                <div className="imagem1"> </div>
            </div> 
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>

            <p className='titulo'>RESTAURAÇÃO </p> 
            <div className="servico2"> 
                <div className="descricao2">
                    <p className="descricao"> A restauração dental é fundamental para recuperar a função e a estética dos dentes danificados. Ela previne a progressão de cáries, restaurando a saúde bucal e evitando problemas mais sérios. Além disso, proporciona um sorriso mais bonito e confiante. </p>
                </div>
                <div className="imagem2"></div>
            </div>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>

            <p className='titulo'>CLAREAMENTO DENTAL</p> 
            <div className="servico3"> 
                <div className="descricao3">
                    <p className="descricao"> O clareamento dental melhora a estética do sorriso, proporcionando dentes mais brancos e brilhantes. Além de aumentar a confiança, ele remove manchas causadas por alimentos e bebidas, promovendo uma aparência saudável. </p>
                </div>
                <div className="imagem3"></div>
            </div>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>

            <p className='titulo'>CIRUGIA ORAL MENOR</p> 
            <div className="servico4"> 
                <div className="descricao4">
                    <p className="descricao"> A cirurgia oral menor envolve procedimentos de extrações de dentes realizados com anestesia local. Essas intervenções visam tratar problemas dentários de forma rápida e eficaz. Elas ajudam a restaurar a saúde bucal e prevenir complicações futuras. </p>
                </div>
                <div className="imagem4"></div>
            </div>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>
        </div>   
        </section>

        <section id='contatos'>
        <div className="rodape">
            <div className="mensagem"> 
                <p className='frase' style={{textAlign: 'center', fontSize: '23px', paddingTop: '100px'}}> Meu intuito é trazer felicidade em cada risada.  </p>
                <p className='men'> Agende sua limpeza dental e mantenha seu sorriso saudável e radiante!</p>
                <div className='botton'>
                    <Link to='/Agendamento'>
                        <Botton text={'Agende sua Consulta Agora'} onClick={handleClick} />
                    </Link>
                </div>
            </div>
            <div className="contato"> 
                <p className='subtitulo'>Tem alguma dúvida? Entre em contato comigo</p>
                    <ul className='meioscontato'>

                        <li> <a href="https://wa.me/626998247974" target="_blank" rel="noopener noreferrer"> <FaWhatsapp className="icons"/> (62) 9.9824-7974 </a> </li>

                        <li> <a href="mailto:alinerezende598@gmail.com"><MdEmail className="icons" /> alinerezende598@gmail.com </a> </li>

                        <li> <a href="https://instagram.com/alinerezende25" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className="icons" />@alinerezende25</a></li>

                        <li><a href="https://www.google.com/maps/search/?api=1&query=Rua+Bernado+N+206,+Centro+-+Goianesia-GO,+Brasil" target="_blank" rel="noopener noreferrer"> <FaLocationDot  className="icons" /> Goianésia-GO ,Brasil</a></li>
                    </ul>
            </div>
        </div>
        </section>
    </div>
    </>
    );
}

export default Container;