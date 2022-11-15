import { createContext, useContext, useState } from "react"

const fakeAuthProvider = {
    isAuthenticated: false,

    signin(callback) {
        fakeAuthProvider.isAuthenticated = true
        // fake async
        setTimeout(callback, 100)
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false
        setTimeout(callback, 100)
    }
}

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    const signin = (newUser, callback) => {
        setUser(newUser)
        callback()
    }

    const signout = (callback) => {
        setUser(null)
        callback()
    }

    const value = {
        user, 
        signin,
        signout
    }

    return <AuthContext.Provider value={value} children={children} />
}

export function useAuth() {
    return useContext(AuthContext)
}