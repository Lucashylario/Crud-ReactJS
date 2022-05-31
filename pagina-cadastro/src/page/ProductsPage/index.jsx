import { NavBar } from "../../components/NavBar"
import { Product } from "../../components/Product"

export const ProductsPage = () => {
    return (
        <div className="bg-slate-200 flex">
            <NavBar />
            <Product />
        </div>
    )
}