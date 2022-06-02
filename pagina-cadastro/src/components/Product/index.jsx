import { useState } from "react";

let initialState = [
    {
        id: 1,
        nome: 'Tenis',
        marca: 'Adidas',
        preco: '220,00',
    },
    {
        id: 2,
        nome: 'Camiseta',
        marca: 'Nike',
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
            nome: document.getElementById('nome').value,
            marca: document.getElementById('marca').value,
            preco: document.getElementById('preco').value,
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
                        name="nome" 
                        placeholder="Nome" 
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
                        id="preco"
                        type="text" 
                        name="preco" 
                        placeholder="Preço" 
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
                        onClick={handleFormProducts}
                    >Cadastrar</button>
                </form>

                <div>
                    <div className="grid grid-cols-3 pl-3 mb-3 text-xl font-semibold">
                        <h3>Nome</h3>
                        <h3>Marca</h3>
                        <h3>Preço</h3>
                    </div>

                    {cadProd.map(prod => (
                        <ul className="grid grid-cols-3 mb-2 shadow-md" key={prod.id}>
                            <li className="border-2 p-2" >{prod.nome}</li>
                            <li className="border-2 p-2" >{prod.marca}</li>
                            <li className="border-2 p-2" >{prod.preco}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}