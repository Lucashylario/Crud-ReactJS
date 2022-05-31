import { NavLink } from "react-router-dom"

export const NavBar = () => {

    return (
        <nav className='w-72 h-screen text-3xl text-slate-100 font-semibold bg-slate-800 pl-10 pt-14'>
            <NavLink className="block mb-2 hover:text-slate-50 hover:bg-slate-500 py-3" to="/">Inicio</NavLink>
            <NavLink className="block mb-2 hover:text-slate-50 hover:bg-slate-500 py-3" to="/produtos">Produtos</NavLink>
        </nav>
    )
}