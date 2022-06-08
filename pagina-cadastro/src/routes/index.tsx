import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../page/home";
import { ProductsPage } from "../page/ProductsPage";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ProductsPage />} />
            </Routes>
        </Router>
    )
}