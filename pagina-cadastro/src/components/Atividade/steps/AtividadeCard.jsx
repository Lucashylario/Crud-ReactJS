import prioridadeBaixaIcon from '../../../assets/priority-baixa.png';
import prioridadeNormalIcon from '../../../assets/priority-normal.png';
import prioridadeAltaIcon from '../../../assets/priority-alta.png';

import { FaPen, FaRegTrashAlt } from "react-icons/fa";

export const AtividadeCard = (props) => {
    
    // Função para selecionar prioridade do form
    function prioridadeLabel(param) {
        switch(param) {
            case '1':
                return 'Baixa';
            case '2':
                return 'Normal';
            case '3':
                return 'Alta';
            default:
                return 'Não definido';
        }
    }
    // Função para alterar icone da prioridade conforme selecionada
    function prioridadeStyle(param, icone) {
        switch(param) {
            case '1':
                return icone ? prioridadeBaixaIcon : 'green-500 border-green-500';
            case '2':
                return icone ? prioridadeNormalIcon : 'blue-500 border-blue-500';
            case '3':
                return icone ? prioridadeAltaIcon : 'red-500 border-red-500';
            default:
                return 'Não definido';
        }
    }

    return (
        // Estrutura do card da lista
        <div className={"border-2 p-2 text-slate-800 border-" + prioridadeStyle(props.ativ.prioridade)}>
            <div className="flex justify-between">
                <h5 className="font-semibold ml-2 mb-2"><span className="bg-slate-800 rounded-md text-slate-200 px-3 py-1 mr-2">{props.ativ.id}</span>{props.ativ.titulo}</h5>
                <h6 className="flex gap-1 mr-2 font-semibold">
                    Prioridade: 
                    <span className={"flex gap-1 text-" + prioridadeStyle(props.ativ.prioridade)}>
                        <img src={prioridadeStyle(props.ativ.prioridade, true)} alt="Icone" className="w-6 h-6" />
                        {prioridadeLabel(props.ativ.prioridade)}
                    </span>
                </h6>
            </div>
            <div className="py-2 my-3 border-y border-slate-300">
                <p className="ml-2">
                    {props.ativ.descricao}
                </p>
            </div>
            <div className="justify-end flex gap-2">
                <button onClick={() => props.pegarAtividade(props.ativ.id)} className="px-5 py-2 flex gap-1 items-center border rounded-lg text-blue-700 border-blue-800 hover:bg-blue-700 hover:text-blue-200">
                    <FaPen />Editar
                </button>
                
                <button onClick={() => props.deletarAtividade(props.ativ.id)} className="px-5 py-2 flex gap-1 items-center border rounded-lg text-red-700 border-red-700 hover:bg-red-700 hover:text-red-200">
                    <FaRegTrashAlt /> Deletar
                </button>
            </div>
        </div>
    )
}