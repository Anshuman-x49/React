import { createContext, useEffect, useState } from "react";
import api from "../config/api";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([])

    const getUser = async () => {
        try {
            const res = await api.get("/users")
            setUsers(res.data)
            console.log("user data -> ", res.data)
        } catch (error) {
            console.error("user data fetch error -> ", error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return <UserContext.Provider value={{
        users
    }}>
        {children}
    </UserContext.Provider>
}