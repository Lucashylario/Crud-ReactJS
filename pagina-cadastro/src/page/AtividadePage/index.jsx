import { Atividade } from "../../components/Atividade"
import { NavBar } from "../../components/NavBar"

export const AtividadePage = () => {
    return (
        <div className="bg-slate-200 flex">
            <NavBar />
            <Atividade />
        </div>
    )
}