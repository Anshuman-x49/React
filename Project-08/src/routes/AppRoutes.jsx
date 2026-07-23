import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Users from "../pages/Users"


const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />
                },
                {
                    path: "users",
                    element: <Users />
                },
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes