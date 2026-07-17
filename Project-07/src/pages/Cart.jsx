

import { useContext } from "react"
import { MyContext } from "../contexts/MyContext"

const Cart = () => {
    const { cart, updateQuantity, removeFromCart, setToggle } = useContext(MyContext)

    // Calculate totals
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-800 rounded-2xl border border-gray-700/50 shadow-xl max-w-2xl mx-auto w-full mt-8">
                <div className="bg-gray-700/50 p-4 rounded-full mb-6">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-400 mb-8 max-w-sm">Looks like you haven't added anything to your cart yet. Explore our products and find something you love!</p>
                <button 
                    onClick={() => setToggle(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-blue-900/30 cursor-pointer"
                >
                    Start Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                    <h2 className="text-2xl font-bold text-gray-100">Shopping Cart</h2>
                    <span className="text-sm text-gray-400 font-medium">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
                </div>
                
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {cart.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-gray-800/80 border border-gray-700/40 p-4 rounded-2xl shadow-sm hover:border-gray-700 transition-colors">
                            {/* Product Image */}
                            <div className="w-20 h-20 bg-white p-2 rounded-xl flex items-center justify-center shrink-0">
                                <img src={item.image} alt={item.title} className="max-h-16 object-contain" />
                            </div>

                            {/* Product details */}
                            <div className="flex-1 min-w-0 text-center sm:text-left">
                                <h3 className="text-base font-semibold text-gray-100 truncate">{item.title}</h3>
                                <p className="text-xs text-blue-400 font-medium uppercase tracking-wider mt-0.5">{item.category}</p>
                                <p className="text-sm text-gray-400 mt-1">${item.price.toFixed(2)} each</p>
                            </div>

                            {/* Actions & Quantity */}
                            <div className="flex items-center gap-6 justify-between w-full sm:w-auto">
                                {/* Quantity controls */}
                                <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
                                    <button 
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-3 py-1.5 hover:bg-gray-800 text-gray-400 hover:text-white font-bold transition-colors cursor-pointer"
                                    >
                                        −
                                    </button>
                                    <span className="px-3 text-sm font-semibold text-gray-200 select-none min-w-[2rem] text-center">
                                        {item.quantity}
                                    </span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="px-3 py-1.5 hover:bg-gray-800 text-gray-400 hover:text-white font-bold transition-colors cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Subtotal and remove */}
                                <div className="text-right flex flex-col items-end gap-1 min-w-[6rem]">
                                    <span className="text-base font-bold text-gray-200">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xs text-rose-400 hover:text-rose-300 font-medium transition-colors cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-800 border border-gray-700/50 p-6 rounded-2xl shadow-lg h-fit">
                <h3 className="text-xl font-bold text-gray-100 mb-6 pb-3 border-b border-gray-700/50">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Subtotal ({totalItems} items)</span>
                        <span className="font-semibold text-gray-200">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Shipping</span>
                        <span className="text-emerald-400 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Estimated Tax</span>
                        <span className="font-semibold text-gray-200">$0.00</span>
                    </div>
                    
                    <div className="border-t border-gray-700/50 pt-4 mt-2 flex justify-between text-lg font-bold text-gray-100">
                        <span>Total</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-blue-900/20 cursor-pointer">
                    Proceed to Checkout
                </button>
                
                <button 
                    onClick={() => setToggle(true)}
                    className="w-full mt-3 bg-gray-900 hover:bg-gray-700 border border-gray-700/50 hover:border-gray-600 text-gray-300 py-3 px-6 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer text-sm font-medium"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default Cart