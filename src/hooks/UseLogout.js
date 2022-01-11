import React, { useState,useEffect } from 'react'
import { projectAuth } from '../firebase/Config'
import { UseAuthContext } from './UseAuthContext' 

export const UseLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = UseAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            await projectAuth.signOut()

            dispatch( {type : 'LOGOUT'})
            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch(err) {
            if(!isCancelled){
                console.log(err)
                setError(err.message)
                setIsPending(true)
            }
        }
    }

    useEffect(() => {
        return () => 
            setIsCancelled(true)

    }, [])


    return {logout , error, isPending } 
}


