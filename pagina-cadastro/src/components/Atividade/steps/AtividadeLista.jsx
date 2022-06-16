import { AtividadeCard } from './AtividadeCard'

export default function AtividadeLista(props) {
    return (
        // Estrutura da lista
        <div className="bg-slate-100 mt-5 p-5 shadow-lg shadow-slate-300 flex flex-col gap-2 ">
                {props.atividades.map(ativ => (
                    <AtividadeCard
                        key={ativ.id}
                        ativ={ativ}
                        deletarAtividade={props.deletarAtividade}
                        pegarAtividade={props.pegarAtividade}
                    />
                ))}
        </div>
    )
}
