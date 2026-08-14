import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from "../store/store.tsx"
import { useEffect } from 'react';
import AsideBar from '../../features/dashboard/ui/components/AsideBar.tsx';
import Navbar from '../../features/dashboard/ui/components/Navbar.tsx';

const Dashboardlayout = () => {

    const { mode } = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
    }, [mode])

    return (
        <div className={`${mode} min-h-screen bg-(--background) text-(--text) grid grid-cols-[auto_1fr]`}>
            <AsideBar />
            <div className="flex flex-col flex-1 min-w-0 bg-(--background)">
                <Navbar />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Dashboardlayout