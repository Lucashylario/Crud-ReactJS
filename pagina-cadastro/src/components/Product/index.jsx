import { useEffect, useState } from 'react';
import Axios from 'axios';
import { CardProducts } from './CardProducts';

export const Product = () => {
    return (
        <div className="table-row w-full">
            <header className="w-[100%] h-28 pt-5 pl-8 bg-slate-100 shadow-lg text-black ">
                <h2 className="text-3xl font-medium">Produtos</h2>
                <span className="text-2xl font-thin text-slate-500">Sistema de cadastros LHTech</span>
            </header>

            <div className="w-[95%] h-3/5 p-10 mx-auto mt-5 bg-slate-100 shadow-lg">
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                        onChange={handleChangeValue} 
                    />

                    <input 
                        type="text" 
                        name="price" 
                        placeholder="Preço" 
                        className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                        onChange={handleChangeValue} 
                    />

                    <input 
                        type="text" 
                        name="marca" 
                        placeholder="Marca" 
                        className='bg-slate-200 w-96 p-3 text-xl rounded-2xl border-2 border-slate-500' 
                        onChange={handleChangeValue} 
                    />
                
                    <button 
                        className='bg-slate-900 text-white px-10 py-3 rounded-3xl' 
                        onClick={() => handleClickButton()}>Cadastrar</button>
                
                </div>
                { typeof listProducts !== "undefined" && listProducts.map((values) => {
                    return <CardProducts 
                        key={value.id} 
                        listCard={listProducts} 
                        setListCard={setListProducts} 
                        id={value.id}
                        name={value.name}
                        price={value.price}
                        marca={value.marca}
                        />;
                })}
            </div>
        </div>
    )
}