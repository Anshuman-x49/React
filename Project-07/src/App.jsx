import { useContext, useEffect } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { MyContext } from "./contexts/MyContext"
import Productcards from "./components/Productcards"
import Cart from "./pages/Cart"

const App = () => {

  const { toggle, products, setProducts } = useContext(MyContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setProducts]);



  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto w-full px-4 py-6 flex flex-col gap-6">
        <Navbar />
        {
          toggle ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
              {products.map((product) => (
                <Productcards key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Cart />
          )}
      </div>
    </div>
  )
}

export default App