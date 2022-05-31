import { HomeComponent } from "../../components/HomeComponent"
import { NavBar } from "../../components/NavBar"

export const Home = () => {
    return (
        <div className="bg-slate-200 flex">
            <NavBar />
            <HomeComponent />
        </div>
    )
}