import { Atividade } from "../../components/Atividade"
import { NavBar } from "../../components/NavBar"

export const AtividadePage = () => {
    return (
        <div className="flex bg-slate-200">
            <NavBar />
            <Atividade />
        </div>
    )
}