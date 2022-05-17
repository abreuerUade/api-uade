import React from 'react'
import { createContext } from 'react'
import users from '../users'

export const AuthContext = createContext()


export default function AuthProvider({ children }) {

    const [user, setUser] = React.useState(null)

    const login = () => setUser(users[0])
    const logout = () => setUser(null)

    const isLogged = () => !!user

    const contextValue = { user,login, logout, isLogged }

    return (
    <AuthContext.Provider value={contextValue}>
        { children }
    </AuthContext.Provider>

    )
}
