import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../../features/auth/ui/pages/Login"
import Register from "../../features/auth/ui/pages/Register"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { currentEmployee } from "../../features/auth/state/auth/AuthActions"
import type { AppDispatch } from "../store/store"

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    }
])

const AppRoute = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        (async () => {
            try {
                const res = await dispatch(currentEmployee()).unwrap();
                console.log("Current employee response:", res);
            } catch (err) {
                console.error("Failed to fetch current employee:", err);
            }
        })();
    }, [dispatch])

    return <RouterProvider router={router} />
}

export default AppRoute