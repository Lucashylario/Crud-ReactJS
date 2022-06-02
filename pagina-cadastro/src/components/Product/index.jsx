import { useState } from "react";
import iconBaixa from '../../assets/priority-baixa.png';
import iconNormal from '../../assets/priority-normal.png';
import iconAlta from '../../assets/priority-alta.png';

let initialState = [
    {
        id: 1,
        produto: 'Tenis',
        marca: 'Adidas',
        estoque: '20',
        preco: '220,00',
        prioridade: 'baixa',
    },
    {
        id: 2,
        produto: 'Camiseta',
        marca: 'Nike',
        estoque: '5',
        preco: '189,90',
        prioridade: 'normal',
    },
    {
        id: 3,
        produto: 'Meia',
        marca: 'Nike',
        estoque: '2',
        preco: '18,90',
        prioridade: 'alta',
    },
];

export const Product = () => {
    
    const titleHeader = [
        {
            id: 1,
            title: 'Produtos',
            descricao: 'Controle de produtos'
        },
    ]
    
    const [cadProd, setCadProd] = useState(initialState);
    function handleFormProducts(event) {
        event.preventDefault();

        const product = {
            id: document.getElementById('id').value,
            produto: document.getElementById('produto').value,
            marca: document.getElementById('marca').value,
            estoque: document.getElementById('estoque').value,
            preco: document.getElementById('preco').value,
            prioridade: document.getElementById('prioridade').value,
        };

        setCadProd([ ...cadProd, { ...product }]);
    }

    function prioridadeLabel(param) {
        switch(param) {
            case 'baixa':
                return 'Baixa';
            case 'normal':
                return 'Normal';
            case 'alta':
                return 'Alta';
        }
    }

    function prioridadeIcon(param, icone) {
        switch(param) {
            case 'baixa':
                return icone ? iconBaixa : 'green-600';
            case 'normal':
                return icone ? iconNormal : 'yellow-400 text-yellow-400 border-yellow-400';
            case 'alta':
                return icone ? iconAlta : 'red-600';
        }
    }

    function deletProduct(id) {
        const produtosFiltrados = cadProd.filter(product => product.id !== id);
        setCadProd([...produtosFiltrados])
    }

    return (
        <div className="table-row w-full">
            <header className="w-[100%] h-28 pt-5 pl-8 bg-slate-100 shadow-lg text-black ">
                {titleHeader.map(content => (
                    <h2 key={content.id} className="text-3xl font-medium">{content.title}</h2>
                ))}
                {titleHeader.map(subTitle => (
                    <span key={subTitle.id} className="text-2xl font-thin text-slate-500">{subTitle.descricao}</span>
                ))}
            </header>

            <div className="w-[95%] p-10 mx-auto mt-5 bg-slate-100 shadow-lg">
                <form className="grid gap-3 justify-center mb-10">
                    <input 
                        type="text" 
                        className="hidden"
                        id="id"  
                        readOnly
                        value={Math.max.apply(Math, cadProd.map(item => item.id))  + 1}
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
                        onClick={handleFormProducts}
                    >Cadastrar</button>
                </form>

                <div>
                    <div className="grid grid-cols-4 pl-3 mb-3 text-xl font-semibold">
                        <h3>Produto</h3>
                        <h3>Marca</h3>
                        <h3>Estoque</h3>
                        <h3>Preço</h3>
                    </div>

                    {cadProd.map(prod => (
                        <div key={prod.id} className={"mb-5 shadow-lg rounded-lg border-2 border-" + prioridadeIcon(prod.prioridade)} >
                            <div className="justify-between flex mb-3 p-2">
                                <h5>
                                    <span className="rounded-3xl px-[.4rem] ml-2 text-white bg-slate-600" >
                                        {prod.id}
                                    </span>
                                </h5>
                                <h6 className="flex mr-2 font-bold">
                                    <h3 className="text-black">
                                        Prioridade:
                                    </h3>
                                    <span className={"flex text-" + prioridadeIcon(prod.prioridade)}>
                                        <img src={prioridadeIcon(prod.prioridade, true)} alt="emoji triste" className="w-6 mx-1" /> 
                                        {prioridadeLabel(prod.prioridade)}
                                    </span>
                                </h6>
                            </div>

                            <ul className="grid grid-cols-4 font-semibold text-slate-800">
                                <li className="border-y-2 border-slate-400 border-r-2 py-1 pl-3">{prod.produto}</li>
                                <li className="border-y-2 border-slate-400 py-1 pl-3" >{prod.marca}</li>
                                <li className="border-2 py-1 pl-3 border-slate-400">{prod.estoque}</li>
                                <li className="border-y-2 border-slate-400 py-1 pl-3" >{prod.preco}</li>
                            </ul>

                            <div className=" justify-end flex p-2 ">
                                <button className="px-20 py-3 mr-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-slate-100 font-semibold">
                                    Editar
                                </button>

                                <button 
                                    onClick={() => deletProduct(prod.id)}
                                    className="px-20 py-3 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-600 hover:text-slate-100 font-semibold">
                                    Deletar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}