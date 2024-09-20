import React from 'react';
import Slider from 'react-slick';
import './Services.css';
import image3 from '../../Image3.jpg';
import Botton from './Botton';
import { Link } from 'react-router-dom';

function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handleClick = () => {
    };

    return (
        <div className="servicos">
            <p className='p'>LIMPEZA DENTAL</p> <br></br>
            <div className="servico1"> 
                <div className="descricao1">
                    <p className="benefits"> A limpeza dental é essencial para prevenir cáries e reduzir o risco de gengivite, removendo placas e tártaros. Ela também melhora o hálito e ajuda a manter dentes brancos, evitando doenças periodontais. Além disso, permite a detecção precoce de problemas bucais, promovendo uma saúde dental melhor. </p>
                </div>
                <div className="imagem1">
                    <Slider {...settings}>
                        <div>
                            <img src={image3} alt="Imagem 3" /> 
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                    </Slider>
                </div>
            </div> <br></br> <br></br>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>

            <p className='p'>RESTAURAÇÃO </p> 
            <div className="servico2"> 
                <div className="descricao2">
                <p className="benefits"> A restauração dental é fundamental para recuperar a função e a estética dos dentes danificados. Ela previne a progressão de cáries, restaurando a saúde bucal e evitando problemas mais sérios. Além disso, proporciona um sorriso mais bonito e confiante. </p>
                </div>
                <div className="imagem1">
                    <Slider {...settings}>
                        <div>
                            <img src={image3} alt="Imagem 3" /> 
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>

            <p className='p'>CLAREAMENTO DENTAL</p> 
            <div className="servico3"> 
                <div className="descricao3">
                <p className="benefits"> O clareamento dental melhora a estética do sorriso, proporcionando dentes mais brancos e brilhantes. Além de aumentar a confiança, ele remove manchas causadas por alimentos e bebidas, promovendo uma aparência saudável. </p>
                </div>
                <div className="imagem1">
                    <Slider {...settings}>
                        <div>
                            <img src={image3} alt="Imagem 3" /> 
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>

            <p className='p'>CIRUGIA ORAL MENOR</p> <br></br> <br></br>
            <div className="servico4"> 
                <div className="descricao4">
                <p className="benefits"> A cirurgia oral menor envolve procedimentos como extrações de dentes e remoção de cistos, realizados com anestesia local. Essas intervenções visam tratar problemas dentários de forma rápida e eficaz. Elas ajudam a restaurar a saúde bucal e prevenir complicações futuras. </p>
                </div>
                <div className="imagem1">
                    <Slider {...settings}>
                        <div>
                            <img src={image3} alt="Imagem 3" /> 
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                        <div>
                            <img src={image3} alt="Imagem 3" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='botton'>
                <Link to='/Agendamento'>
                    <Botton text={'Agendar'} onClick={handleClick} />
                </Link>
            </div>
        </div>   
    );
}

export default Services;