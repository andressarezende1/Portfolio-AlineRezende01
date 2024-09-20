// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRoutes from './routes'; // Ajuste o caminho conforme necessário


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
