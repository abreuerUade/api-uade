import { AuthContext } from "./AuthProvider"
import { useContext } from "react"

export default function useAuth() {

    return useContext(AuthContext)
         
}
