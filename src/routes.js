// routes.js
import { Route, Routes } from "react-router-dom";
import Agendamento from "./Components/Agendamento";
import Container from "./Components/Pages//Container/Container";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/Agendamento" element={<Agendamento />} />
        </Routes>
    );
}

export default AppRoutes;
