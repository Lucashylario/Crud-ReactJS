import { FaClipboardList, FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "./step/Logo";

export const NavBar = () => {

    return (
        <nav className="w-72 bg-black float-left flex justify-center">
            <Logo />
            <div className='text-xl text-zinc-100  mt-28 fixed flex flex-col gap-2'>
                <Link className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:text-zinc-50 hover:bg-zinc-700 hover:border hover:border-lime-500 py-2 px-10 rounded-md" to="/"><FaHouseUser className="w-6" /> Inicio</Link>
                <Link className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:text-zinc-50 hover:bg-zinc-700 hover:border hover:border-lime-500 py-2 px-10 rounded-md" to="/atividades"><FaClipboardList className="w-6" /> Atividades</Link>
            </div>
        </nav>
    )
}
