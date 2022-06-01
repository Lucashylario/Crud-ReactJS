
export const Product = () => {
    return (
        <div className="table-row w-full">
            <header className="w-[100%] h-28 pt-5 pl-8 bg-slate-100 shadow-lg text-black ">
                <h2 className="text-3xl font-medium">Produtos</h2>
                <span className="text-2xl font-thin text-slate-500">Sistema de cadastros LHTech</span>
            </header>

            <div className="w-[95%] h-3/5 p-10 mx-auto mt-5 bg-slate-100 shadow-lg">
                <div className="grid gap-3 justify-center">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                    />

                    <input 
                        type="text" 
                        name="price" 
                        placeholder="Preço" 
                        className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                    />

                    <input 
                        type="text" 
                        name="marca" 
                        placeholder="Marca" 
                        className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                    />
                
                    <button 
                        className='
                            w-80 
                            bg-slate-900 
                            mx-auto 
                            text-white 
                            px-10 
                            py-3 
                            rounded-3xl 
                            hover:bg-blue-900
                            '
                    >Cadastrar</button>
                </div>
            </div>
        </div>
    )
}