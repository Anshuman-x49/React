import { Outlet } from "react-router"
import Navbar from "../components/Navbar"


const MainLayout = () => {
    return (
        <div className="bg-slate-100 min-h-screen p-4 grid grid-cols-[1fr_7fr] gap-4">
            <Navbar />
            <main className="h-full p-2">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout