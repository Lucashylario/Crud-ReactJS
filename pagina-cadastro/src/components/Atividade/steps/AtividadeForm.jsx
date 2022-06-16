import { useEffect } from "react";
import { useState } from "react";


const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export const AtividadeForm = (props) => {
    const [atividade, setAtividade] = useState(atividadeAtual());
    
    useEffect(() => {
        if(props.ativSelecionada.id !== 0)
            setAtividade(props.ativSelecionada);
    }, [props.ativSelecionada])

    // Método onChange do input para pegar valores digitados
    const inputTextHandler = (e) => {
        const {name, value} = e.target;

        setAtividade({...atividade, [name]: value})
    }

    function atividadeAtual() {
        if (props.ativSelecionada.id !== 0) {
            return props.ativSelecionada;
        }
        else {
            return atividadeInicial;
        }
    }

    // Estrutura do formulário
    return (
        <form className="bg-slate-50 p-5 shadow-lg">
            <div className="grid grid-cols-2">
                <div className="w-full max-w-lg px-5 grid">
                    <label className="text-slate-500">Título:</label>
                    <input id="titulo" name="titulo" value={atividade.titulo} onChange={inputTextHandler} type="text" placeholder="Digite um título" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg" />
                </div>

                <div className="w-full max-w-lg px-5 grid">
                    <label className="text-slate-500">Prioridade:</label>
                    <select id="prioridade" name="prioridade" value={atividade.prioridade} onChange={inputTextHandler} className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg">
                        <option defaultValue="0">Selecione...</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>
                    </select>
                </div>

                <div className="w-full max-w-lg px-5 grid">
                    <label className="text-slate-500">Descrição:</label>
                    <textarea id="descricao" name="descricao" value={atividade.descricao} onChange={inputTextHandler} type="text" placeholder="Descreva sua atividade" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg" />
                </div>

            </div>
            
            <div className="w-full flex justify-center">
                <button 
                    onClick={props.addAtividade} 
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
    )
}