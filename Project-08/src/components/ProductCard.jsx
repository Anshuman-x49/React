import { Heart, ShoppingBag, Star } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <div className="group w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">

            {/* Image */}
            <div className="relative flex h-64 items-center justify-center bg-gray-50 p-8">

                <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-sm">
                    <Heart
                        size={18}
                        className="text-gray-500 hover:fill-red-500 hover:text-red-500"
                    />
                </button>

                <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 object-contain transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">

                <p className="text-xs uppercase tracking-wider text-gray-400">
                    {product.category}
                </p>

                <h2 className="line-clamp-2 font-medium text-gray-900">
                    {product.title}
                </h2>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Star
                        size={15}
                        fill="currentColor"
                        className="text-yellow-500"
                    />
                    {product.rating.rate}
                    <span className="text-gray-400">
                        ({product.rating.count})
                    </span>
                </div>

                <div className="flex items-center justify-between pt-2">

                    <span className="text-2xl font-semibold text-gray-900">
                        ${product.price}
                    </span>

                    <button className="rounded-xl bg-black p-3 text-white transition hover:scale-105">
                        <ShoppingBag size={18} />
                    </button>

                </div>

            </div>
        </div>
    );
}