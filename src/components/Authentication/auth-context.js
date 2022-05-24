import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogIn: (email,password) => {},
    onLogOut: () => {}
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const storedLoginInfo = localStorage.getItem("isLoggedIn")
        if (storedLoginInfo === "1") {
            setIsLoggedIn(true)
        }
    },[])

    const logInHandler = () => {
        localStorage.setItem("isLoggedIn","1")
        setIsLoggedIn(true)
    }
    const logOutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogIn:logInHandler,onLogOut:logOutHandler}}>{props.children}</AuthContext.Provider >
}

export default AuthContext