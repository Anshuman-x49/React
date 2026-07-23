import { createContext, useEffect, useState } from "react";
import api from "../config/api";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const res = await api.get("/products")
            setProducts(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return <ProductContext.Provider value={{
        products,
    }}>{children}</ProductContext.Provider>
}