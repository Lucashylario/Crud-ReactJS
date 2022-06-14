import { useState } from "react";

import { AtividadeForm } from "./steps/AtividadeForm";
import { AtividadeLista } from "./steps/AtividadeLista";

// Dados da lista de atividades importado pelo useStates:
let initialState = [
    {
        id: 1,
        prioridade: '1',
        titulo: 'titulo',
        descricao: 'Primeira Atividade',
    },
    {
        id: 2,
        prioridade: '2',
        titulo: 'titulo',
        descricao: 'Segunda Atividade',
    },
    {
        id: 3,
        prioridade: '3',
        titulo: 'titulo',
        descricao: 'Segunda Atividade',
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
            id: document.getElementById('id').value, // Importar id do input "id" 
            prioridade: document.getElementById('prioridade').value, // Importar id do input "prioridade" 
            titulo: document.getElementById('titulo').value, // Importar id do input "titulo" 
            descricao: document.getElementById('descricao').value, // Importar id do input "Descrição" 
        }

        // console.log(atividades);

        // Importa itens já existentes na lista de atividades adiciona nova atividade quando clicado no botão "+ Atividade"
        setAtividades([...atividades, {...atividade}]); //[...spread operator] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    }

    // Função para o botão de deletar atividade
    function deletarAtividade(id) {
        const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
        setAtividades([...atividadesFiltradas]);
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
                <AtividadeForm 
                    addAtividade={addAtividade}
                    atividades={atividades}
                />

                <div className="bg-slate-100 mt-5 p-5 shadow-lg shadow-slate-300 flex flex-col gap-2 ">
                        {atividades.map(ativ => (
                            <AtividadeLista 
                                key={ativ.id}
                                ativ={ativ}
                                deletarAtividade={deletarAtividade}
                            />
                        ))}
                </div>
            </div>
            
        </div>
    )
}