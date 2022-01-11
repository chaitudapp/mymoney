import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export const UseAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw 'useAuthContext must be inside an AuthContextProvider'
    }

    return context

}