
export const NavBar = () => {

    return (
        <div className="w-72 bg-slate-900 flex justify-end">
            <nav className='h-screen text-3xl text-slate-100 bg-slate-900 font-semibold pl-5 pt-14 fixed'>
                <a className="block mb-2 hover:text-slate-50 hover:bg-slate-500 py-3 pl-4 pr-10 rounded-l-xl" href="/">Inicio</a>
                <a className="block mb-2 hover:text-slate-50 hover:bg-slate-500 py-3 pl-4 pr-10 rounded-l-xl" href="/atividades">Atividades</a>
            </nav>
        </div>
    )
}