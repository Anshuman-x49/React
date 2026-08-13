import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../../features/auth/ui/pages/Login"
import Register from "../../features/auth/ui/pages/Register"

const AppRoute = () => {

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

    return <RouterProvider router={router} />
}

export default AppRoute