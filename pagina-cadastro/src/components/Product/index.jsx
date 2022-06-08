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
        descricao: 'Tenis Adidas Original - Modelo: Superstar',
    },
    {
        id: 2,
        produto: 'Camiseta',
        marca: 'Nike',
        estoque: '5',
        preco: '189,90',
        prioridade: 'normal',
        descricao: 'Camiseta estampada Nike de algodão original.',
    },
    {
        id: 3,
        produto: 'Meia',
        marca: 'Nike',
        estoque: '2',
        preco: '18,90',
        prioridade: 'alta',
        descricao: 'Meia de algodão original Nike cano longo.',
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
    const [editProd, setEditProd] = useState({});

    function handleFormProducts(event) {
        event.preventDefault();

        const product = {
            id: Math.max.apply(Math, cadProd.map(item => item.id))  + 1,
            produto: document.getElementById('produto').value,
            marca: document.getElementById('marca').value,
            estoque: document.getElementById('estoque').value,
            preco: document.getElementById('preco').value,
            prioridade: document.getElementById('prioridade').value,
            descricao: document.getElementById('descricao').value,
        };

        setCadProd([ ...cadProd, { ...product }]);
    }

    function deletProduct(id) {
        const produtosFiltrados = cadProd.filter(product => product.id !== id);
        setCadProd([...produtosFiltrados])
    }
    

    function editarProduct(id) {
        const editProduct = cadProd.filter((product) => product.id === id);
        setEditProd(editProduct[0])
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
                    produtoSelecionado={editProd}
                    cadProd={cadProd}
                 />

                <div>
                    {cadProd.map((prod) => ( 
                        <ProductCard 
                            key={prod.id} 
                            prod={prod} 
                            editarProduct={editarProduct}
                            deletProduct={deletProduct}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}