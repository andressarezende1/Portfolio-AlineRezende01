import React from 'react';
import './Agendamento.css';
import Navbar from './Navbar';

function Agendamento() {
    const handleSubmit = async (event) => {
        
    };

    return (
        <>
        <Navbar />
            <div className='container-form'>
                <h1 className='tituloA'>AGENDE SUA CONSULTA</h1>
                <div className='form'>
                    <form onSubmit={handleSubmit} className='form-inputs'>
                        <label htmlFor="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" required />

                        <label htmlFor="data-nascimento">Data de Nascimento:</label>
                        <input type="date" id="data-nascimento" name="data-nascimento" required />

                        <label htmlFor="telefone">Número de Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" required />

                        <label htmlFor="mensagem">Motivo da Consulta: (Opcional)</label>
                        <textarea id="mensagem" name="mensagem" rows="4"></textarea>

                        <label htmlFor="horario-select">Escolha o Horário:</label>
                        <select id="horario-select" name="horario" required>
                            <option value="">Selecione um horário</option>
                            <option value="manha">Manhã</option>
                            <option value="tarde">Tarde</option>
                            <option value="noite">Começo da Noite</option>
                        </select>

                        <div className='button-container'>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Agendamento;
