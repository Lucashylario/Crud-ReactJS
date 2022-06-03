export default function ProductForm(props) {
    return (
        <>
            <form className="grid gap-3 justify-center mb-10">
                <input 
                    type="text" 
                    className="hidden"
                    id="id"  
                    readOnly
                    value={Math.max.apply(Math, props.cadProd.map(item => item.id))  + 1}
                />

                <input 
                    id="produto"
                    type="text" 
                    name="produto" 
                    placeholder="Produto" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />

                <input 
                    id="marca"
                    type="text" 
                    name="marca" 
                    placeholder="Marca" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />
                
                <input 
                    id="estoque"
                    type="text" 
                    name="estoque" 
                    placeholder="Estoque" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />

                <input 
                    id="preco"
                    type="text" 
                    name="preco" 
                    placeholder="Preço" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />

                <div>
                    <label className="text-xl text-slate-600 ml-4 mr-5">
                        Prioridade do Produto: 
                    </label>
                    <select id="prioridade" className="px-6 py-2 rounded-lg font-semibold border-2 border-slate-500 text-slate-600">
                        <option value="baixa">Baixa</option>
                        <option value="normal">Normal</option>
                        <option value="alta">Alta</option>
                    </select>
                </div>
            
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
                    onClick={props.handleFormProducts}
                >Cadastrar</button>
            </form>
        </>
    )
}