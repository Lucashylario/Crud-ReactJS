
export const NavBar = () => {

    return (
        <div className="w-72 h-screen bg-slate-800 block">
            <nav className=' text-3xl text-slate-100 font-semibold  pl-10 pt-14'>
                <a className="block mb-2 hover:text-slate-50 hover:bg-slate-500 py-3" href="/">Inicio</a>
                <a className="block mb-2 hover:text-slate-50 hover:bg-slate-500 py-3" href="/produtos">Produtos</a>
            </nav>
        </div>
    )
}