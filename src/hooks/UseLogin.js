import {useState, useEffect} from 'react'
import {projectAuth} from '../firebase/Config'
import { UseAuthContext } from './UseAuthContext'


export const UseLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = UseAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password)

            

            if(!res) {
                throw new Error('Could not complete signup')
            }

            
            dispatch({type:'LOGIN', payload: res.user })

            

            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        }
        catch (err) {
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

    return { error, isPending ,login }
}