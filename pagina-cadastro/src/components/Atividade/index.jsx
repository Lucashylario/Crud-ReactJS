import { useState } from "react";

import { AtividadeForm } from "./steps/AtividadeForm";
// import { AtividadeCard } from "./steps/AtividadeCard";
import AtividadeLista from "./steps/AtividadeLista";
import { useEffect } from "react";

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
    const [index, setIndex] = useState(0);
    const [atividades, setAtividades] = useState(initialState);
    const [atividade, setAtividade] = useState({id: 0});
   
    useEffect(() => {
        atividades.length <= 0 ? setIndex(1) : 
        setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1)
    }, [atividades])

    // Dados do header da pág de listas:
    const titleHeader = [
        {
            id: 1,
            title: 'Atividades',
            descricao: 'Controle de produtos'
        },
    ];

    // Função do botão "+ Atividade" para dicionar nova atividade na lista
    function addAtividade(ativ) {  
        // ativ.preventDefault();     
        setAtividades([...atividades, {...ativ, id: index}]); //[...spread operator] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    }

    // Função para cancelar edição da atividade no form
    function cancelarAtividade() {
        setAtividade({id: 0});
    }

    // Função para atualizar edição da atividade
    function atualizarAtividade(ativ) {
        setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
        setAtividade({id: 0});
    }

    // Função para o botão de deletar atividade
    function deletarAtividade(id) {
        const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
        setAtividades([...atividadesFiltradas]);
    }

    // Função do botão de editar atividade
    function pegarAtividade(id) {
        const atividade = atividades.filter(atividade => atividade.id === id)
        setAtividade(atividade[0]);
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
                    cancelarAtividade={cancelarAtividade}
                    atualizarAtividade={atualizarAtividade}
                    ativSelecionada={atividade}
                    atividades={atividades}
                />

                <AtividadeLista 
                    atividades={atividades}
                    deletarAtividade={deletarAtividade}
                    pegarAtividade={pegarAtividade}
                />
            </div>
            
        </div>
    )
}