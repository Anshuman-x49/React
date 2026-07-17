import { useContext } from "react"
import { MyContext } from "../contexts/MyContext"

const Navbar = () => {
    const { setToggle, toggle, cart } = useContext(MyContext)

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <div className='flex justify-between items-center p-6 bg-gray-800 shadow-md rounded-2xl text-white border border-gray-700/50'>
            <h1 className='font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 cursor-pointer' onClick={() => setToggle(true)}>
                QuickStore
            </h1>
            <div className="flex gap-6 font-semibold text-base items-center">
                <span 
                    onClick={() => setToggle(true)} 
                    className={`cursor-pointer transition-all duration-200 pb-1 border-b-2 ${
                        toggle 
                            ? "text-blue-400 border-blue-400" 
                            : "text-gray-400 border-transparent hover:text-gray-200"
                    }`}
                >
                    Home
                </span>
                <span 
                    onClick={() => setToggle(false)} 
                    className={`cursor-pointer transition-all duration-200 pb-1 border-b-2 flex items-center gap-1.5 ${
                        !toggle 
                            ? "text-blue-400 border-blue-400" 
                            : "text-gray-400 border-transparent hover:text-gray-200"
                    }`}
                >
                    Cart
                    {cartCount > 0 && (
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[1.25rem] text-center shadow-md animate-pulse">
                            {cartCount}
                        </span>
                    )}
                </span>
            </div>
            <button className='bg-blue-600 hover:bg-blue-500 hover:scale-105 duration-200 transition-all px-6 py-2 rounded-xl font-semibold cursor-pointer shadow-md shadow-blue-900/20 active:scale-95'>
                Login
            </button>
        </div>
    )
}

export default Navbar