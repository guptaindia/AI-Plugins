'use client'

import { useRouter } from "next/navigation";

const axios = require("axios");
const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const router = useRouter();


    const [currentUser, setCurrentUser] = useState(JSON.parse(
        localStorage.getItem('user')
    ));

    const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout: 5000,
        // headers: {'x-auth-token': currentUser.token}
    });
    const [loggedIn, setLoggedIn] = useState(currentUser !== null);



    const logout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        router.push("/")
        // remove cookie
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    return <AppContext.Provider value={{ currentUser, setCurrentUser, axiosInstance, loggedIn, setLoggedIn, logout }} >
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;