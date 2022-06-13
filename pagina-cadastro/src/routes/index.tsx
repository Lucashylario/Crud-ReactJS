import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AtividadePage } from "../page/AtividadePage";
import { Home } from "../page/home";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atividades" element={<AtividadePage />} />
            </Routes>
        </Router>
    )
}