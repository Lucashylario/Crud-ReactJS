export const Atividade = () => {
    
    const titleHeader = [
        {
            id: 1,
            title: 'Atividades',
            descricao: 'Controle de produtos'
        },
    ]
    
    const atividades = [
        {
            id: 1,
            descricao: 'Primeira Atividade'
        },
        {
            id: 2,
            descricao: 'Segunda Atividade'
        },
    ]
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

            <form>
                <input id="id" type="text" placeholder="id" />
                <input id="id" type="text" placeholder="descricao" />
                <button>+ Atividade</button>
            </form>

            <ul>
                {atividades.map(ativ => (
                    <li key={ativ.id}>{ativ.id} - {ativ.descricao}</li>
                ))}
            </ul>
        </div>
    )
}