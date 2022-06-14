export const AtividadeForm = (props) => {
    return (
        <form className="bg-slate-50 p-5 shadow-lg">
            <div className="grid grid-cols-2">
                <div className="w-full max-w-lg px-5 grid">
                    <label className="text-slate-500">ID:</label>
                    <input 
                        id="id" 
                        type="text" 
                        placeholder="Insira um ID" 
                        className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg" 
                        readOnly
                        value={Math.max.apply(Math, props.atividades.map(item => item.id)) + 1}
                    />
                </div>
                <div className="w-full max-w-lg px-5 grid">
                    <label className="text-slate-500">Prioridade:</label>
                    <select id="prioridade" className="mb-5 text-slate-800 bg-slate-200 p-3 rounded-lg">
                        <option defaultValue="0">Selecione...</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>
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