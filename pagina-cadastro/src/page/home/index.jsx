import { HomeComponent } from "../../components/HomeComponent"
import { NavBar } from "../../components/NavBar"

export const Home = () => {
    return (
        <div className="flex bg-slate-200 h-screen">
            <NavBar />
            <HomeComponent />
        </div>
    )
}