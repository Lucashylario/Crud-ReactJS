import iconBaixa from '../../../assets/priority-baixa.png';
import iconNormal from '../../../assets/priority-normal.png';
import iconAlta from '../../../assets/priority-alta.png';
import React from 'react';

export default function ProductCard(props) {
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
                return icone ? iconNormal : 'blue-600 text-blue-600 border-blue-600';
            case 'alta':
                return icone ? iconAlta : 'red-600';
        }
    }

    return (
        <div>
            <div className={"mb-5 shadow-lg rounded-lg border-2 border-" + prioridadeIcon(props.prod.prioridade)} >
                <div className="justify-between flex mb-3 p-2">
                    <h5>
                        <span className="rounded-3xl px-[.4rem] ml-2 text-white bg-slate-600" >
                            {props.prod.id}
                        </span>
                    </h5>
                    <h6 className="flex mr-2 font-bold text-black">
                        Prioridade:
                        <span className={"flex text-" + prioridadeIcon(props.prod.prioridade)}>
                            <img src={prioridadeIcon(props.prod.prioridade, true)} alt="emoji triste" className="w-6 mx-1" /> 
                            {prioridadeLabel(props.prod.prioridade)}
                        </span>
                    </h6>
                </div>

                <ul className="grid grid-cols-4 font-semibold text-slate-800">
                    <li className="border-y-2 border-slate-400 border-r-2 py-1 pl-3"><span className='font-thin text-slate-500'>Produto:</span> {props.prod.produto}</li>
                    <li className="border-y-2 border-slate-400 py-1 pl-3" ><span className='font-thin text-slate-500'>Marca:</span> {props.prod.marca}</li>
                    <li className="border-2 py-1 pl-3 border-slate-400"><span className='font-thin text-slate-500'>Uni. Estoque:</span> {props.prod.estoque}</li>
                    <li className="border-y-2 border-slate-400 py-1 pl-3" ><span className='font-thin text-slate-500'>Valor:</span> {props.prod.preco}</li>
                    <li className="border-b-2 border-slate-400 py-2 px-3 w-[400%]" ><span className='font-thin text-slate-500'>Descrição:</span> {props.prod.descricao}</li>
                </ul>

                <div className=" justify-end flex p-2 ">
                    <button 
                        className="px-10 py-3 mr-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-slate-100 font-semibold"
                        onClick={() => props.editarProduct(props.prod.id)}
                    >
                        Editar
                    </button>

                    <button 
                        onClick={() => props.deletProduct(props.prod.id)}
                        className="px-10 py-3 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-600 hover:text-slate-100 font-semibold">
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    )
}
