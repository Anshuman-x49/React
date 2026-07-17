
import { useContext } from "react"
import { MyContext } from "../contexts/MyContext"

const Productcards = ({ product }) => {
    const { cart, addToCart, removeFromCart } = useContext(MyContext)

    const isInCart = cart.some((item) => item.id === product.id)

    // Render stars based on rating
    const ratingValue = product.rating?.rate || 0
    const ratingCount = product.rating?.count || 0

    return (
        <div className="flex flex-col bg-gray-800 border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative aspect-square w-full bg-white p-6 flex items-center justify-center overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {product.category}
                </span>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-5">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.round(ratingValue) ? "fill-current" : "text-gray-600 fill-none stroke-current stroke-2"}`}
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                        {ratingValue} ({ratingCount})
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 line-clamp-2 min-h-[3.5rem] leading-snug transition-colors duration-200">
                    {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 line-clamp-2 mt-1 mb-4 flex-1">
                    {product.description}
                </p>

                {/* Price and Action */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700/50">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                        ${product.price.toFixed(2)}
                    </span>

                    {isInCart ? (
                        <button
                            onClick={() => removeFromCart(product.id)}
                            className="bg-rose-500/10 hover:bg-rose-600 border border-rose-500/30 hover:border-rose-600 text-rose-400 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                        >
                            Remove
                        </button>
                    ) : (
                        <button
                            onClick={() => addToCart(product)}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 shadow-md shadow-blue-900/20 cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Productcards