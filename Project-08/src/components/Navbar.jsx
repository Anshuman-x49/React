import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <nav className="border-r border-gray-400 justify-between">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold">Shopper</h1>
                <div className="flex flex-col gap-4 px-5">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "font-semibold text-red-500 border-b border-gray-500" : "border-b border-gray-500"
                        }
                        to="/"
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "font-semibold text-red-500 border-b border-gray-500" : "border-b border-gray-900"
                        }
                        to="/shop"
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "font-semibold text-red-500 border-b border-gray-500" : "border-b border-gray-500"
                        }
                        to="/users"
                    >
                        Users
                    </NavLink>
                </div>
            </div>
            {/* <button>logout</button> */}
        </nav>
    )
}

export default Navbar