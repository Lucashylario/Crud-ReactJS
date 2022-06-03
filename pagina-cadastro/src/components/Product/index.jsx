import { useState } from "react";


import ProductForm from "./steps/ProductForm";
import ProductCard from "./steps/ProductCard";

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
                 
                 <ProductForm 
                    handleFormProducts={handleFormProducts}
                    cadProd={cadProd}
                 />

                <div>
                    <div className="grid grid-cols-4 pl-3 mb-3 text-xl font-semibold">
                        <h3>Produto</h3>
                        <h3>Marca</h3>
                        <h3>Estoque</h3>
                        <h3>Preço</h3>
                    </div>

                    {cadProd.map((prod) => ( 
                        <ProductCard key={prod.id} prod={prod} deletProduct={deletProduct}/>
                    ))}
                </div>
            </div>
        </div>
    )
}