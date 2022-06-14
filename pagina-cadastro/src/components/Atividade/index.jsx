import { useState } from "react";
import prioridadeBaixaIcon from '../../assets/priority-baixa.png';
import prioridadeNormalIcon from '../../assets/priority-normal.png';
import prioridadeAltaIcon from '../../assets/priority-alta.png';

// Dados da lista de atividades importado pelo useStates:
let initialState = [
    {
        id: 1,
        descricao: 'Primeira Atividade'
    },
    {
        id: 2,
        descricao: 'Segunda Atividade'
    },
]

export const Atividade = () => {
    const [atividades, setAtividades] = useState(initialState);
    
    // Dados do header da pág de listas:
    const titleHeader = [
        {
            id: 1,
            title: 'Atividades',
            descricao: 'Controle de produtos'
        },
    ];

    // Função do botão "+ Atividade" para dicionar nova atividade na lista
    function addAtividade(e) {
        e.preventDefault();
        const atividade = { // Constante para adicionar novo objeto. O objeto deve conter os mesmos dados da lista de atividades
            id: document.getElementById('id').value, // Importar id do imput "id"
            descricao: document.getElementById('descricao').value, // Importar id do imput "Descrição"
        }

        // console.log(atividades);

        // Importa itens já existentes na lista de atividades adiciona nova atividade quando clicado no botão "+ Atividade"
        setAtividades([...atividades, {...atividade}]); //[...spread operator] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
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

            <div className="p-10 max-w-6xl mx-auto">
                <form className="bg-slate-50 p-5 shadow-lg">
                    <div className="grid grid-cols-2">
                        <div className="w-full max-w-lg px-5 grid">
                            <label className="text-slate-500">ID:</label>
                            <input id="id" type="text" placeholder="Insira um ID" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg" />
                        </div>
                        <div className="w-full max-w-lg px-5 grid">
                            <label className="text-slate-500">Prioridade:</label>
                            <select id="prioridade" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg">
                                <option defaultValue="selectPrioridade">Selecione...</option>
                                <option value="baixo">Baixa</option>
                                <option value="normal">Normal</option>
                                <option value="alta">Alta</option>
                            </select>
                        </div>
                        <div className="w-full max-w-lg px-5 grid">
                            <label className="text-slate-500">Título:</label>
                            <input id="titulo" type="text" placeholder="Digite um título" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg" />
                        </div>
                        <div className="w-full max-w-lg px-5 grid">
                            <label className="text-slate-500">Descrição:</label>
                            <input id="descricao" type="text" placeholder="Descreva sua atividade" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button 
                            onClick={addAtividade} 
                            className="
                                w-2/5
                                max-w-sm
                                bg-slate-200 
                                text-slate-800 border 
                                border-slate-800 
                                hover:bg-slate-800
                                hover:text-slate-200
                                hover:shadow-md
                                hover:shadow-slate-800
                                py-2 
                                rounded-lg
                        ">+ Atividade</button>
                    </div>
                </form>

                <div className="bg-slate-100 mt-5 p-5 shadow-lg shadow-slate-300 flex flex-col gap-2 ">
                        {atividades.map(ativ => (
                            <div key={ativ.id} className="border-2 p-2 text-slate-800">
                                <div className="flex justify-between">
                                    <h5 className="font-semibold ml-2 mb-2"><span className="bg-slate-800 rounded-md text-slate-200 px-3 py-1 mr-2">{ativ.id}</span>título</h5>
                                    <h6 className="flex gap-1 mr-2">
                                        Prioridade: <img src={prioridadeNormalIcon} alt="Icone" className="w-6 h-6" /> Normal
                                    </h6>
                                </div>
                                <div className="py-2 my-3 border-y border-slate-300">
                                    <p className="ml-2">
                                        {ativ.descricao}
                                    </p>
                                </div>
                                <div className="justify-end flex gap-2">
                                    <button className="px-5 py-2 border rounded-lg text-blue-700 border-blue-800 hover:bg-blue-700 hover:text-blue-200">Editar</button>
                                    <button className="px-5 py-2 border rounded-lg text-red-700 border-red-700 hover:bg-red-700 hover:text-red-200">Deletar</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            
        </div>
    )
}