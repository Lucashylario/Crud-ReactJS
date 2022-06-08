import { useEffect, useState } from "react"

const productInicial= {
    id: 0,
    produto: '',
    marca: '',
    estoque: '',
    descricao: '',
    prioridade: 0
}

export default function ProductForm(props) {
    const [product, setProduct] = useState(produtoAtual());
    useEffect(() => {
        if(props.produtoSelecionado.id !== 0)
            setProduct(props.produtoSelecionado);
    }, [props.produtoSelecionado]);

    const inputTextHandler = (e) => {
        const {name, value} = e.target;

        setProduct({...product, [name]: value})
    }

    function produtoAtual() {
        if (props.produtoSelecionado.id !== 0) {
            return props.produtoSelecionado;
        }
        else {
            return produtoInicial;
        }
    }

    return (
        <div>
            <form className="grid gap-3 justify-center mb-10">
                <input 
                    name="produto" 
                    value={product.produto}
                    onChange={inputTextHandler}
                    id="produto"
                    type="text" 
                    placeholder="Produto" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />

                <input 
                    name="marca"
                    value={product.marca}
                    onChange={inputTextHandler} 
                    id="marca"
                    type="text" 
                    placeholder="Marca" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />
                
                <input 
                    name="estoque" 
                    value={product.estoque}
                    onChange={inputTextHandler}
                    id="estoque"
                    type="text" 
                    placeholder="Estoque" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />

                <input 
                    name="preco" 
                    value={product.preco}
                    onChange={inputTextHandler}
                    id="preco"
                    type="text" 
                    placeholder="Preço" 
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                />

                <textarea 
                    name="descricao"
                    value={product.descricao}
                    id="descricao"
                    type="text"
                    className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                    placeholder="Descrição do produto"
                />

                <div>
                    <label className="text-xl text-slate-600 ml-4 mr-5">
                        Prioridade do Produto: 
                    </label>
                    <select 
                        name="prioridade"
                        value={product.prioridade}
                        onChange={inputTextHandler}
                        id="prioridade" 
                        className="px-6 py-2 rounded-lg font-semibold border-2 border-slate-500 text-slate-600"
                    >
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
        </div>
    )
}