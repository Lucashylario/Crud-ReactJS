import { useState } from "react";
// import iconBaixa from '../../assets/priority-baixa.png';
// import iconNormal from '../../assets/priority-normal.png';
import iconAlta from '../../assets/priority-alta.png';

let initialState = [
    {
        id: 1,
        produto: 'Tenis',
        prioridade: "Alta",
        marca: 'Adidas',
        estoque: '20',
        preco: '220,00',
    },
    {
        id: 2,
        produto: 'Camiseta',
        prioridade: "Alta",
        marca: 'Nike',
        estoque: '5',
        preco: '189,90',
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
            produto: document.getElementById('produto').value,
            marca: document.getElementById('marca').value,
            estoque: document.getElementById('estqoue').value,
            preco: document.getElementById('preco').value,
            prioridade: document.getElementById('prioridade').value,
        };

        setCadProd([ ...cadProd, { ...product }]);
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
                        id="nome"
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
                        <select name="priority" id="prioridade" className="px-6 py-2 rounded-lg font-semibold border-2 border-slate-500 text-slate-600">
                            <option value="1">Baixa</option>
                            <option value="2">Norma</option>
                            <option value="3">Alta</option>
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
                        <h3>Nome</h3>
                        <h3>Marca</h3>
                        <h3>Estoque</h3>
                        <h3>Preço</h3>
                    </div>

                    {cadProd.map(prod => (
                        <div className="mb-3 border-2" key={prod.id}>
                            <div className="justify-between flex mb-3 p-2">
                                <h5>
                                    <span className="rounded-3xl px-[.4rem] ml-2 text-white bg-slate-600" >
                                        {prod.id}
                                    </span> - {prod.produto}
                                </h5>
                                <h6 className="flex mr-2">
                                    Prioridade: <img src={iconAlta} alt="emoji triste" className="w-6 mx-1" /> 
                                    {prod.prioridade}
                                </h6>
                            </div>

                            <ul className="grid grid-cols-4">
                                <li className="border-2 p-2" >{prod.produto}</li>
                                <li className="border-2 p-2" >{prod.marca}</li>
                                <li className="border-2 p-2" >{prod.estoque}</li>
                                <li className="border-2 p-2" >{prod.preco}</li>
                            </ul>

                            <div className=" justify-end flex p-2 ">
                                <button className="px-20 py-3 mr-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-slate-100 font-semibold">
                                    Editar
                                </button>

                                <button className="px-20 py-3 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-600 hover:text-slate-100 font-semibold">
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