import { createContext, useState } from "react";

const MyContext = createContext()

const ContextProvider = ({ children }) => {

    const [toggle, setToggle] = useState(true);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity + amount } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <MyContext.Provider value={{ toggle, setToggle, products, setProducts, cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </MyContext.Provider>
    )
}

export { ContextProvider, MyContext }